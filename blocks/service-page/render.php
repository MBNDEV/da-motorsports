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
$hero_bg_video_url = isset( $attributes['heroBackgroundVideoUrl'] ) && ! empty( $attributes['heroBackgroundVideoUrl'] ) ? $attributes['heroBackgroundVideoUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/hero-background.mp4';
$hero_bg_image_url = isset( $attributes['heroBackgroundImageUrl'] ) && ! empty( $attributes['heroBackgroundImageUrl'] ) ? $attributes['heroBackgroundImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/hero-background.jpg';

$why_choose_bg_image_url = isset( $attributes['whyChooseBackgroundImageUrl'] ) && ! empty( $attributes['whyChooseBackgroundImageUrl'] ) ? $attributes['whyChooseBackgroundImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/why-choose-bg.png';
$why_choose_heading      = isset( $attributes['whyChooseHeading'] ) ? $attributes['whyChooseHeading'] : '';
$why_choose_subheading   = isset( $attributes['whyChooseSubheading'] ) ? $attributes['whyChooseSubheading'] : '';
$services_grid_eyebrow   = isset( $attributes['servicesGridEyebrow'] ) ? $attributes['servicesGridEyebrow'] : '';
$process_eyebrow         = isset( $attributes['processEyebrow'] ) ? $attributes['processEyebrow'] : '';
$why_choose_items        = isset( $attributes['whyChooseItems'] ) ? $attributes['whyChooseItems'] : array();

$services_bg_image_url  = isset( $attributes['servicesBackgroundImageUrl'] ) && ! empty( $attributes['servicesBackgroundImageUrl'] ) ? $attributes['servicesBackgroundImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/motor-suspension-services-bg.png';
$services_hdr_image_url = isset( $attributes['servicesHeaderImageUrl'] ) && ! empty( $attributes['servicesHeaderImageUrl'] ) ? $attributes['servicesHeaderImageUrl'] : '';
$services_heading       = isset( $attributes['servicesHeading'] ) ? $attributes['servicesHeading'] : '';
$services_subheading    = isset( $attributes['servicesSubheading'] ) ? $attributes['servicesSubheading'] : '';
$service_items          = isset( $attributes['serviceItems'] ) ? $attributes['serviceItems'] : array();

$services2_bg_type       = isset( $attributes['services2BackgroundType'] ) ? $attributes['services2BackgroundType'] : 'image';
$services2_bg_video_url  = isset( $attributes['services2BackgroundVideoUrl'] ) && ! empty( $attributes['services2BackgroundVideoUrl'] ) ? $attributes['services2BackgroundVideoUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/motor-suspension-services-bg.mp4';
$services2_bg_image_url  = isset( $attributes['services2BackgroundImageUrl'] ) && ! empty( $attributes['services2BackgroundImageUrl'] ) ? $attributes['services2BackgroundImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/motor-suspension-services-bg.png';
$services2_hdr_image_url = isset( $attributes['services2HeaderImageUrl'] ) && ! empty( $attributes['services2HeaderImageUrl'] ) ? $attributes['services2HeaderImageUrl'] : '';
$services2_heading       = isset( $attributes['services2Heading'] ) ? $attributes['services2Heading'] : '';
$services2_subheading    = isset( $attributes['services2Subheading'] ) ? $attributes['services2Subheading'] : '';
$service2_items          = isset( $attributes['service2Items'] ) ? $attributes['service2Items'] : array();

$cta1_heading      = isset( $attributes['cta1Heading'] ) ? $attributes['cta1Heading'] : '';
$cta1_subheading   = isset( $attributes['cta1Subheading'] ) ? $attributes['cta1Subheading'] : '';
$cta1_button1_text = isset( $attributes['cta1Button1Text'] ) ? $attributes['cta1Button1Text'] : '';
$cta1_button1_url  = isset( $attributes['cta1Button1Url'] ) ? $attributes['cta1Button1Url'] : '#';
$cta1_button2_text = isset( $attributes['cta1Button2Text'] ) ? $attributes['cta1Button2Text'] : '';
$cta1_button2_url  = isset( $attributes['cta1Button2Url'] ) ? $attributes['cta1Button2Url'] : '#';
$cta1_bg_image_url = isset( $attributes['cta1BackgroundImageUrl'] ) && ! empty( $attributes['cta1BackgroundImageUrl'] ) ? $attributes['cta1BackgroundImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/cta-mid-background.jpg';


$testimonial_bg_image_url = isset( $attributes['testimonialBackgroundImageUrl'] ) && ! empty( $attributes['testimonialBackgroundImageUrl'] ) ? $attributes['testimonialBackgroundImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/testimonial-background-texture.png';
$testimonial_heading      = isset( $attributes['testimonialHeading'] ) ? $attributes['testimonialHeading'] : '';
$testimonial_subheading   = isset( $attributes['testimonialSubheading'] ) ? $attributes['testimonialSubheading'] : '';
$testimonials             = isset( $attributes['testimonials'] ) ? $attributes['testimonials'] : array();

$contact_tagline = isset( $attributes['contactTagline'] ) ? $attributes['contactTagline'] : '';
$contact_heading = isset( $attributes['contactHeading'] ) ? $attributes['contactHeading'] : '';
$locations       = isset( $attributes['locations'] ) ? $attributes['locations'] : array();

$faq_bg_image_url = isset( $attributes['faqBackgroundImageUrl'] ) && ! empty( $attributes['faqBackgroundImageUrl'] ) ? $attributes['faqBackgroundImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/faq-background.jpg';
$faq_heading      = isset( $attributes['faqHeading'] ) ? $attributes['faqHeading'] : '';
$faq_subheading   = isset( $attributes['faqSubheading'] ) ? $attributes['faqSubheading'] : '';
$faq_items        = isset( $attributes['faqItems'] ) ? $attributes['faqItems'] : array();

$cta_final_label             = isset( $attributes['ctaFinalLabel'] ) ? $attributes['ctaFinalLabel'] : '';
$cta_final_heading           = isset( $attributes['ctaFinalHeading'] ) ? $attributes['ctaFinalHeading'] : '';
$cta_final_text              = isset( $attributes['ctaFinalText'] ) ? $attributes['ctaFinalText'] : '';
$cta_final_button1_text      = isset( $attributes['ctaFinalButton1Text'] ) ? $attributes['ctaFinalButton1Text'] : '';
$cta_final_button1_url       = isset( $attributes['ctaFinalButton1Url'] ) ? $attributes['ctaFinalButton1Url'] : '#';
$cta_final_button2_text      = isset( $attributes['ctaFinalButton2Text'] ) ? $attributes['ctaFinalButton2Text'] : '';
$cta_final_button2_url       = isset( $attributes['ctaFinalButton2Url'] ) ? $attributes['ctaFinalButton2Url'] : '#';
$cta_final_bg_image_url      = isset( $attributes['ctaFinalBackgroundImageUrl'] ) && ! empty( $attributes['ctaFinalBackgroundImageUrl'] ) ? $attributes['ctaFinalBackgroundImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/cta-final-background.jpg';
$cta_final_texture_image_url = isset( $attributes['ctaFinalTextureImageUrl'] ) && ! empty( $attributes['ctaFinalTextureImageUrl'] ) ? $attributes['ctaFinalTextureImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/cta-final-texture-bg.png';

$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => 'homepage' ) );
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
  <main class="section__main">
    <section class="section__hero" aria-label="Introduction">
      <div class="section__hero-bg" aria-hidden="true">
        <?php if ( 'video' === $hero_bg_type ) : ?>
          <video autoplay muted loop playsinline>
            <source src="<?php echo esc_url( $hero_bg_video_url ); ?>" type="video/mp4">
          </video>
        <?php else : ?>
          <img src="<?php echo esc_url( $hero_bg_image_url ); ?>" alt="">
        <?php endif; ?>
      </div>
      <div class="section__hero-content">
        <h1 class="section__hero-heading">
          <?php echo wp_kses_post( $hero_heading ); ?>
        </h1>
        <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/divider-squiggle-horizontal.svg" alt="" class="section__hero-divider">
        <div class="section__hero-footer">
            <p class="section__hero-text"><?php echo wp_kses_post( $hero_body ); ?></p>
            <div class="section__button-wrap"> 
              <a href="<?php echo esc_url( $hero_button_url ); ?>" class="section__button section__button--primary"><?php echo esc_html( $hero_button_text ); ?>
                <span class="vertical-left"></span>
                <span class="vertical-right"></span>
              </a> 
          </div>
        </div>
      </div>
    </section>

    <section class="section__services-grid" id="services-grid" 
          aria-labelledby="section__services-grid-heading section__heading-2"aria-label="Why choose DA Motorsports">
      <div class="section__services-grid-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $why_choose_bg_image_url ); ?>" alt="">
      </div>
      <div class="section__services-grid-container">
        <div class="section__services-grid-header">
          <?php if ( ! empty( $services_grid_eyebrow ) ) : ?>
            <p class="section__services-grid-eyebrow"><?php echo wp_kses_post( $services_grid_eyebrow ); ?></p>
          <?php endif; ?>            
          <h2  class="section__services-grid-heading section__heading-2" id="section__services-grid-heading">
            <?php echo wp_kses_post( $why_choose_heading ); ?>
          </h2>
          <p class="section__services-grid-intro"><?php echo wp_kses_post( $why_choose_subheading ); ?></p>
        </div>
         <!-- Cards grid -->
          <ul
            class="section__services-grid-cards"
            role="list"
            aria-label="Suspension services"
          >
          <?php
          $item_count = 0;
          foreach ( $why_choose_items as $item ) :
            ++$item_count;
            $icon_url = ! empty( $item['iconImageUrl'] ) ? $item['iconImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/icon-factory-suspension.svg';
            $item_tag = ! empty( $item['tag'] ) ? $item['tag'] : '';
            ?>
             <li class="section__services-card">
              <figure class="section__services-card-media">
                <img src="<?php echo esc_url( $icon_url ); ?>" alt="">
              </figure>            
              <div class="section__services-card-body">
                <?php if ( ! empty( $item_tag ) ) : ?>
                  <p class="section__services-card-tag"><?php echo wp_kses_post( $item_tag ); ?></p>
                <?php endif; ?>
                <h3 class="section__services-card-title"><?php echo wp_kses_post( $item['title'] ); ?></h3>
                <p class="section__services-card-text">
                  <?php echo wp_kses_post( $item['text'] ); ?>
                </p>
              </div> 
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </section>

    <section class="section__cta-mid" aria-label="Schedule a suspension service">
      <div class="section__cta-mid-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $cta1_bg_image_url ); ?>" alt="">
        <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/cta-mid-texture-overlay.jpg" alt="">
      </div>
      <div class="section__container section__cta-mid-content">
        <h2 class="section__heading-2 section__heading-2--light">
          <?php echo wp_kses_post( $cta1_heading ); ?>
        </h2>
        <p class="section__cta-mid-text"><?php echo esc_html( $cta1_subheading ); ?></p>
        <div class="section__cta-actions">
                   
            <div class="section__button-wrap"> 
                <a href="<?php echo esc_url( $cta1_button1_url ); ?>" class="section__button section__button--primary"><?php echo esc_html( $cta1_button1_text ); ?> 
                <span class="vertical-left"></span>
                <span class="vertical-right"></span>
              </a> 
            </div>   
            <div class="section__button-wrap"> 
              <a href="<?php echo esc_url( $cta1_button2_url ); ?>" class="section__button section__button--secondary">
                <?php echo esc_html( $cta1_button2_text ); ?> 
                <span class="vertical-left"></span>
                <span class="vertical-right"></span>
              </a> 
            </div>
        </div>
      </div>
    </section>

    
    <section class="section__process
    <?php
    if ( $services_hdr_image_url ) :
      ?>
      has-header-image<?php endif; ?> " id="process" aria-label="Process">
      <div class="section__process-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $services_bg_image_url ); ?>" alt=""> 
      </div>
      <div class="section__container">        
        <div class="section__section-img">
          <img src="<?php echo esc_url( $services_hdr_image_url ); ?>" alt="">
        </div>
        <div class="section__section-heading">
          <?php if ( ! empty( $process_eyebrow ) ) : ?>
            <p class="section__services-grid-eyebrow"><?php echo wp_kses_post( $process_eyebrow ); ?></p>
          <?php endif; ?>
          <h2 class="section__heading-2">
            <?php echo wp_kses_post( $services_heading ); ?>
          </h2>
          <p class="section__section-intro"><?php echo wp_kses_post( $services_subheading ); ?></p>
        </div>
        <ul class="section__process-cards-wrap">
          <?php
          foreach ( $service_items as $service ) :
            $icon_url = ! empty( $service['iconImageUrl'] ) ? $service['iconImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/icon-suspension-tuning.svg';
            ?>
            <li class="section__process-card">
              <div class="section__process-card-head">
                <img src="<?php echo esc_url( $icon_url ); ?>" alt="" class="section__process-icon">
                <h3 class="section__process-title"><?php echo wp_kses_post( $service['title'] ); ?></h3>
              </div>
              <p class="section__process-desc"><?php echo wp_kses_post( $service['text'] ); ?></p>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </section>
    
    <section class="section__services section__services--v2 
    <?php
    if ( $services2_hdr_image_url ) :
      ?>
      has-header-image<?php endif; ?>" id="services-v2" aria-label="Additional services">
      <div class="section__services-bg" aria-hidden="true">
        <?php if ( 'video' === $services2_bg_type ) : ?>
          <video autoplay muted loop playsinline>
            <source src="<?php echo esc_url( $services2_bg_video_url ); ?>" type="video/mp4">
            <source src="<?php echo esc_url( $services2_bg_video_url ); ?>" type="video/mp4">
          </video>
        <?php else : ?>
          <img src="<?php echo esc_url( $services2_bg_image_url ); ?>" alt="">
          <img src="<?php echo esc_url( $services2_bg_image_url ); ?>" alt="">
        <?php endif; ?>
      </div>
      <div class="section__container">
        <div class="section__section-img">
          <img src="<?php echo esc_url( $services2_hdr_image_url ); ?>" alt="">
        </div>
        <div class="section__section-heading">
          <h2 class="section__heading-2 section__heading-2--light">
            <?php echo wp_kses_post( $services2_heading ); ?>
          </h2>
          <p class="section__section-intro section__section-intro--light"><?php echo wp_kses_post( $services2_subheading ); ?></p>
        </div>
        <ul class="section__services-grid-v2">
          <?php
          foreach ( $service2_items as $service ) :
            $icon_url = ! empty( $service['iconImageUrl'] ) ? $service['iconImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/icon-suspension-tuning.svg';
            ?>
            <li class="section__service-card">
              <div class="section__service-card--inner">
                <div class="section__service-card-img">
                  <img src="<?php echo esc_url( $icon_url ); ?>" alt="" class="section__service-icon">
                </div>
                <div class="section__service-card-head">
                  <h3 class="section__service-title"><?php echo wp_kses_post( $service['title'] ); ?></h3>
                <p class="section__service-desc"><?php echo wp_kses_post( $service['text'] ); ?></p>
                </div>            
              </div>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </section>

    <section class="section__testimonials" aria-label="Rider feedback">
      <div class="section__testimonials-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/testimonial-background-texture.png" alt="">
      </div>
      <div class="section__container section__testimonials-grid">
        <div class="section__testimonials-intro">
          <h2 class="section__heading-2"><?php echo wp_kses_post( $testimonial_heading ); ?></h2>
          <p class="section__section-intro"><?php echo wp_kses_post( $testimonial_subheading ); ?></p>
        </div>
        <div class="section__testimonial-wrapper">
          <div class="section__testimonial-slider">
            <?php
            $testimonial_query = new WP_Query(
              array(
				  'post_type'      => 'testimonial',
				  'posts_per_page' => -1,
				  'post_status'    => 'publish',
				  'orderby'        => 'date',
				  'order'          => 'DESC',
              )
            );

            if ( $testimonial_query->have_posts() ) :
              $testimonial_count = $testimonial_query->post_count;
              while ( $testimonial_query->have_posts() ) :
                $testimonial_query->the_post();
                $client_name     = get_field( 'client_name' );
                $client_location = get_field( 'client_position_location' );
                $avatar_url      = get_the_post_thumbnail_url( get_the_ID(), 'thumbnail' );
                if ( ! $avatar_url ) {
                  $avatar_url = $theme_uri . '/build/blocks/service-page/assets/images/avatar-marcus-reid.jpg';
                }
                ?>
                <article class="section__testimonial-card section__testimonial-slide">
                  <img class="section__testimonial-card--img" src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/icon-stars-rating.svg" alt="Rated 5 out of 5 stars" class="section__testimonial-stars">
                  <blockquote class="section__testimonial-quote">
                    <p><?php echo wp_kses_post( get_the_content() ); ?></p>
                  </blockquote>
                  <figure class="section__testimonial-author">
                    <img src="<?php echo esc_url( $avatar_url ); ?>" alt="<?php echo esc_attr( $client_name ); ?>" class="section__testimonial-avatar">
                    <figcaption>
                      <p class="section__testimonial-name"><?php echo esc_html( $client_name ); ?></p>
                      <?php if ( $client_location ) : ?>
                        <p class="section__testimonial-role"><?php echo esc_html( $client_location ); ?></p>
                      <?php endif; ?>
                    </figcaption>
                  </figure>
                </article>
                <?php
              endwhile;
              wp_reset_postdata();
            else :
              ?>
              <article class="section__testimonial-card section__testimonial-slide">
                <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/icon-stars-rating.svg" alt="Rated 5 out of 5 stars" class="section__testimonial-stars">
                <blockquote class="section__testimonial-quote">
                  <p>The team at DA Motorsports helped me get my 2024 Harley Davidson Road Glide dialed in for long touring trips. The difference in comfort and performance is night and day from stock. The personal one on one care they provided was unbelievable</p>
                </blockquote>
                <figure class="section__testimonial-author">
                  <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/avatar-marcus-reid.jpg" alt="Marcus Reid" class="section__testimonial-avatar">
                  <figcaption>
                    <p class="section__testimonial-name">Marcus Reid</p>
                    <p class="section__testimonial-role">Motocross racer, Arizona</p>
                  </figcaption>
                </figure>
              </article>
            <?php endif; ?>
          </div>
          <div class="section__testimonial-controls">
            <div class="section__testimonial-dots"></div>
            <div class="section__testimonial-nav">
              <button type="button" class="section__testimonial-arrow section__testimonial-prev" aria-label="Previous testimonial">
                <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/icon-arrow-back.svg" alt="">
              </button>
              <button type="button" class="section__testimonial-arrow section__testimonial-next" aria-label="Next testimonial">
                <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/icon-arrow-forward.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section__faq" aria-label="Frequently asked questions">
      <div class="section__faq-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $faq_bg_image_url ); ?>" alt="">
        <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/decorative-background-texture.png" alt="">
      </div>
      <div class="section__container">
        <div class="section__section-heading section__section-heading--start">
          <h2 class="section__heading-2 section__heading-2--light"><?php echo wp_kses_post( $faq_heading ); ?></h2>
          <p class="section__section-intro section__section-intro--light"><?php echo wp_kses_post( $faq_subheading ); ?></p>
        </div>
        <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/divider-squiggle-faq.svg" alt="" class="section__faq-top-divider">
        <ul class="section__faq-list">
          <?php
          $faq_index = 0;
          foreach ( $faq_items as $faq ) :
            ++$faq_index;
            ?>
            <li class="section__faq-item">
              <?php if ( $faq_index > 1 ) : ?>
                <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/divider-line.svg" alt="" class="section__faq-divider">
              <?php endif; ?>
              <h3 class="section__faq-question"><?php echo wp_kses_post( $faq['question'] ); ?></h3>
              <p class="section__faq-answer"><?php echo wp_kses_post( $faq['answer'] ); ?></p>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </section>

    <section class="section__locations" id="contact" aria-label="Our locations"> 
      <div class="section__container">
        <div class="section__locations-heading">
          <p class="section__tagline"><?php echo wp_kses_post( $contact_tagline ); ?></p>
          <h2 class="section__heading-2 section__heading-2--light"><?php echo wp_kses_post( $contact_heading ); ?></h2>
        </div>
        <div class="section__locations-content">
          <ul class="section__locations-tabs" role="tablist" aria-label="Location selection">
            <?php
            foreach ( $locations as $location ) :
              $is_active = isset( $location['isActive'] ) && $location['isActive'];
              $tab_class = 'section__location-tab';
              if ( $is_active ) {
                $tab_class .= ' section__location-tab--active';
              }
              $map_url = ! empty( $location['mapImageUrl'] ) ? $location['mapImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/location-map-chandler.jpg';
              ?>
              <li class="<?php echo esc_attr( $tab_class ); ?>" 
                  role="tab"
                  aria-selected="<?php echo $is_active ? 'true' : 'false'; ?>"
                  tabindex="<?php echo $is_active ? '0' : '-1'; ?>"
                  data-map-url="<?php echo esc_url( $map_url ); ?>" 
                  data-indicator-url="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/tab-active-indicator.svg"
                  style="cursor: pointer;">
                <?php if ( $is_active ) : ?>
                  <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/tab-active-indicator.svg" alt="" class="section__location-tab-indicator">
                <?php endif; ?>
                <h3 class="section__location-title"><?php echo esc_html( $location['title'] ); ?></h3>
                <p class="section__location-address"><?php echo esc_html( $location['subtitle'] ); ?></p>   
                <a href="<?php echo esc_url( $location['buttonUrl'] ); ?>" class="section__button section__button--small"><?php echo esc_html( $location['buttonText'] ); ?>
                  <span class="vertical-left"></span>
                  <span class="vertical-right"></span>
                </a>  
              </li>
            <?php endforeach; ?>
          </ul>
          <div class="section__locations-map" role="tabpanel">
            <?php
            $active_location = array_filter(
              $locations,
              function ( $loc ) {
                return isset( $loc['isActive'] ) && $loc['isActive'];
              }
            );
            $active_location = ! empty( $active_location ) ? reset( $active_location ) : ( ! empty( $locations ) ? $locations[0] : null );
            if ( $active_location ) :
              $map_url = ! empty( $active_location['mapImageUrl'] ) ? $active_location['mapImageUrl'] : $theme_uri . '/build/blocks/service-page/assets/images/location-map-chandler.jpg';
              ?>
              <img src="<?php echo esc_url( $map_url ); ?>" alt="Map showing the <?php echo esc_attr( $active_location['title'] ); ?> location">
            <?php endif; ?>
          </div>
        </div>
      </div>
      <div class="section__locations-decor" aria-hidden="true">
        <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/icon-skull-accent.svg" alt="">
        <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/logo-da-skully.png" alt="">
      </div>
    </section>

    <section class="section__cta-final" aria-label="Get started with DA Motorsports">
      <div class="section__cta-final-bg" aria-hidden="true">
        <img src="<?php echo esc_url( $cta_final_bg_image_url ); ?>" alt="">
        <img src="<?php echo esc_url( $cta_final_texture_image_url ); ?>" alt="">
      </div>
      <div class="section__container">
        <div class="section__cta-final-card">
          <?php if ( ! empty( $cta_final_label ) ) : ?>
            <p class="section__cta-final-label"><?php echo wp_kses_post( $cta_final_label ); ?></p>
          <?php endif; ?>
          <?php if ( ! empty( $cta_final_heading ) ) : ?>
            <h2 class="section__heading-2 section__heading-2--light"><?php echo wp_kses_post( $cta_final_heading ); ?></h2>
          <?php endif; ?>
          <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/service-page/assets/images/divider-squiggle-cta-final.svg" alt="" class="section__cta-final-divider">
          <?php if ( ! empty( $cta_final_text ) ) : ?>
            <p class="section__cta-final-text"><?php echo wp_kses_post( $cta_final_text ); ?></p>
          <?php endif; ?>
          <div class="section__cta-actions">
            <?php if ( ! empty( $cta_final_button1_text ) ) : ?>
              <a href="<?php echo esc_url( $cta_final_button1_url ); ?>" class="section__button"><?php echo esc_html( $cta_final_button1_text ); ?>
              <span class="vertical-left"></span>
              <span class="vertical-right"></span>
            </a>
            <?php endif; ?>
            <?php if ( ! empty( $cta_final_button2_text ) ) : ?>
              <a href="<?php echo esc_url( $cta_final_button2_url ); ?>" class="section__button section__button--tertiary"><?php echo esc_html( $cta_final_button2_text ); ?>
              <span class="vertical-left"></span>
              <span class="vertical-right"></span>
            </a>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
