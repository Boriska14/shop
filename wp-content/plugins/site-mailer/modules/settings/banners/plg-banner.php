<?php

namespace SiteMailer\Modules\Settings\Banners;

use SiteMailer\Modules\Core\Components\Pointers;
use SiteMailer\Modules\Logs\Database\Log_Entry;
use SiteMailer\Modules\Logs\Database\Logs_Table;
use SiteMailer\Modules\Connect\Classes\Data;
use SiteMailer\Modules\Settings\Classes\PLG_Form_Detector;
use SiteMailer\Modules\Settings\Classes\Settings;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * PLG_Banner - Product-Led Growth Banner for automation features
 */
class PLG_Banner
{
    const POINTER_ACTION = 'site_mailer_pointer_dismissed';
    const POINTER_NONCE_KEY = 'site-mailer-pointer-dismissed';

    /**
     * Shared URLs and configuration
     */
    const INSTALL_PLUGIN_SLUG = 'send-app';
    const LEARN_MORE_URL = 'https://go.elementor.com/sm-plg-send-banner/';
    const MIN_EMAILS_DEFAULT = 50;
    const MIN_ACTIVE_DAYS_DEFAULT = 14;
    const TYPE_PRIORITY = ['forms', 'unsubscribe', 'woocommerce', 'domains'];
    private static $resolved_type = null;

    private static function get_banner_props(): array
    {
        return [
            'forms' => [
                'title' => __('Turn New Leads into Raving Fans', 'site-mailer'),
                'text' => __('Send welcome emails, nurture sequences, or one-time announcements—all from the forms you already use.', 'site-mailer'),
            ],
            'woocommerce' => [
                'title' => __('Sell More with Smarter WooCommerce Emails', 'site-mailer'),
                'text' => __('Turn missed sales into repeat buyers with automations like Abandoned Cart, Winbacks, and Birthday coupons. Just set it and grow.', 'site-mailer'),
            ],
            'domains' => [
                'title' => __('Your Brand. Your Domain. Your Style.', 'site-mailer'),
                'text' => __('Now that your domain is connected, let’s match it with beautifully branded emails your audience will remember.', 'site-mailer'),
            ],
            'unsubscribe' => [
                'title' => __('Save Time. Automate Your Marketing.', 'site-mailer'),
                'text' => __('If you’re sending newsletters, why not let automation handle the follow-ups? From welcomes to re-engagement—set it once, and let it flow.', 'site-mailer'),
            ],
        ];
    }

    private static function get_pointer_name(string $type): string
    {
        return 'site_mailer_plg_' . sanitize_key($type) . '_banner';
    }

    public static function should_show_plg_banner(string $type = 'forms'): bool
    {
        if (null === self::$resolved_type) {
            self::$resolved_type = self::resolve_visible_type();
        }

        return self::$resolved_type === $type;
    }

    private static function resolve_visible_type(): ?string
    {
        foreach (self::TYPE_PRIORITY as $candidate) {
            if (self::passes_conditions($candidate) && !self::user_viewed_plg_banner($candidate)) {
                return $candidate;
            }
        }
        return null;
    }

    private static function passes_conditions(string $type): bool
    {
        switch ($type) {
            case 'woocommerce':
                return self::is_woocommerce_banner_eligible();

            case 'forms':
                return self::is_forms_banner_eligible();

            case 'domains':
                return self::is_domain_banner_eligible();

            case 'unsubscribe':
                return self::is_unsubscribe_banner_eligible();

            default:
                return false;
        }
    }

    public static function user_viewed_plg_banner(string $type = 'forms'): bool
    {
        return Pointers::is_dismissed(self::get_pointer_name($type));
    }

    private static function has_min_email_activity(): bool
    {
        $min_emails = self::MIN_EMAILS_DEFAULT;
        $count = (int) Logs_Table::select_var('COUNT(*)', '1');
        return $count >= $min_emails;
    }

    private static function has_supported_form_plugin(): bool
    {
        return PLG_Form_Detector::has_any_plg_form_plugin();
    }

    private static function has_woocommerce_installed(): bool
    {
        if (class_exists('WooCommerce')) {
            return true;
        }
        if (function_exists('is_plugin_active')) {
            return is_plugin_active('woocommerce/woocommerce.php');
        }
        return false;
    }

