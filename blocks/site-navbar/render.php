<?php
/**
 * Site Navbar Block Template
 *
 * @package MBN_Theme
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Extract attributes
$logo_image_url    = ! empty( $attributes['logoImageUrl'] ) ? $attributes['logoImageUrl'] : '';
$logo_alt          = isset( $attributes['logoAlt'] ) ? $attributes['logoAlt'] : 'DA Motorsports home';
$logo_link_url     = isset( $attributes['logoLinkUrl'] ) ? $attributes['logoLinkUrl'] : '/';
$use_wp_menu       = isset( $attributes['useWordPressMenu'] ) ? $attributes['useWordPressMenu'] : false;
$menu_id           = isset( $attributes['menuId'] ) ? $attributes['menuId'] : 0;
$nav_links         = isset( $attributes['navLinks'] ) ? $attributes['navLinks'] : array();
$dropdown_icon_url = ! empty( $attributes['dropdownIconUrl'] ) ? $attributes['dropdownIconUrl'] : '';
$partner_logo_url  = ! empty( $attributes['partnerLogoImageUrl'] ) ? $attributes['partnerLogoImageUrl'] : '';
$partner_logo_alt  = isset( $attributes['partnerLogoAlt'] ) ? $attributes['partnerLogoAlt'] : 'TBT Racing, certified partner';
$cta_button_text   = isset( $attributes['ctaButtonText'] ) ? $attributes['ctaButtonText'] : 'Contact Us';
$cta_button_url    = isset( $attributes['ctaButtonUrl'] ) ? $attributes['ctaButtonUrl'] : '#contact';

// Theme URI for fallback images
$theme_uri = get_template_directory_uri();

// Fallback images
if ( empty( $logo_image_url ) ) {
	$logo_image_url = $theme_uri . '/build/blocks/site-navbar/assets/images/logo-da-skully.png';
}
if ( empty( $dropdown_icon_url ) ) {
	$dropdown_icon_url = $theme_uri . '/build/blocks/site-navbar/assets/images/icon-chevron-down.svg';
}
if ( empty( $partner_logo_url ) ) {
	$partner_logo_url = $theme_uri . '/build/blocks/site-navbar/assets/images/logo-tbt-racing-navbar.png';
}

/**
 * Custom Nav Walker for Site Navbar.
 *
 * Extends Walker_Nav_Menu to add 'has-submenu' class to parent menu items.
 *
 * @since 1.0.0
 */
class Site_Navbar_Walker extends Walker_Nav_Menu {
	/**
	 * Starts the list before the elements are added.
	 *
	 * @param string   $output Used to append additional content (passed by reference).
	 * @param int      $depth  Depth of menu item. Used for padding.
	 * @param stdClass $args   An object of wp_nav_menu() arguments.
	 */
  public function start_lvl( &$output, $depth = 0, $args = null ) {
    if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
        $t = '';
        $n = '';
    } else {
        $t = "\t";
        $n = "\n";
    }
      $indent      = str_repeat( $t, $depth );
      $classes     = array( 'sub-menu' );
      $class_names = implode( ' ', apply_filters( 'nav_menu_submenu_css_class', $classes, $args, $depth ) );
      $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';
      $output     .= "{$n}{$indent}<ul{$class_names}>{$n}";
  }

  /**
   * Starts the element output.
   *
   * @param string   $output Used to append additional content (passed by reference).
   * @param WP_Post  $item   Menu item data object.
   * @param int      $depth  Depth of menu item. Used for padding.
   * @param stdClass $args   An object of wp_nav_menu() arguments.
   * @param int      $id     Current item ID.
   */
  public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) { // phpcs:ignore Generic.Metrics.CyclomaticComplexity.TooHigh
    if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
        $t = '';
        $n = '';
    } else {
        $t = "\t";
        $n = "\n";
    }

      $indent = ( $depth ) ? str_repeat( $t, $depth ) : '';

      $classes   = empty( $item->classes ) ? array() : (array) $item->classes;
      $classes[] = 'menu-item-' . $item->ID;

      // Add 'has-submenu' class if item has children.
    if ( in_array( 'menu-item-has-children', $classes, true ) ) {
        $classes[] = 'has-submenu';
    }

      $class_names = implode(
        ' ',
        apply_filters(
          'nav_menu_css_class',
          array_filter( $classes ),
          $item,
          $args,
          $depth
        )
      );

      $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

      $id = apply_filters(
        'nav_menu_item_id',
        'menu-item-' . $item->ID,
        $item,
        $args,
        $depth
      );

      $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

      $output .= $indent . '<li' . $id . $class_names . '>';

      $atts           = array();
      $atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
      $atts['target'] = ! empty( $item->target ) ? $item->target : '';

    if ( '_blank' === $item->target && empty( $item->xfn ) ) {
        $atts['rel'] = 'noopener';
    } else {
        $atts['rel'] = $item->xfn;
    }

      $atts['href']         = ! empty( $item->url ) ? $item->url : '';
      $atts['aria-current'] = $item->current ? 'page' : '';

      $atts = apply_filters(
        'nav_menu_link_attributes',
        $atts,
        $item,
        $args,
        $depth
      );

      $attributes = '';

    foreach ( $atts as $attr => $value ) {
      if ( is_scalar( $value ) && '' !== $value && false !== $value ) {
        $value = ( 'href' === $attr )
            ? esc_url( $value )
            : esc_attr( $value );

        $attributes .= ' ' . $attr . '="' . $value . '"';
      }
    }

      $title = apply_filters( 'the_title', $item->title, $item->ID );
      $title = apply_filters(
        'nav_menu_item_title',
        $title,
        $item,
        $args,
        $depth
      );

      $item_output  = $args->before;
      $item_output .= '<a' . $attributes . '>';
      $item_output .= $args->link_before . $title . $args->link_after;
      $item_output .= '</a>';
      $item_output .= $args->after;

      $output .= apply_filters(
        'walker_nav_menu_start_el',
        $item_output,
        $item,
        $depth,
        $args
      );
  }
}

