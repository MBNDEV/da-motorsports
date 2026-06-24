<?php
/**
 * Page Pattern: About
 *
 * This file contains the complete page data for the 'About' page.
 * It can be imported to create/update the page on other environments.
 *
 * Includes: Content, Featured Image, Status, Attributes, Custom Fields
 *
 * To use: Tools → Page Content Sync → Import All Pages from Files
 *
 * @package CustomTheme
 */

return array(
	'title'               => 'About',
	'slug'                => 'about',
	'status'              => 'publish',
	'excerpt'             => '',
	'parent_slug'         => '',
	'menu_order'          => 0,
	'template'            => 'page-templates\/template-blank.php',
	'featured_image_url'  => '',
	'featured_image_path' => '', // Theme assets path (ships via Git)
	'custom_fields'       => {'_wp_page_template':'page-templates\/template-blank.php'},
	'content'             => <<<'EOD'
<!-- wp:mbn-theme/about-us /-->
EOD
	,
);
