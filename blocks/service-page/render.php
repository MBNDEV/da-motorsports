<?php
/**
 * Service Page Block - server-side render.
 *
 * @package MBNTheme
 * @var array    $attributes Block attributes from block.json.
 * @var string   $content    Inner blocks content (unused).
 * @var WP_Block $block      Block instance.
 */

$theme_uri = get_template_directory_uri();

// Extract and sanitize attributes
$hero_heading      = isset( $attributes['heroHeading'] ) ? $attributes['heroHeading'] : '';
$hero_body         = isset( $attributes['heroBody'] ) ? $attributes['heroBody'] : '';
$hero_button_text  = isset( $attributes['heroButtonText'] ) ? $attributes['heroButtonText'] : '';
$hero_button_url   = isset( $attributes['heroButtonUrl'] ) ? $attributes['heroButtonUrl'] : '#';
$hero_bg_type      = isset( $attributes['heroBackgroundType'] ) ? $attributes['heroBackgroundType'] : 'image';
$hero_bg_video_url = isset( $attributes['heroBackgroundVideoUrl'] ) && ! empty( $attributes['heroBackgroundVideoUrl'] ) ? $attributes['heroBackgroundVideoUrl'] : $theme_uri . '/blocks/service-page/assets/images/hero-background.mp4';
$hero_bg_image_url = isset( $attributes['heroBackgroundImageUrl'] ) && ! empty( $attributes['heroBackgroundImageUrl'] ) ? $attributes['heroBackgroundImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/hero-background.jpg';

$why_choose_bg_image_url = isset( $attributes['whyChooseBackgroundImageUrl'] ) && ! empty( $attributes['whyChooseBackgroundImageUrl'] ) ? $attributes['whyChooseBackgroundImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/why-choose-bg.png';
$why_choose_heading      = isset( $attributes['whyChooseHeading'] ) ? $attributes['whyChooseHeading'] : '';
$why_choose_subheading   = isset( $attributes['whyChooseSubheading'] ) ? $attributes['whyChooseSubheading'] : '';
$why_choose_items        = isset( $attributes['whyChooseItems'] ) ? $attributes['whyChooseItems'] : array();

$services_bg_type       = isset( $attributes['servicesBackgroundType'] ) ? $attributes['servicesBackgroundType'] : 'image';
$services_bg_video_url  = isset( $attributes['servicesBackgroundVideoUrl'] ) && ! empty( $attributes['servicesBackgroundVideoUrl'] ) ? $attributes['servicesBackgroundVideoUrl'] : $theme_uri . '/blocks/service-page/assets/images/motor-suspension-services-bg.mp4';
$services_bg_image_url  = isset( $attributes['servicesBackgroundImageUrl'] ) && ! empty( $attributes['servicesBackgroundImageUrl'] ) ? $attributes['servicesBackgroundImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/motor-suspension-services-bg.png';
$services_hdr_image_url = isset( $attributes['servicesHeaderImageUrl'] ) && ! empty( $attributes['servicesHeaderImageUrl'] ) ? $attributes['servicesHeaderImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/img-motorcycle.png';
$services_heading       = isset( $attributes['servicesHeading'] ) ? $attributes['servicesHeading'] : '';
$services_subheading    = isset( $attributes['servicesSubheading'] ) ? $attributes['servicesSubheading'] : '';
$service_items          = isset( $attributes['serviceItems'] ) ? $attributes['serviceItems'] : array();

$cta1_heading      = isset( $attributes['cta1Heading'] ) ? $attributes['cta1Heading'] : '';
$cta1_subheading   = isset( $attributes['cta1Subheading'] ) ? $attributes['cta1Subheading'] : '';
$cta1_button1_text = isset( $attributes['cta1Button1Text'] ) ? $attributes['cta1Button1Text'] : '';
$cta1_button1_url  = isset( $attributes['cta1Button1Url'] ) ? $attributes['cta1Button1Url'] : '#';
$cta1_button2_text = isset( $attributes['cta1Button2Text'] ) ? $attributes['cta1Button2Text'] : '';
$cta1_button2_url  = isset( $attributes['cta1Button2Url'] ) ? $attributes['cta1Button2Url'] : '#';
$cta1_bg_image_url = isset( $attributes['cta1BackgroundImageUrl'] ) && ! empty( $attributes['cta1BackgroundImageUrl'] ) ? $attributes['cta1BackgroundImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/cta-mid-background.jpg';


$testimonial_bg_image_url = isset( $attributes['testimonialBackgroundImageUrl'] ) && ! empty( $attributes['testimonialBackgroundImageUrl'] ) ? $attributes['testimonialBackgroundImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/testimonial-background-texture.png';
$testimonial_heading      = isset( $attributes['testimonialHeading'] ) ? $attributes['testimonialHeading'] : '';
$testimonial_subheading   = isset( $attributes['testimonialSubheading'] ) ? $attributes['testimonialSubheading'] : '';
$testimonials             = isset( $attributes['testimonials'] ) ? $attributes['testimonials'] : array();

$contact_tagline = isset( $attributes['contactTagline'] ) ? $attributes['contactTagline'] : '';
$contact_heading = isset( $attributes['contactHeading'] ) ? $attributes['contactHeading'] : '';
$locations       = isset( $attributes['locations'] ) ? $attributes['locations'] : array();

$faq_bg_image_url = isset( $attributes['faqBackgroundImageUrl'] ) && ! empty( $attributes['faqBackgroundImageUrl'] ) ? $attributes['faqBackgroundImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/faq-background.jpg';
$faq_heading      = isset( $attributes['faqHeading'] ) ? $attributes['faqHeading'] : '';
$faq_subheading   = isset( $attributes['faqSubheading'] ) ? $attributes['faqSubheading'] : '';
$faq_items        = isset( $attributes['faqItems'] ) ? $attributes['faqItems'] : array();

$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => 'homepage' ) );
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
  <main class="homepage__main">
    <section class="homepage__hero" aria-label="Introduction">
      <div class="homepage__hero-bg" aria-hidden="true">
        <?php if ( 'video' === $hero_bg_type ) : ?>
          <video autoplay muted loop playsinline>
            <source src="<?php echo esc_url( $hero_bg_video_url ); ?>" type="video/mp4">
          </video>
        <?php else : ?>
          <img src="<?php echo esc_url( $hero_bg_image_url ); ?>" alt="">
        <?php endif; ?>
      </div>
      <div class="homepage__hero-content">
        <h1 class="homepage__hero-heading">
          <?php
          $heading_parts = explode( ',', $hero_heading, 2 );
          if ( count( $heading_parts ) > 1 ) {
            echo esc_html( trim( $heading_parts[0] ) ) . ',';
            echo ' <span class="homepage__accent-text">' . esc_html( trim( $heading_parts[1] ) ) . '</span>';
          } else {
            echo esc_html( $hero_heading );
          }
          ?>
        </h1>
        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/divider-squiggle-horizontal.svg" alt="" class="homepage__hero-divider">
        <div class="homepage__hero-footer">
            <p class="homepage__hero-text"><?php echo esc_html( $hero_body ); ?></p>
            <div class="homepage__button-wrap"> 
              <a href="<?php echo esc_url( $hero_button_url ); ?>" class="homepage__button homepage__button--primary"><?php echo esc_html( $hero_button_text ); ?>
                <span class="vertical-left"></span>
                <span class="vertical-right"></span>
              </a> 
          </div>
        </div>
      </div>
    </section>

    <section class="homepage__why-choose" id="about" aria-label="Why choose DA Motorsports">
      <div class="homepage__why-choose-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $why_choose_bg_image_url ); ?>" alt="">
      </div>
      <div class="homepage__container">
        <div class="homepage__section-heading">
          <h2 class="homepage__heading-2">
            <?php
            if ( strpos( $why_choose_heading, 'DA - Motorsports' ) !== false ) {
              // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
              echo wp_kses_post( str_replace( 'DA - Motorsports', '<span class="homepage__accent-text">DA - Motorsports</span>', $why_choose_heading ) );
            } else {
              echo esc_html( $why_choose_heading );
            }
            ?>
          </h2>
          <p class="homepage__section-intro"><?php echo esc_html( $why_choose_subheading ); ?></p>
        </div>
        <ul class="homepage__features-list">
          <?php
          $item_count = 0;
          foreach ( $why_choose_items as $item ) :
            ++$item_count;
            $icon_url = ! empty( $item['iconImageUrl'] ) ? $item['iconImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/icon-factory-suspension.svg';
            ?>
                        <li class="homepage__feature">
              <div class="homepage__feature-icon">
                <img src="<?php echo esc_url( $icon_url ); ?>" alt="">
              </div>
              <h3 class="homepage__feature-title"><?php echo esc_html( $item['title'] ); ?></h3>
              <p class="homepage__feature-desc"><?php echo esc_html( $item['text'] ); ?></p>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </section>

    <section class="homepage__services" id="services" aria-label="Our services">
      <div class="homepage__services-bg" aria-hidden="true">
        <?php if ( 'video' === $services_bg_type ) : ?>
          <video autoplay muted loop playsinline>
            <source src="<?php echo esc_url( $services_bg_video_url ); ?>" type="video/mp4">
            <source src="<?php echo esc_url( $services_bg_video_url ); ?>" type="video/mp4">
          </video>
        <?php else : ?>
          <img src="<?php echo esc_url( $services_bg_image_url ); ?>" alt="">
          <img src="<?php echo esc_url( $services_bg_image_url ); ?>" alt="">
        <?php endif; ?>
      </div>
      <div class="homepage__container">
        <div class="homepage__section-img">
          <img src="<?php echo esc_url( $services_hdr_image_url ); ?>" alt="">
        </div>
        <div class="homepage__section-heading">
          <h2 class="homepage__heading-2 homepage__heading-2--light">
            <?php
            if ( strpos( $services_heading, 'Suspension Services' ) !== false ) {
              // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
              echo wp_kses_post( str_replace( 'Suspension Services', '<span class="homepage__accent-text">Suspension Services</span>', $services_heading ) );
            } else {
              echo esc_html( $services_heading );
            }
            ?>
          </h2>
          <p class="homepage__section-intro homepage__section-intro--light"><?php echo esc_html( $services_subheading ); ?></p>
        </div>
        <ul class="homepage__services-grid">
          <?php
          foreach ( $service_items as $service ) :
            $icon_url = ! empty( $service['iconImageUrl'] ) ? $service['iconImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/icon-suspension-tuning.svg';
            ?>
            <li class="homepage__service-card">
              <div class="homepage__service-card-head">
                <img src="<?php echo esc_url( $icon_url ); ?>" alt="" class="homepage__service-icon">
                <h3 class="homepage__service-title"><?php echo esc_html( $service['title'] ); ?></h3>
              </div>
              <p class="homepage__service-desc"><?php echo esc_html( $service['text'] ); ?></p>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </section>

    <section class="homepage__cta-mid" aria-label="Schedule a suspension service">
      <div class="homepage__cta-mid-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $cta1_bg_image_url ); ?>" alt="">
        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/cta-mid-texture-overlay.jpg" alt="">
      </div>
      <div class="homepage__container homepage__cta-mid-content">
        <h2 class="homepage__heading-2 homepage__heading-2--light">
          <?php
          if ( strpos( $cta1_heading, 'DA-Motorsports' ) !== false ) {
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            echo wp_kses_post( str_replace( 'DA-Motorsports', '<span class="homepage__accent-text">DA-Motorsports</span>', $cta1_heading ) );
          } else {
            echo esc_html( $cta1_heading );
          }
          ?>
        </h2>
        <p class="homepage__cta-mid-text"><?php echo esc_html( $cta1_subheading ); ?></p>
        <div class="homepage__cta-actions">
                   
            <div class="homepage__button-wrap"> 
                <a href="<?php echo esc_url( $cta1_button1_url ); ?>" class="homepage__button homepage__button--primary"><?php echo esc_html( $cta1_button1_text ); ?> 
                <span class="vertical-left"></span>
                <span class="vertical-right"></span>
              </a> 
            </div>   
            <div class="homepage__button-wrap"> 
              <a href="<?php echo esc_url( $cta1_button2_url ); ?>" class="homepage__button homepage__button--secondary">
                <?php echo esc_html( $cta1_button2_text ); ?> 
                <span class="vertical-left"></span>
                <span class="vertical-right"></span>
              </a> 
            </div>
        </div>
      </div>
    </section>

    <section class="homepage__testimonials" aria-label="Rider feedback">
      <div class="homepage__testimonials-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/testimonial-background-texture.png" alt="">
      </div>
      <div class="homepage__container homepage__testimonials-grid">
        <div class="homepage__testimonials-intro">
          <h2 class="homepage__heading-2"><?php echo esc_html( $testimonial_heading ); ?></h2>
          <p class="homepage__section-intro"><?php echo esc_html( $testimonial_subheading ); ?></p>
        </div>
        <div class="homepage__testimonial-wrapper">
          <?php
          if ( ! empty( $testimonials ) ) :
            $testimonial = $testimonials[0];
            $avatar_url  = ! empty( $testimonial['authorImageUrl'] ) ? $testimonial['authorImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/avatar-marcus-reid.jpg';
            ?>
            <article class="homepage__testimonial-card">
              <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/icon-stars-rating.svg" alt="Rated 5 out of 5 stars" class="homepage__testimonial-stars">
              <blockquote class="homepage__testimonial-quote">
                <p><?php echo esc_html( $testimonial['quote'] ); ?></p>
              </blockquote>
              <figure class="homepage__testimonial-author">
                <img src="<?php echo esc_url( $avatar_url ); ?>" alt="" class="homepage__testimonial-avatar">
                <figcaption>
                  <p class="homepage__testimonial-name"><?php echo esc_html( $testimonial['authorName'] ); ?></p>
                  <p class="homepage__testimonial-role"><?php echo esc_html( $testimonial['authorTitle'] ); ?></p>
                </figcaption>
              </figure>
            </article>
          <?php endif; ?>
          <div class="homepage__testimonial-controls">
            <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/slider-dots.svg" alt="Slide 1 of 3" class="homepage__testimonial-dots">
            <div class="homepage__testimonial-nav">
              <button type="button" class="homepage__testimonial-arrow" aria-label="Previous testimonial">
                <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/icon-arrow-back.svg" alt="">
              </button>
              <button type="button" class="homepage__testimonial-arrow" aria-label="Next testimonial">
                <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/icon-arrow-forward.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="homepage__faq" aria-label="Frequently asked questions">
      <div class="homepage__faq-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $faq_bg_image_url ); ?>" alt="">
        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/decorative-background-texture.png" alt="">
      </div>
      <div class="homepage__container">
        <div class="homepage__section-heading homepage__section-heading--start">
          <h2 class="homepage__heading-2 homepage__heading-2--light"><?php echo esc_html( $faq_heading ); ?></h2>
          <p class="homepage__section-intro homepage__section-intro--light"><?php echo esc_html( $faq_subheading ); ?></p>
        </div>
        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/divider-squiggle-faq.svg" alt="" class="homepage__faq-top-divider">
        <ul class="homepage__faq-list">
          <?php
          $faq_index = 0;
          foreach ( $faq_items as $faq ) :
            ++$faq_index;
            ?>
            <li class="homepage__faq-item">
              <?php if ( $faq_index > 1 ) : ?>
                <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/divider-line.svg" alt="" class="homepage__faq-divider">
              <?php endif; ?>
              <h3 class="homepage__faq-question"><?php echo esc_html( $faq['question'] ); ?></h3>
              <p class="homepage__faq-answer"><?php echo esc_html( $faq['answer'] ); ?></p>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </section>

    <section class="homepage__locations" id="contact" aria-label="Our locations"> 
      <div class="homepage__container">
        <div class="homepage__locations-heading">
          <p class="homepage__tagline"><?php echo esc_html( $contact_tagline ); ?></p>
          <h2 class="homepage__heading-2 homepage__heading-2--light"><?php echo esc_html( $contact_heading ); ?></h2>
        </div>
        <div class="homepage__locations-content">
          <ul class="homepage__locations-tabs" role="tablist" aria-label="Location selection">
            <?php
            foreach ( $locations as $location ) :
              $is_active = isset( $location['isActive'] ) && $location['isActive'];
              $tab_class = 'homepage__location-tab';
              if ( $is_active ) {
                $tab_class .= ' homepage__location-tab--active';
              }
              $map_url = ! empty( $location['mapImageUrl'] ) ? $location['mapImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/location-map-chandler.jpg';
              ?>
              <li class="<?php echo esc_attr( $tab_class ); ?>" 
                  role="tab"
                  aria-selected="<?php echo $is_active ? 'true' : 'false'; ?>"
                  tabindex="<?php echo $is_active ? '0' : '-1'; ?>"
                  data-map-url="<?php echo esc_url( $map_url ); ?>" 
                  data-indicator-url="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/tab-active-indicator.svg"
                  style="cursor: pointer;">
                <?php if ( $is_active ) : ?>
                  <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/tab-active-indicator.svg" alt="" class="homepage__location-tab-indicator">
                <?php endif; ?>
                <h3 class="homepage__location-title"><?php echo esc_html( $location['title'] ); ?></h3>
                <p class="homepage__location-address"><?php echo esc_html( $location['subtitle'] ); ?></p>   
                <a href="<?php echo esc_url( $location['buttonUrl'] ); ?>" class="homepage__button homepage__button--small"><?php echo esc_html( $location['buttonText'] ); ?>
                  <span class="vertical-left"></span>
                  <span class="vertical-right"></span>
                </a>  
              </li>
            <?php endforeach; ?>
          </ul>
          <div class="homepage__locations-map" role="tabpanel">
            <?php
            $active_location = array_filter(
              $locations,
              function ( $loc ) {
                return isset( $loc['isActive'] ) && $loc['isActive'];
              }
            );
            $active_location = ! empty( $active_location ) ? reset( $active_location ) : ( ! empty( $locations ) ? $locations[0] : null );
            if ( $active_location ) :
              $map_url = ! empty( $active_location['mapImageUrl'] ) ? $active_location['mapImageUrl'] : $theme_uri . '/blocks/service-page/assets/images/location-map-chandler.jpg';
              ?>
              <img src="<?php echo esc_url( $map_url ); ?>" alt="Map showing the <?php echo esc_attr( $active_location['title'] ); ?> location">
            <?php endif; ?>
          </div>
        </div>
      </div>
      <div class="homepage__locations-decor" aria-hidden="true">
        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/icon-skull-accent.svg" alt="">
        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/logo-da-skully.png" alt="">
      </div>
    </section>

    <section class="homepage__cta-final" aria-label="Get started with DA Motorsports">
      <div class="homepage__cta-final-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/cta-final-background.jpg" alt="">
        <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/cta-final-texture-bg.png" alt="">
      </div>
      <div class="homepage__container">
        <div class="homepage__cta-final-card">
          <p class="homepage__cta-final-label">You've found us!</p>
          <h2 class="homepage__heading-2 homepage__heading-2--light">Arizona's most dependable dirt bike &amp; motorcycle suspension shop is here. For you.</h2>
          <img src="<?php echo esc_url( $theme_uri ); ?>/blocks/service-page/assets/images/divider-squiggle-cta-final.svg" alt="" class="homepage__cta-final-divider">
          <p class="homepage__cta-final-text">DA-Motorsports offers a 98% satisfaction rating. We back up all our work with a WRITTEN SATISFACTION GUARANTEE. If a customer isn't satisfied, we make it right. Right away.</p>
          <div class="homepage__cta-actions">
            <a href="tel:+10000000000" class="homepage__button">Call Us Today</a>
            <a href="#contact" class="homepage__button homepage__button--tertiary">Schedule An Appointment</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>