<?php
/**
 * Register Testimonial Custom Post Type
 *
 * @package MBNTheme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register Testimonial CPT
 */
function mbn_register_testimonial_cpt() {
	$labels = array(
		'name'                  => _x( 'Testimonials', 'Post Type General Name', 'mbn-theme' ),
		'singular_name'         => _x( 'Testimonial', 'Post Type Singular Name', 'mbn-theme' ),
		'menu_name'             => __( 'Testimonials', 'mbn-theme' ),
		'name_admin_bar'        => __( 'Testimonial', 'mbn-theme' ),
		'archives'              => __( 'Testimonial Archives', 'mbn-theme' ),
		'attributes'            => __( 'Testimonial Attributes', 'mbn-theme' ),
		'parent_item_colon'     => __( 'Parent Testimonial:', 'mbn-theme' ),
		'all_items'             => __( 'All Testimonials', 'mbn-theme' ),
		'add_new_item'          => __( 'Add New Testimonial', 'mbn-theme' ),
		'add_new'               => __( 'Add New', 'mbn-theme' ),
		'new_item'              => __( 'New Testimonial', 'mbn-theme' ),
		'edit_item'             => __( 'Edit Testimonial', 'mbn-theme' ),
		'update_item'           => __( 'Update Testimonial', 'mbn-theme' ),
		'view_item'             => __( 'View Testimonial', 'mbn-theme' ),
		'view_items'            => __( 'View Testimonials', 'mbn-theme' ),
		'search_items'          => __( 'Search Testimonial', 'mbn-theme' ),
		'not_found'             => __( 'Not found', 'mbn-theme' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'mbn-theme' ),
		'featured_image'        => __( 'Client Photo', 'mbn-theme' ),
		'set_featured_image'    => __( 'Set client photo', 'mbn-theme' ),
		'remove_featured_image' => __( 'Remove client photo', 'mbn-theme' ),
		'use_featured_image'    => __( 'Use as client photo', 'mbn-theme' ),
		'insert_into_item'      => __( 'Insert into testimonial', 'mbn-theme' ),
		'uploaded_to_this_item' => __( 'Uploaded to this testimonial', 'mbn-theme' ),
		'items_list'            => __( 'Testimonials list', 'mbn-theme' ),
		'items_list_navigation' => __( 'Testimonials list navigation', 'mbn-theme' ),
		'filter_items_list'     => __( 'Filter testimonials list', 'mbn-theme' ),
	);

	$args = array(
		'label'               => __( 'Testimonial', 'mbn-theme' ),
		'description'         => __( 'Customer testimonials and reviews', 'mbn-theme' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'thumbnail' ),
		'taxonomies'          => array(),
		'hierarchical'        => false,
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_position'       => 20,
		'menu_icon'           => 'dashicons-star-filled',
		'show_in_admin_bar'   => true,
		'show_in_nav_menus'   => false,
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => false,
		'capability_type'     => 'post',
		'show_in_rest'        => true,
	);

	register_post_type( 'testimonial', $args );
}
add_action( 'init', 'mbn_register_testimonial_cpt', 0 );
