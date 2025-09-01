<?php

namespace SiteMailer\Modules\Settings\Classes;

use Exception;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class PLG_Form_Detector {

	private static $plg_supported_plugins = [
		// WPForms (paid)
		'wpforms/wpforms.php' => [
			'name' => 'WPForms',
			'class' => 'WPForms',
			'function' => 'wpforms',
		],
		// WPForms Lite (most common free slug)
		'wpforms-lite/wpforms.php' => [
			'name' => 'WPForms',
			'class' => 'WPForms',
			'function' => 'wpforms',
		],
		'contact-form-7/wp-contact-form-7.php' => [
			'name' => 'Contact Form 7',
			'class' => 'WPCF7',
			'function' => 'wpcf7',
		],
		'ninja-forms/ninja-forms.php' => [
			'name' => 'Ninja Forms',
			'class' => 'Ninja_Forms',
			'function' => null,
		],
		'gravityforms/gravityforms.php' => [
			'name' => 'Gravity Forms',
			'class' => 'GFForms',
			'function' => null,
		],
	];

	public static function get_active_plg_form_plugins(): array {
		return array_filter(
			self::$plg_supported_plugins,
			function ( $plugin_info, $plugin_path ) {
				return self::is_plg_plugin_active( $plugin_path, $plugin_info );
			},
			ARRAY_FILTER_USE_BOTH
		);
	}

	public static function has_any_plg_form_plugin(): bool {
		return ! empty( self::get_active_plg_form_plugins() );
	}

	private static function is_plg_plugin_active( string $plugin_path, array $plugin_info ): bool {
		// First check if plugin is activated
		if ( ! self::is_plugin_active_safe( $plugin_path ) ) {
			return false;
		}

		// Additional checks to ensure plugin is functional
		if ( ! empty( $plugin_info['class'] ) && ! class_exists( $plugin_info['class'] ) ) {
			return false;
		}

		if ( ! empty( $plugin_info['function'] ) && ! function_exists( $plugin_info['function'] ) ) {
			return false;
		}

		return true;
	}

	private static function is_plugin_active_safe( string $plugin_path ): bool {
		if ( function_exists( 'is_plugin_active' ) ) {
			return is_plugin_active( $plugin_path );
		}
		if ( file_exists( ABSPATH . 'wp-admin/includes/plugin.php' ) ) {
			include_once ABSPATH . 'wp-admin/includes/plugin.php';
			if ( function_exists( 'is_plugin_active' ) ) {
				return is_plugin_active( $plugin_path );
			}
		}
		$active_plugins = (array) get_option( 'active_plugins', [] );
		return in_array( $plugin_path, $active_plugins, true );
	}
}
