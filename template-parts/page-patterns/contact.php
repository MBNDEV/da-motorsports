<?php
/**
 * Page Pattern: Contact
 *
 * This file contains the complete page data for the 'Contact' page.
 * It can be imported to create/update the page on other environments.
 *
 * Includes: Content, Featured Image, Status, Attributes, Custom Fields
 *
 * To use: Tools → Page Content Sync → Import All Pages from Files
 *
 * @package CustomTheme
 */

return array(
	'title'               => 'Contact',
	'slug'                => 'contact',
	'status'              => 'publish',
	'excerpt'             => '',
	'parent_slug'         => '',
	'menu_order'          => 0,
	'template'            => 'page-templates\/template-blank.php',
	'featured_image_url'  => '',
	'featured_image_path' => '', // Theme assets path (ships via Git)
	'custom_fields'       => {'_wp_page_template':'page-templates\/template-blank.php'},
	'content'             => <<<'EOD'
<!-- wp:mbn-theme/contact {"heroBgPhotoId":199,"heroBgPhotoUrl":"http://localhost/wordpress/wp-content/uploads/2026/06/hero-bg-photo.jpg","heroBgTextureId":197,"heroBgTextureUrl":"http://localhost/wordpress/wp-content/uploads/2026/06/hero-bg-texture-1.png","heroDividerId":202,"heroDividerUrl":"http://localhost/wordpress/wp-content/uploads/2026/06/hero-divider-line-1.svg","contactMascotId":206,"contactMascotUrl":"http://localhost/wordpress/wp-content/uploads/2026/06/contact-mascot-1.png","contactDividerId":200,"contactDividerUrl":"http://localhost/wordpress/wp-content/uploads/2026/06/contact-divider-line.svg","gravityFormShortcode":"[gravityform id="2" title="false"]","testimonialBgId":196,"testimonialBgUrl":"http://localhost/wordpress/wp-content/uploads/2026/06/cta-bg-texture.png","ctaBgPhotoId":198,"ctaBgPhotoUrl":"http://localhost/wordpress/wp-content/uploads/2026/06/cta-bg-photo.jpg","ctaBgTextureId":196,"ctaBgTextureUrl":"http://localhost/wordpress/wp-content/uploads/2026/06/cta-bg-texture.png","ctaDividerId":204,"ctaDividerUrl":"http://localhost/wordpress/wp-content/uploads/2026/06/cta-divider-line.svg"} /-->
EOD
	,
);