    private static function get_first_any_mail_datetime(): ?string
    {
        return Logs_Table::select_var(
            'MIN(' . Logs_Table::CREATED_AT . ')',
            '1'
        );
    }

    private static function is_active_min_days(): bool
    {
        $min_days = (int) apply_filters('site_mailer_plg_min_active_days', self::MIN_ACTIVE_DAYS_DEFAULT);
        $first_any = self::get_first_any_mail_datetime();
        if (!$first_any) {
            return true;
        }
        $base_time = strtotime($first_any);

        if (!$base_time) {
            return false;
        }

        $now = current_time('timestamp');
        $days_active = ($now - $base_time) / DAY_IN_SECONDS;
        return $days_active >= $min_days;
    }

    private static function meets_min_usage_requirements(): bool
    {
        return self::has_min_email_activity() && self::is_active_min_days();
    }

    private static function is_woocommerce_banner_eligible(): bool
    {
        return self::meets_min_usage_requirements() && self::has_woocommerce_installed();
    }

    private static function is_forms_banner_eligible(): bool
    {
        return self::meets_min_usage_requirements() && self::has_supported_form_plugin();
    }

    private static function is_domain_banner_eligible(): bool
    {
        return 'verified' === Settings::get(Settings::CUSTOM_DOMAIN_VERIFICATION_STATUS);
    }

    private static function is_unsubscribe_banner_eligible(): bool
    {
        return (bool) Settings::get(Settings::UNSUBSCRIBE);
    }

