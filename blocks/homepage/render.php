<?php
/**
 * Home Block - server-side render.
 *
 * @package MBNTheme
 * @var array    $attributes Block attributes from block.json.
 * @var string   $content    Inner blocks content (unused).
 * @var WP_Block $block      Block instance.
 */

// Enqueue the block's stylesheet
wp_enqueue_style(
  'mbn-theme-homepage-style',
  get_template_directory_uri() . '/build/blocks/homepage/style.css',
  array(),
  filemtime( get_template_directory() . '/build/blocks/homepage/style.css' )
);

$theme_uri = get_template_directory_uri();

// Extract and sanitize attributes
$hero_heading      = isset( $attributes['heroHeading'] ) ? $attributes['heroHeading'] : '';
$hero_body         = isset( $attributes['heroBody'] ) ? $attributes['heroBody'] : '';
$hero_button_text  = isset( $attributes['heroButtonText'] ) ? $attributes['heroButtonText'] : '';
$hero_button_url   = isset( $attributes['heroButtonUrl'] ) ? $attributes['heroButtonUrl'] : '#';
$hero_bg_image_url = isset( $attributes['heroBackgroundImageUrl'] ) && ! empty( $attributes['heroBackgroundImageUrl'] ) ? $attributes['heroBackgroundImageUrl'] : $theme_uri . '/blocks/homepage/assets/images/hero-background.jpg';

$why_choose_heading    = isset( $attributes['whyChooseHeading'] ) ? $attributes['whyChooseHeading'] : '';
$why_choose_subheading = isset( $attributes['whyChooseSubheading'] ) ? $attributes['whyChooseSubheading'] : '';
$why_choose_items      = isset( $attributes['whyChooseItems'] ) ? $attributes['whyChooseItems'] : array();

$services_heading    = isset( $attributes['servicesHeading'] ) ? $attributes['servicesHeading'] : '';
$services_subheading = isset( $attributes['servicesSubheading'] ) ? $attributes['servicesSubheading'] : '';
$service_items       = isset( $attributes['serviceItems'] ) ? $attributes['serviceItems'] : array();

$cta1_heading      = isset( $attributes['cta1Heading'] ) ? $attributes['cta1Heading'] : '';
$cta1_subheading   = isset( $attributes['cta1Subheading'] ) ? $attributes['cta1Subheading'] : '';
$cta1_button1_text = isset( $attributes['cta1Button1Text'] ) ? $attributes['cta1Button1Text'] : '';
$cta1_button1_url  = isset( $attributes['cta1Button1Url'] ) ? $attributes['cta1Button1Url'] : '#';
$cta1_button2_text = isset( $attributes['cta1Button2Text'] ) ? $attributes['cta1Button2Text'] : '';
$cta1_button2_url  = isset( $attributes['cta1Button2Url'] ) ? $attributes['cta1Button2Url'] : '#';
$cta1_bg_image_url = isset( $attributes['cta1BackgroundImageUrl'] ) && ! empty( $attributes['cta1BackgroundImageUrl'] ) ? $attributes['cta1BackgroundImageUrl'] : $theme_uri . '/blocks/homepage/assets/images/cta-background-1.jpg';

$testimonial_heading    = isset( $attributes['testimonialHeading'] ) ? $attributes['testimonialHeading'] : '';
$testimonial_subheading = isset( $attributes['testimonialSubheading'] ) ? $attributes['testimonialSubheading'] : '';
$testimonials           = isset( $attributes['testimonials'] ) ? $attributes['testimonials'] : array();

$contact_tagline = isset( $attributes['contactTagline'] ) ? $attributes['contactTagline'] : '';
$contact_heading = isset( $attributes['contactHeading'] ) ? $attributes['contactHeading'] : '';
$locations       = isset( $attributes['locations'] ) ? $attributes['locations'] : array();

$faq_heading    = isset( $attributes['faqHeading'] ) ? $attributes['faqHeading'] : '';
$faq_subheading = isset( $attributes['faqSubheading'] ) ? $attributes['faqSubheading'] : '';
$faq_items      = isset( $attributes['faqItems'] ) ? $attributes['faqItems'] : array();

