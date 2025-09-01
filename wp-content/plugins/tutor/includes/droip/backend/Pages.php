<?php
/**
 * Preview script for html markup generator
 *
 * @package tutor-droip-elements
 */

namespace TutorLMSDroip;

use Droip\HelperFunctions;
use TUTOR\Input;

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Class Pages
 * This class is used to define all helper functions.
 */
class Pages
{

    /**
     * Class constructor
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        /**
         * Manage Post API call's
         */
        add_action('wp_ajax_nopriv_tde_get_apis', [$this, 'tde_get_apis']);
        add_action('wp_ajax_tde_get_apis', [$this, 'tde_get_apis']);

        // add_action('template_redirect', [$this, 'control_pages_content']);
        add_action('template_include', [$this, 'may_be_change_template'], PHP_INT_MAX);

        add_filter('droip_assets_should_load', [$this, 'load_droip_assets']);

        add_action('wp_enqueue_scripts', [$this, 'load_assets'], 100);
    }

    /**
     * Get all APIs
     *
     * @since 1.0.0
     */
    public function tde_get_apis()
    {
        $course_template = Helper::get_course_template_posts();

        $pages = [];
        foreach ($course_template as $key => $template) {
            $pages[] = [
                'id'          => $template->ID,
                'title'       => $template->post_title,
                'post_type'   => $template->post_type,
                'status'      => $template->post_status,
                'preview_url' => $template->guid,
                'editor_url'  => add_query_arg(
                    [
                        'action'  => 'droip',
                        'post_id' => $template->ID,
                    ],
                    $template->guid
                ),
            ];
        }

        wp_send_json_success($pages);
    }

    public function may_be_change_template($template_path)
    {
        $action   = Input::get('action');
        $load_for = Input::get('load_for');
        if ($this->is_course_page() && ($action !== 'droip' || $load_for === 'droip-iframe')) {
            $template_path = $this->generate_page_using_full_canvas_template($template_path);
        }

        if ($this->is_course_bundle_page() && ($action !== 'droip' || $load_for === 'droip-iframe')) {
            $template_path = $this->generate_page_using_full_canvas_template($template_path);
        }

        if ($this->is_course_list_page() && ($action !== 'droip' || $load_for === 'droip-iframe')) {
            $template_path = $this->generate_utility_page_content_with_fullcanvas_template_using_type('lms_course_list', $template_path);
        }

        if ($this->is_cart_page() && ($action !== 'droip' || $load_for === 'droip-iframe')) {
            $template_path = $this->generate_utility_page_content_with_fullcanvas_template_using_type('lms_cart', $template_path);
        }

        if ($this->is_checkout_page() && ($action !== 'droip' || $load_for === 'droip-iframe')) {
            $template_path = $this->generate_utility_page_content_with_fullcanvas_template_using_type('lms_checkout', $template_path);
        }

        return $template_path;
    }

    private function generate_utility_page_content_with_fullcanvas_template_using_type($type, $template_path)
    {
        $utility_page = HelperFunctions::find_utility_page_for_this_context($type);
        if ($utility_page) {
            $html = apply_filters(
                'droip_html_generator',
                '',
                $utility_page['id']
            );
            $custom_data = [
                'droip_template_content' => $html,
                'droip_template_id'      => $utility_page['id'],
            ];
            set_query_var('droip_custom_data', $custom_data);
            $template_path = DROIP_FULL_CANVAS_TEMPLATE_PATH;
        }

        return $template_path;
    }

    /**
     * Generate course page
     *
     * @since 1.0.0
     */
    private function generate_page_using_full_canvas_template($template_path)
    {
        $template = apply_filters('droip_template_finder', 'post', get_post(get_the_ID()));
        if ($template) {

            $course_template = get_post($template['id']);

            if ($course_template->post_status === 'publish') {
                $html = apply_filters(
                    'droip_html_generator',
                    '',
                    $course_template->ID
                );
                $custom_data = [
                    'droip_template_content' => $html, // Example: Get the current post ID
                    'droip_template_id'      => $template['id'],
                ];
                // Set a global variable with custom data to make it available in the template
                set_query_var('droip_custom_data', $custom_data);

                $template_path = DROIP_FULL_CANVAS_TEMPLATE_PATH;
            }
        }

        return $template_path;
    }

    /**
     * Load assets for preview page
     */
    public function load_assets()
    {
        wp_enqueue_script(TDE_APP_PREFIX . '-tutor-droip-preview', TDE_PLUGIN_ROOT_BASE . 'build/js/preview.min.js', ['wp-i18n'], TDE_APP_VERSION, true);
        wp_enqueue_style(TDE_APP_PREFIX . '-tutor-droip-preview', TDE_PLUGIN_ROOT_BASE . 'build/css/preview.min.css', null, TDE_APP_VERSION);
        wp_localize_script(TDE_APP_PREFIX . '-tutor-droip-preview', TDE_APP_PREFIX, [
            'isLoggedIn' => is_user_logged_in(),
        ]);
    }

    /**
     * Load droip assets
     *
     * @param bool $default_value default value.
     * @return bool
     */
    public function load_droip_assets($default_value)
    {
        if ($this->is_course_page() || $this->is_course_bundle_page()) {
            return true;
        }
        return $default_value;
    }

    /**
     * Check if current page is course page
     *
     * @return bool
     */
    private function is_course_page()
    {
        global $wp_query;
        $tutor = tutor();
        if ($wp_query->is_single && ! empty($wp_query->query_vars['post_type']) && $wp_query->query_vars['post_type'] === $tutor->course_post_type) {
            return true;
        }

        return false;
    }

    private function is_course_bundle_page()
    {
        global $wp_query;
        $tutor = tutor();
        if ($wp_query->is_single && ! empty($wp_query->query_vars['post_type']) && $wp_query->query_vars['post_type'] === $tutor->bundle_post_type) {
            return true;
        }

        return false;
    }

    private function is_course_list_page()
    {
        global $wp_query;
        if (is_array($wp_query->query_vars['post_type']) && in_array('courses', $wp_query->query_vars['post_type']) && ! $wp_query->is_single) {
            if (isset($wp_query->query_vars['course-category']) || isset($wp_query->query_vars['course-tag'])) {
                return false;
            }
            return true;
        }
        return false;
    }

    private function is_cart_page()
    {
        global $wp_query;
        if (isset($wp_query->query['pagename']) && $wp_query->query['pagename'] === 'cart') {
            return true;
        }
        if (isset($wp_query->query['droip_utility_page_type']) && $wp_query->query['droip_utility_page_type'] === 'lms_cart') {
            return true;
        }
        return false;
    }
    private function is_checkout_page()
    {
        global $wp_query;
        if (isset($wp_query->query['pagename']) && $wp_query->query['pagename'] === 'checkout') {
            return true;
        }
        if (isset($wp_query->query['droip_utility_page_type']) && $wp_query->query['droip_utility_page_type'] === 'lms_cart') {
            return true;
        }
        return false;
    }
}