    public static function get_plg_banner(string $type)
    {
        if (!self::should_show_plg_banner($type)) {
            return;
        }

        $banner_props = self::get_banner_props();
        $props = $banner_props[$type] ?? $banner_props['forms'];

        $install_url = wp_nonce_url(
            self_admin_url('update.php?action=install-plugin&plugin=' . self::INSTALL_PLUGIN_SLUG),
            'install-plugin_' . self::INSTALL_PLUGIN_SLUG
        );
        $install_url = html_entity_decode( $install_url, ENT_QUOTES );
        $learn_more_url = self::LEARN_MORE_URL;

        $url = admin_url('admin-ajax.php');
        $nonce = wp_create_nonce(self::POINTER_NONCE_KEY);
        $pointer_name = self::get_pointer_name($type);
        ?>
        <div class="site-mailer-plg-banner">
            <div class="plg-banner-container">
                <div class="plg-banner-content">
                    <div class="plg-banner-icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11 2.0625C11.3797 2.0625 11.6875 2.3703 11.6875 2.75V3.66667C11.6875 4.04636 11.3797 4.35417 11 4.35417C10.6203 4.35417 10.3125 4.04636 10.3125 3.66667V2.75C10.3125 2.3703 10.6203 2.0625 11 2.0625ZM4.6472 4.6472C4.91568 4.37871 5.35098 4.37871 5.61947 4.6472L6.26114 5.28886C6.52962 5.55735 6.52962 5.99265 6.26114 6.26114C5.99265 6.52962 5.55735 6.52962 5.28886 6.26114L4.6472 5.61947C4.37871 5.35098 4.37871 4.91568 4.6472 4.6472ZM17.3528 4.6472C17.6213 4.91568 17.6213 5.35098 17.3528 5.61947L16.7111 6.26114C16.4427 6.52962 16.0074 6.52962 15.7389 6.26114C15.4704 5.99265 15.4704 5.55735 15.7389 5.28886L16.3805 4.6472C16.649 4.37871 17.0843 4.37871 17.3528 4.6472ZM11 7.10417C10.1823 7.10417 9.38539 7.36144 8.72207 7.83954C8.05874 8.31763 7.56266 8.99232 7.30409 9.76803C7.04552 10.5437 7.03757 11.3811 7.28137 12.1616C7.52518 12.9421 8.00837 13.6261 8.6625 14.1167C8.68759 14.1355 8.71137 14.156 8.73366 14.1781C8.95253 14.3947 9.14416 14.6358 9.30518 14.8958H12.6948C12.8558 14.6358 13.0475 14.3947 13.2663 14.1781C13.2886 14.156 13.3124 14.1355 13.3375 14.1167C13.9916 13.6261 14.4748 12.9421 14.7186 12.1616C14.9624 11.3811 14.9545 10.5437 14.6959 9.76803C14.4373 8.99232 13.9413 8.31763 13.2779 7.83954C12.6146 7.36144 11.8177 7.10417 11 7.10417ZM13.6957 15.9407C13.7212 15.899 13.7423 15.8543 13.7585 15.8073C13.8741 15.5792 14.024 15.3694 14.2036 15.1855C15.0678 14.5241 15.7064 13.6111 16.0311 12.5716C16.3609 11.5157 16.3502 10.3827 16.0004 9.33322C15.6505 8.28373 14.9794 7.37092 14.0819 6.72408C13.1845 6.07724 12.1063 5.72917 11 5.72917C9.89374 5.72917 8.81553 6.07724 7.91809 6.72408C7.02065 7.37092 6.34948 8.28373 5.99965 9.33322C5.64982 10.3827 5.63907 11.5157 5.96892 12.5716C6.29364 13.6111 6.93224 14.5241 7.79639 15.1855C7.97583 15.3693 8.12568 15.5789 8.24125 15.8068C8.25752 15.8542 8.27882 15.8992 8.30452 15.9412C8.33415 16.0094 8.36081 16.0789 8.3844 16.1496C8.50952 16.525 8.54453 16.9246 8.48658 17.316C8.48164 17.3493 8.47917 17.383 8.47917 17.4167C8.47917 18.0852 8.74475 18.7264 9.2175 19.1992C9.69025 19.6719 10.3314 19.9375 11 19.9375C11.6686 19.9375 12.3098 19.6719 12.7825 19.1992C13.2552 18.7264 13.5208 18.0852 13.5208 17.4167C13.5208 17.383 13.5184 17.3493 13.5134 17.316C13.4555 16.9246 13.4905 16.525 13.6156 16.1496C13.6392 16.0787 13.666 16.009 13.6957 15.9407ZM12.1703 16.2708H9.82967C9.89863 16.6623 9.90746 17.063 9.85495 17.459C9.8656 17.7475 9.98488 18.022 10.1898 18.2269C10.4047 18.4418 10.6961 18.5625 11 18.5625C11.3039 18.5625 11.5953 18.4418 11.8102 18.2269C12.0151 18.022 12.1344 17.7475 12.1451 17.459C12.0925 17.063 12.1014 16.6623 12.1703 16.2708ZM2.0625 11C2.0625 10.6203 2.3703 10.3125 2.75 10.3125H3.66667C4.04636 10.3125 4.35417 10.6203 4.35417 11C4.35417 11.3797 4.04636 11.6875 3.66667 11.6875H2.75C2.3703 11.6875 2.0625 11.3797 2.0625 11ZM17.6458 11C17.6458 10.6203 17.9536 10.3125 18.3333 10.3125H19.25C19.6297 10.3125 19.9375 10.6203 19.9375 11C19.9375 11.3797 19.6297 11.6875 19.25 11.6875H18.3333C17.9536 11.6875 17.6458 11.3797 17.6458 11Z"
                                fill="#2563EB" />
                        </svg>
                    </div>
                    <div class="plg-banner-text">
                        <h3><?php echo esc_html($props['title']); ?></h3>
                        <p><?php echo esc_html($props['text']); ?></p>
                        <div class="plg-banner-actions">
                            <a href="<?php echo esc_url($install_url); ?>" target="_blank"
                                class="plg-banner-button plg-banner-button-install"><span><?php esc_html_e('Install Send', 'site-mailer'); ?></span></a>
                            <a href="<?php echo esc_url($learn_more_url); ?>" target="_blank"
                                class="plg-banner-button plg-banner-button-learn-more"><span><?php esc_html_e('Learn more', 'site-mailer'); ?></span></a>
                        </div>
                    </div>
                    <div class="plg-banner-actions">
                        <button class="plg-dismiss-button" type="button">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M13.2803 1.28033C13.5732 0.987437 13.5732 0.512563 13.2803 0.21967C12.9874 -0.0732233 12.5126 -0.0732233 12.2197 0.21967L6.75 5.68934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L5.68934 6.75L0.21967 12.2197C-0.0732233 12.5126 -0.0732233 12.9874 0.21967 13.2803C0.512563 13.5732 0.987437 13.5732 1.28033 13.2803L6.75 7.81066L12.2197 13.2803C12.5126 13.5732 12.9874 13.5732 13.2803 13.2803C13.5732 12.9874 13.5732 12.5126 13.2803 12.2197L7.81066 6.75L13.2803 1.28033Z"
                                    fill="#9CA3AF" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .site-mailer-plg-banner {
                margin: 24px 24px 24px 6px;
                background-color: rgb(255, 255, 255);
                color: rgb(12, 13, 14);
                position: relative;
                margin-bottom: 40px;
                transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
                border-width: 1px;
                border-style: solid;
                border-color: #3B82F6;
                border-image: initial;
                border-radius: 4px;
                overflow: hidden;
                position: relative;
            }

            .plg-banner-container {
                padding: 16px 20px;
            }

            .plg-banner-content {
                display: flex;
                align-items: flex-start;
                gap: 16px;
            }

            .plg-banner-icon {
                flex-shrink: 0;
                width: 24px;
                height: 24px;
                margin-top: 2px;
            }

            .plg-banner-text {
                flex: 1;
                min-width: 0;
            }

            .plg-banner-text h3 {
                margin: 0 0 4px 0;
                font-size: 16px;
                font-weight: 600;
                color: #111827;
                line-height: 1.25;
            }

            .plg-banner-text p {
                margin: 0;
                font-size: 14px;
                color: #6B7280;
                line-height: 1.4;
            }

            .plg-banner-actions {
                display: flex;
                align-items: center;
                gap: 12px;
                flex-shrink: 0;
            }

            .plg-banner-button {
                border: 1px solid #3B82F6;
                padding: 5px 10px;
                text-decoration: none;
                color: #3B82F6;
                display: inline-block;
                margin: 10px 10px 0 0;
                border-radius: 5px;
            }

            .plg-banner-button-install,
            .plg-banner-button-install:hover {
                background-color: #3B82F6;
                color: #fff;
            }

            .plg-dismiss-button {
                background: none;
                border: none;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: background-color 0.2s ease;
                line-height: 1;
                margin-left: 8px;
            }

            .plg-dismiss-button:hover {
                background: #F3F4F6;
            }

            .plg-dismiss-button svg {
                display: block;
            }
        </style>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const plgBanner = document.querySelector('.site-mailer-plg-banner');
                const dismissButton = document.querySelector('.plg-dismiss-button');

                if (dismissButton && plgBanner) {
                    dismissButton.addEventListener('click', function () {
                        const params = new URLSearchParams();
                        params.append('action', "<?php echo esc_js(self::POINTER_ACTION); ?>");
                        params.append('nonce', "<?php echo esc_js($nonce); ?>");
                        params.append('data[pointer]', "<?php echo esc_js($pointer_name); ?>");

                        fetch('<?php echo esc_js($url); ?>', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                            credentials: 'same-origin',
                            body: params.toString(),
                        })
                            .then(function (response) {
                                if (!response.ok) { throw new Error('Network response was not ok'); }
                                return response.text();
                            })
                            .then(function () {
                                plgBanner.style.transition = 'opacity 0.3s ease';
                                plgBanner.style.opacity = '0';
                                setTimeout(function () {
                                    plgBanner.remove();
                                }, 300);
                            })
                            .catch(function (error) {
                                console.error('PLG Banner Error:', error);
                                plgBanner.remove();
                            });
                    });
                }
            });
        </script>
        <?php
    }

    public static function get_banner_data(string $type): array
    {
        $banner_props = self::get_banner_props();
        $props = $banner_props[$type] ?? $banner_props['forms'];

        $install_url = wp_nonce_url(
            self_admin_url('update.php?action=install-plugin&plugin=' . self::INSTALL_PLUGIN_SLUG),
            'install-plugin_' . self::INSTALL_PLUGIN_SLUG
        );
        $install_url = html_entity_decode( $install_url, ENT_QUOTES );

        $ajax_url = admin_url('admin-ajax.php');
        $nonce = wp_create_nonce(self::POINTER_NONCE_KEY);
        $pointer_name = self::get_pointer_name($type);

        return [
            'show' => self::should_show_plg_banner($type),
            'title' => $props['title'],
            'text' => $props['text'],
            'installUrl' => $install_url,
            'learnUrl' => self::LEARN_MORE_URL,
            'ajaxUrl' => $ajax_url,
            'nonce' => $nonce,
            'pointerAction' => self::POINTER_ACTION,
            'pointerName' => $pointer_name,
        ];
    }
}
