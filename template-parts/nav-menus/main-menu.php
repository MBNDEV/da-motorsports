<?php
/**
 * Nav Menu: Main Menu
 *
 * Auto-exported by Theme Nav Menu Sync.
 * Edit menus in Appearance > Menus, then re-export via
 * Block Templates > Nav Menu Sync.
 *
 * NOTE: Post/page items are stored as slugs for portability.
 * Custom links: use relative URLs (e.g. /contact) to stay portable.
 *
 * @package CustomTheme
 */

return array(
	'name'      => 'Main Menu',
	'slug'      => 'main-menu',
	'locations' =>
	array(
		0 => 'primary-menu',
	),
	'items'     =>
	array(
		0 =>
		array(
			'title'        => 'About',
			'type'         => 'post_type',
			'object'       => 'page',
			'url'          => 'https://mysite.dev.local/about/',
			'target'       => '',
			'attr_title'   => '',
			'description'  => '',
			'classes'      =>
			array(),
			'xfn'          => '',
			'order'        => 1,
			'parent_index' => -1,
			'object_slug'  => 'about',
		),
		1 =>
		array(
			'title'        => 'Services',
			'type'         => 'post_type',
			'object'       => 'page',
			'url'          => 'https://mysite.dev.local/services/',
			'target'       => '',
			'attr_title'   => '',
			'description'  => '',
			'classes'      =>
			array(),
			'xfn'          => '',
			'order'        => 2,
			'parent_index' => -1,
			'object_slug'  => 'services',
		),
		2 =>
		array(
			'title'        => 'Motorcycle Suspension Services',
			'type'         => 'post_type',
			'object'       => 'page',
			'url'          => 'https://mysite.dev.local/services/motorcycle-suspension-services/',
			'target'       => '',
			'attr_title'   => '',
			'description'  => '',
			'classes'      =>
			array(),
			'xfn'          => '',
			'order'        => 3,
			'parent_index' => 1,
			'object_slug'  => 'motorcycle-suspension-services',
		),
	),
);
