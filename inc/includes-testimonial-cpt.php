<?php
/**
 * Testimonial Custom Post Type
 *
 * @package CustomTheme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Testimonial Custom Post Type
 *
 * @return void
 */
function custom_theme_register_testimonial_cpt(): void {
	$labels = array(
		'name'                  => __( 'Testimonials', 'mbn-theme' ),
		'singular_name'         => __( 'Testimonial', 'mbn-theme' ),
		'menu_name'             => __( 'Testimonials', 'mbn-theme' ),
		'name_admin_bar'        => __( 'Testimonial', 'mbn-theme' ),
		'add_new'               => __( 'Add New', 'mbn-theme' ),
		'add_new_item'          => __( 'Add New Testimonial', 'mbn-theme' ),
		'new_item'              => __( 'New Testimonial', 'mbn-theme' ),
		'edit_item'             => __( 'Edit Testimonial', 'mbn-theme' ),
		'view_item'             => __( 'View Testimonial', 'mbn-theme' ),
		'all_items'             => __( 'All Testimonials', 'mbn-theme' ),
		'search_items'          => __( 'Search Testimonials', 'mbn-theme' ),
		'parent_item_colon'     => __( 'Parent Testimonials:', 'mbn-theme' ),
		'not_found'             => __( 'No testimonials found.', 'mbn-theme' ),
		'not_found_in_trash'    => __( 'No testimonials found in Trash.', 'mbn-theme' ),
		'featured_image'        => __( 'Client Avatar', 'mbn-theme' ),
		'set_featured_image'    => __( 'Set client avatar', 'mbn-theme' ),
		'remove_featured_image' => __( 'Remove client avatar', 'mbn-theme' ),
		'use_featured_image'    => __( 'Use as client avatar', 'mbn-theme' ),
	);

	$args = array(
		'labels'             => $labels,
		'public'             => false,
		'publicly_queryable' => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => false,
		'capability_type'    => 'post',
		'has_archive'        => false,
		'hierarchical'       => false,
		'menu_position'      => 20,
		'menu_icon'          => 'dashicons-format-quote',
		'supports'           => array( 'title', 'editor', 'thumbnail' ),
		'show_in_rest'       => true,
	);

	register_post_type( 'testimonial', $args );
}
add_action( 'init', 'custom_theme_register_testimonial_cpt' );

/**
 * Register ACF fields for Testimonial CPT
 *
 * @return void
 */
function custom_theme_register_testimonial_acf_fields(): void {
  if ( ! function_exists( 'acf_add_local_field_group' ) ) {
      return;
  }

	acf_add_local_field_group(
      array(
		  'key'                   => 'group_testimonial_fields',
		  'title'                 => 'Testimonial Details',
		  'fields'                => array(
			  array(
				  'key'           => 'field_client_name',
				  'label'         => 'Client Name',
				  'name'          => 'client_name',
				  'type'          => 'text',
				  'instructions'  => 'Enter the client\'s full name',
				  'required'      => 1,
				  'default_value' => '',
				  'placeholder'   => 'e.g., Marcus Reid',
				  'wrapper'       => array(
					  'width' => '',
					  'class' => '',
					  'id'    => '',
				  ),
			  ),
			  array(
				  'key'           => 'field_client_position_location',
				  'label'         => 'Client Position/Location',
				  'name'          => 'client_position_location',
				  'type'          => 'text',
				  'instructions'  => 'Enter the client\'s position and location',
				  'required'      => 0,
				  'default_value' => '',
				  'placeholder'   => 'e.g., Motocross racer, Arizona',
				  'wrapper'       => array(
					  'width' => '',
					  'class' => '',
					  'id'    => '',
				  ),
			  ),
		  ),
		  'location'              => array(
			  array(
				  array(
					  'param'    => 'post_type',
					  'operator' => '==',
					  'value'    => 'testimonial',
				  ),
			  ),
		  ),
		  'menu_order'            => 0,
		  'position'              => 'acf_after_title',
		  'style'                 => 'default',
		  'label_placement'       => 'top',
		  'instruction_placement' => 'label',
		  'hide_on_screen'        => '',
		  'active'                => true,
		  'description'           => '',
	  )
	);
}
add_action( 'acf/init', 'custom_theme_register_testimonial_acf_fields' );