$cta2_heading      = isset( $attributes['cta2Heading'] ) ? $attributes['cta2Heading'] : '';
$cta2_subheading   = isset( $attributes['cta2Subheading'] ) ? $attributes['cta2Subheading'] : '';
$cta2_button_text  = isset( $attributes['cta2ButtonText'] ) ? $attributes['cta2ButtonText'] : '';
$cta2_button_url   = isset( $attributes['cta2ButtonUrl'] ) ? $attributes['cta2ButtonUrl'] : '#';
$cta2_bg_image_url = isset( $attributes['cta2BackgroundImageUrl'] ) && ! empty( $attributes['cta2BackgroundImageUrl'] ) ? $attributes['cta2BackgroundImageUrl'] : $theme_uri . '/blocks/homepage/assets/images/cta-background-2.jpg';

$footer_newsletter_text = isset( $attributes['footerNewsletterText'] ) ? $attributes['footerNewsletterText'] : '';
$footer_consent_text    = isset( $attributes['footerConsentText'] ) ? $attributes['footerConsentText'] : '';
$footer_services        = isset( $attributes['footerServices'] ) ? $attributes['footerServices'] : array();
$footer_company_links   = isset( $attributes['footerCompanyLinks'] ) ? $attributes['footerCompanyLinks'] : array();
$footer_social_links    = isset( $attributes['footerSocialLinks'] ) ? $attributes['footerSocialLinks'] : array();
$footer_copyright       = isset( $attributes['footerCopyright'] ) ? $attributes['footerCopyright'] : '';
$footer_legal_links     = isset( $attributes['footerLegalLinks'] ) ? $attributes['footerLegalLinks'] : array();

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/logo-white.svg" alt="DA Motorsports Logo">
            </div>
            <div class="navbar-menu">
                <a href="#" class="navbar-link">Home</a>
                <div class="navbar-dropdown">
                    <a href="#" class="navbar-link">Services</a>
                    <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/chevron-down.svg" alt="" class="navbar-dropdown-icon">
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-background">
            <img src="<?php echo esc_url( $hero_bg_image_url ); ?>" alt="" class="hero-background-image">
            <div class="hero-background-overlay"></div>
        </div>
        <div class="hero-content">
            <h1 class="hero-heading">
                <?php
                $heading_parts = explode( ', ', $hero_heading );
                if ( count( $heading_parts ) > 1 ) {
                    echo esc_html( $heading_parts[0] ) . ', ';
                    echo '<span class="hero-heading-accent">' . esc_html( implode( ', ', array_slice( $heading_parts, 1 ) ) ) . '</span>';
                } else {
                    echo esc_html( $hero_heading );
                }
                ?>
            </h1>
            <div class="hero-divider">
                <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/divider-red.svg" alt="" class="hero-divider-image">
            </div>
            <div class="hero-bottom">
                <p class="hero-body"><?php echo nl2br( esc_html( $hero_body ) ); ?></p>
                <a href="<?php echo esc_url( $hero_button_url ); ?>" class="hero-button button-primary"><?php echo esc_html( $hero_button_text ); ?></a>
            </div>
        </div>
    </section>

    <!-- Why Choose Section -->
    <section class="why-choose-section">
        <div class="why-choose-background">
            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/texture-background.jpg" alt="" class="why-choose-background-image">
        </div>
        <div class="why-choose-container">
            <div class="why-choose-header">
                <h2 class="why-choose-heading">
                    <?php
                    $heading_parts = explode( ' DA - Motorsports', $why_choose_heading );
                    if ( count( $heading_parts ) > 1 ) {
                        echo esc_html( $heading_parts[0] ) . ' <span class="text-accent">DA - Motorsports</span>';
                    } else {
                        echo esc_html( $why_choose_heading );
                    }
                    ?>
                </h2>
                <p class="why-choose-subheading"><?php echo esc_html( $why_choose_subheading ); ?></p>
            </div>
            <div class="why-choose-grid">
                <?php
                $item_count = 0;
                foreach ( $why_choose_items as $item ) :
                    ++$item_count;
                    $icon_url = ! empty( $item['iconImageUrl'] ) ? $item['iconImageUrl'] : $theme_uri . '/blocks/homepage/assets/images/icon-factory-race.svg';
                  ?>
                    <?php if ( $item_count > 1 ) : ?>
                        <div class="why-choose-divider-vertical">
                            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/divider-vertical.svg" alt="">
                        </div>
                    <?php endif; ?>
                    <div class="why-choose-item">
                        <div class="why-choose-icon">
                            <img src="<?php echo esc_url( $icon_url ); ?>" alt="">
                        </div>
                        <div class="why-choose-item-content">
                            <h3 class="why-choose-item-title"><?php echo esc_html( $item['title'] ); ?></h3>
                            <p class="why-choose-item-text"><?php echo esc_html( $item['text'] ); ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="section-image-overlay">
            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/bike-image-overlay.png" alt="">
        </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
        <div class="services-background">
            <div class="services-background-card services-background-card-1"></div>
            <div class="services-background-card services-background-card-2"></div>
        </div>
        <div class="services-container">
            <div class="services-header">
                <h2 class="services-heading">
                    <?php
                    $heading_parts = preg_split( '/(Suspension Services)/', $services_heading, -1, PREG_SPLIT_DELIM_CAPTURE );
                    if ( count( $heading_parts ) > 1 ) {
                        echo esc_html( str_replace( 'Motorcycle ', '', $heading_parts[0] ) ) . 'Motorcycle <span class="text-accent">' . esc_html( $heading_parts[1] ) . '</span>' . esc_html( $heading_parts[2] );
                    } else {
                        echo esc_html( $services_heading );
                    }
                    ?>
                </h2>
                <p class="services-subheading"><?php echo esc_html( $services_subheading ); ?></p>
            </div>
            <div class="services-grid">
                <?php
                $chunk_size = ceil( count( $service_items ) / 3 );
                $columns    = array_chunk( $service_items, $chunk_size );
                foreach ( $columns as $column ) :
                  ?>
                    <div class="services-column">
                        <?php
                        foreach ( $column as $service ) :
                            $icon_url = ! empty( $service['iconImageUrl'] ) ? $service['iconImageUrl'] : $theme_uri . '/blocks/homepage/assets/images/icon-tuning.svg';
                          ?>
                            <div class="service-card">
                                <div class="service-card-header">
                                    <div class="service-card-icon">
                                        <img src="<?php echo esc_url( $icon_url ); ?>" alt="">
                                    </div>
                                    <h3 class="service-card-title"><?php echo esc_html( $service['title'] ); ?></h3>
                                </div>
                                <p class="service-card-text"><?php echo esc_html( $service['text'] ); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CTA Section 1 -->
    <section class="cta-section cta-section-primary">
        <div class="cta-background">
            <img src="<?php echo esc_url( $cta1_bg_image_url ); ?>" alt="" class="cta-background-image">
            <div class="cta-background-overlay"></div>
            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/cta-texture.jpg" alt="" class="cta-background-texture">
        </div>
        <div class="cta-container">
            <div class="cta-content">
                <h2 class="cta-heading">
                    <?php
                    $heading_lines = explode( "\n", $cta1_heading );
                    foreach ( $heading_lines as $index => $line ) {
                      if ( strpos( $line, 'DA-Motorsports' ) !== false ) {
                          // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                          echo wp_kses_post( str_replace( 'DA-Motorsports', '<span class="text-accent">DA-Motorsports</span>', $line ) );
                      } else {
                          echo esc_html( $line );
                      }
                      if ( $index < count( $heading_lines ) - 1 ) {
                          echo '<br>';
                      }
                    }
                    ?>
                </h2>
                <p class="cta-subheading"><?php echo esc_html( $cta1_subheading ); ?></p>
                <div class="cta-buttons">
                    <a href="<?php echo esc_url( $cta1_button1_url ); ?>" class="button-primary"><?php echo esc_html( $cta1_button1_text ); ?></a>
                    <a href="<?php echo esc_url( $cta1_button2_url ); ?>" class="button-secondary"><?php echo esc_html( $cta1_button2_text ); ?></a>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
        <div class="testimonial-background">
            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/testimonial-background.jpg" alt="" class="testimonial-background-image">
        </div>
        <div class="testimonial-container">
            <div class="testimonial-left">
                <h2 class="testimonial-heading"><?php echo esc_html( $testimonial_heading ); ?></h2>
                <p class="testimonial-subheading"><?php echo esc_html( $testimonial_subheading ); ?></p>
            </div>
            <div class="testimonial-right">
                <?php
                if ( ! empty( $testimonials ) ) :
                    $testimonial = $testimonials[0];
                    $avatar_url  = ! empty( $testimonial['authorImageUrl'] ) ? $testimonial['authorImageUrl'] : $theme_uri . '/blocks/homepage/assets/images/avatar-marcus.jpg';
                  ?>
                    <div class="testimonial-card">
                        <div class="testimonial-card-content">
                            <div class="testimonial-stars">
                                <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/stars.svg" alt="5 stars">
                            </div>
                            <p class="testimonial-quote"><?php echo esc_html( $testimonial['quote'] ); ?></p>
                        </div>
                        <div class="testimonial-author">
                            <img src="<?php echo esc_url( $avatar_url ); ?>" alt="<?php echo esc_attr( $testimonial['authorName'] ); ?>" class="testimonial-avatar">
                            <div class="testimonial-author-info">
                                <p class="testimonial-author-name"><?php echo esc_html( $testimonial['authorName'] ); ?></p>
                                <p class="testimonial-author-title"><?php echo esc_html( $testimonial['authorTitle'] ); ?></p>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
                <div class="testimonial-controls">
                    <div class="testimonial-dots">
                        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/slider-dots.svg" alt="">
                    </div>
                    <div class="testimonial-arrows">
                        <button class="testimonial-arrow testimonial-arrow-prev">
                            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/arrow-left.svg" alt="Previous">
                        </button>
                        <button class="testimonial-arrow testimonial-arrow-next">
                            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/arrow-right.svg" alt="Next">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact/Locations Section -->
    <section class="contact-section">
        <div class="contact-container">
            <div class="contact-header">
                <p class="contact-tagline"><?php echo esc_html( $contact_tagline ); ?></p>
                <h2 class="contact-heading"><?php echo esc_html( $contact_heading ); ?></h2>
            </div>
            <div class="contact-content">
                <div class="contact-tabs">
                    <?php
                    foreach ( $locations as $location ) :
                        $is_active = isset( $location['isActive'] ) && $location['isActive'];
                      ?>
                        <div class="contact-tab<?php echo $is_active ? ' contact-tab-active' : ''; ?>">
                            <div class="contact-tab-content">
                                <h3 class="contact-tab-title"><?php echo esc_html( $location['title'] ); ?></h3>
                                <p class="contact-tab-subtitle"><?php echo esc_html( $location['subtitle'] ); ?></p>
                            </div>
                            <a href="<?php echo esc_url( $location['buttonUrl'] ); ?>" class="contact-tab-button button-small"><?php echo esc_html( $location['buttonText'] ); ?></a>
                            <?php if ( $is_active ) : ?>
                                <div class="contact-tab-indicator"></div>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="contact-map">
                    <?php
                    $active_location = array_filter(
                      $locations,
                      function ( $loc ) {
                        return isset( $loc['isActive'] ) && $loc['isActive'];
                      }
                    );
                    $active_location = ! empty( $active_location ) ? reset( $active_location ) : ( ! empty( $locations ) ? $locations[0] : null );
                    if ( $active_location ) :
                        $map_url = ! empty( $active_location['mapImageUrl'] ) ? $active_location['mapImageUrl'] : $theme_uri . '/blocks/homepage/assets/images/map-chandler.jpg';
                      ?>
                        <img src="<?php echo esc_url( $map_url ); ?>" alt="Map showing <?php echo esc_attr( $active_location['title'] ); ?> location">
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="contact-logo-overlay">
            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/da-skull-logo.png" alt="">
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="faq-container">
            <div class="faq-header">
                <h2 class="faq-heading"><?php echo esc_html( $faq_heading ); ?></h2>
                <p class="faq-subheading"><?php echo esc_html( $faq_subheading ); ?></p>
            </div>
            <div class="faq-list">
                <?php foreach ( $faq_items as $faq ) : ?>
                    <div class="faq-item">
                        <div class="faq-question">
                            <h3 class="faq-question-text"><?php echo esc_html( $faq['question'] ); ?></h3>
                            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/chevron-down.svg" alt="" class="faq-toggle">
                        </div>
                        <div class="faq-answer">
                            <p><?php echo esc_html( $faq['answer'] ); ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CTA Section 2 -->
    <section class="cta-section cta-section-secondary">
        <div class="cta-background">
            <img src="<?php echo esc_url( $cta2_bg_image_url ); ?>" alt="" class="cta-background-image">
            <div class="cta-background-overlay"></div>
        </div>
        <div class="cta-container">
            <div class="cta-content">
                <h2 class="cta-heading">
                    <?php
                    if ( strpos( $cta2_heading, 'Transform' ) !== false ) {
                        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                        echo wp_kses_post( str_replace( 'Transform', '<span class="text-accent">Transform</span>', $cta2_heading ) );
                    } else {
                        echo esc_html( $cta2_heading );
                    }
                    ?>
                </h2>
                <p class="cta-subheading"><?php echo esc_html( $cta2_subheading ); ?></p>
                <div class="cta-buttons">
                    <a href="<?php echo esc_url( $cta2_button_url ); ?>" class="button-primary"><?php echo esc_html( $cta2_button_text ); ?></a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer-section">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-newsletter">
                    <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/homepage/assets/images/company-logo.svg" alt="DA Motorsports" class="footer-logo">
                    <p class="footer-newsletter-text"><?php echo esc_html( $footer_newsletter_text ); ?></p>
                    <form class="footer-newsletter-form">
                        <input type="email" placeholder="Enter your email" class="footer-input">
                        <button type="submit" class="footer-submit-button">Subscribe</button>
                    </form>
                    <p class="footer-consent"><?php echo esc_html( $footer_consent_text ); ?></p>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h4 class="footer-column-title">Services</h4>
                        <ul class="footer-link-list">
                            <?php foreach ( $footer_services as $footer_link ) : ?>
                                <li><a href="<?php echo esc_url( $footer_link['url'] ); ?>" class="footer-link"><?php echo esc_html( $footer_link['label'] ); ?></a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4 class="footer-column-title">Company</h4>
                        <ul class="footer-link-list">
                            <?php foreach ( $footer_company_links as $footer_link ) : ?>
                                <li><a href="<?php echo esc_url( $footer_link['url'] ); ?>" class="footer-link"><?php echo esc_html( $footer_link['label'] ); ?></a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4 class="footer-column-title">Support</h4>
                        <ul class="footer-social-list">
                            <?php
                            foreach ( $footer_social_links as $footer_link ) :
                                $icon_url = $theme_uri . '/blocks/homepage/assets/images/icon-' . $footer_link['icon'] . '.svg';
                              ?>
                                <li>
                                    <a href="<?php echo esc_url( $footer_link['url'] ); ?>" class="footer-social-link">
                                        <img src="<?php echo esc_url( $icon_url ); ?>" alt="<?php echo esc_attr( $footer_link['label'] ); ?>">
                                        <span><?php echo esc_html( $footer_link['label'] ); ?></span>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-divider"></div>
                <div class="footer-credits">
                    <p class="footer-copyright"><?php echo esc_html( $footer_copyright ); ?></p>
                    <div class="footer-legal-links">
                        <?php foreach ( $footer_legal_links as $footer_link ) : ?>
                            <a href="<?php echo esc_url( $footer_link['url'] ); ?>" class="footer-legal-link"><?php echo esc_html( $footer_link['label'] ); ?></a>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