// Block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
  <div class="header">
    <header class="header__navbar">
      <nav class="header__nav" aria-label="Main navigation">
        <!-- Logo -->
        <a href="<?php echo esc_url( $logo_link_url ); ?>" class="header__nav-logo">
          <img
            src="<?php echo esc_url( $logo_image_url ); ?>"
            alt="<?php echo esc_attr( $logo_alt ); ?>"
          />
        </a>
        
        <!-- Navigation Links (Desktop + Mobile Dropdown) -->
        <div class="header__nav-menu-wrapper">
          <?php if ( $use_wp_menu && $menu_id > 0 ) : ?>
            <?php
            wp_nav_menu(
              array(
				  'menu'        => $menu_id,
				  'container'   => false,
				  'menu_class'  => 'header__nav-links',
				  'fallback_cb' => false,
				  'items_wrap'  => '<ul class="%2$s">%3$s</ul>',
				  'link_before' => '',
				  'link_after'  => '',
				  'walker'      => new Site_Navbar_Walker(),
              )
            );
            ?>
          <?php else : ?>
            <ul class="header__nav-links">
              <?php foreach ( $nav_links as $nav_link ) : ?>
                <li<?php echo ! empty( $nav_link['hasDropdown'] ) ? ' class="header__nav-dropdown"' : ''; ?>>
                  <a href="<?php echo esc_url( $nav_link['url'] ); ?>" class="header__nav-link">
                    <?php echo esc_html( $nav_link['label'] ); ?>
                  </a>
                  <?php if ( ! empty( $nav_link['hasDropdown'] ) ) : ?>
                    <img
                      src="<?php echo esc_url( $dropdown_icon_url ); ?>"
                      alt=""
                      class="header__nav-chevron"
                    />
                  <?php endif; ?>
                </li>
              <?php endforeach; ?>
            </ul>
          <?php endif; ?>
        </div>
        
        <!-- Partner Logo (Desktop Only) -->
        <div class="header__nav-partner">
          <img
            src="<?php echo esc_url( $partner_logo_url ); ?>"
            alt="<?php echo esc_attr( $partner_logo_alt ); ?>"
            class="header__nav-partner-logo"
          />
        </div>

        <!-- CTA Button / Phone Icon -->
        <div class="header__button-wrap">
            <div class="header__button-inner header__button-inner--small"> 
                <a href="<?php echo esc_url( $cta_button_url ); ?>" class="header__button header__button--small header__button--primary header__nav-cta" aria-label="Contact us">
                  <span class="header__cta-text"><?php echo esc_html( $cta_button_text ); ?></span>
                  <svg class="header__cta-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span class="vertical-left"></span>
                  <span class="vertical-right"></span> 
                </a>
            </div>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button class="header__menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="header__hamburger">
            <span class="header__hamburger-line"></span>
            <span class="header__hamburger-line"></span>
            <span class="header__hamburger-line"></span>
          </span>
        </button>
      </nav>
    </header>
  </div>
</div>
                  </svg>
                  <span class="vertical-left"></span>
                  <span class="vertical-right"></span> 
                </a>
            </div>
        </div>
      </nav>
    </header>
  </div>
</div>
