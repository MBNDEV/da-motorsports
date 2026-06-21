<?php
/**
 * Services Page Block
 *
 * @package MBN_Theme
 * @param array $attributes Block attributes
 * @param string $content Block content
 * @param WP_Block $block Block instance
 */

// Extract attributes

$theme_uri = get_template_directory_uri();

$hero_label        = $attributes['heroLabel'] ?? '';
$hero_heading      = $attributes['heroHeading'] ?? '';
$hero_subtext      = $attributes['heroSubtext'] ?? '';
$hero_button_text  = $attributes['heroButtonText'] ?? '';
$hero_button_url   = $attributes['heroButtonUrl'] ?? '';
$hero_bg_type      = $attributes['heroBackgroundType'] ?? 'image';
$hero_bg_video_url = ! empty( $attributes['heroBackgroundVideoUrl'] ) ? $attributes['heroBackgroundVideoUrl'] : $theme_uri . '/build/blocks/services/assets/videos/hero-suspension-bg.mp4';
$hero_bg_image_url = ! empty( $attributes['heroBackgroundImageUrl'] ) ? $attributes['heroBackgroundImageUrl'] : $theme_uri . '/build/blocks/services/assets/images/hero-suspension-bg.jpg';

$services_heading_accent = $attributes['servicesHeadingAccent'] ?? '';
$services_heading        = $attributes['servicesHeading'] ?? '';
$services_subtext        = $attributes['servicesSubtext'] ?? '';
$service_cards           = $attributes['serviceCards'] ?? array();

$mid_cta_heading              = $attributes['midCtaHeading'] ?? '';
$mid_cta_heading_accent       = $attributes['midCtaHeadingAccent'] ?? '';
$mid_cta_subtext              = $attributes['midCtaSubtext'] ?? '';
$mid_cta_call_button_text     = $attributes['midCtaCallButtonText'] ?? '';
$mid_cta_call_button_url      = $attributes['midCtaCallButtonUrl'] ?? '';
$mid_cta_schedule_button_text = $attributes['midCtaScheduleButtonText'] ?? '';
$mid_cta_schedule_button_url  = $attributes['midCtaScheduleButtonUrl'] ?? '';
$mid_cta_bg_url               = $attributes['midCtaBackgroundImageUrl'] ?? '';

$process_label          = $attributes['processLabel'] ?? '';
$process_heading        = $attributes['processHeading'] ?? '';
$process_heading_accent = $attributes['processHeadingAccent'] ?? '';
$process_subtext        = $attributes['processSubtext'] ?? '';
$process_steps          = $attributes['processSteps'] ?? array();

$why_heading        = $attributes['whyHeading'] ?? '';
$why_heading_accent = $attributes['whyHeadingAccent'] ?? '';
$why_subtext        = $attributes['whySubtext'] ?? '';
$why_cards          = $attributes['whyCards'] ?? array();

$testimonial_heading    = $attributes['testimonialHeading'] ?? '';
$testimonial_subtext    = $attributes['testimonialSubtext'] ?? '';
$testimonial_quote      = $attributes['testimonialQuote'] ?? '';
$testimonial_name       = $attributes['testimonialName'] ?? '';
$testimonial_role       = $attributes['testimonialRole'] ?? '';
$testimonial_avatar_url = $attributes['testimonialAvatarUrl'] ?? '';

$signs_heading_accent = $attributes['signsHeadingAccent'] ?? '';
$signs_heading        = $attributes['signsHeading'] ?? '';
$signs_intro          = $attributes['signsIntro'] ?? '';
$signs_list           = $attributes['signsList'] ?? array();
$signs_image_url      = $attributes['signsImageUrl'] ?? '';
$signs_bg_url         = $attributes['signsBackgroundImageUrl'] ?? '';

$faq_heading = $attributes['faqHeading'] ?? '';
$faq_items   = $attributes['faqItems'] ?? array();

$bottom_cta_heading              = $attributes['bottomCtaHeading'] ?? '';
$bottom_cta_subtext              = $attributes['bottomCtaSubtext'] ?? '';
$bottom_cta_call_button_text     = $attributes['bottomCtaCallButtonText'] ?? '';
$bottom_cta_call_button_url      = $attributes['bottomCtaCallButtonUrl'] ?? '';
$bottom_cta_schedule_button_text = $attributes['bottomCtaScheduleButtonText'] ?? '';
$bottom_cta_schedule_button_url  = $attributes['bottomCtaScheduleButtonUrl'] ?? '';

$footer_tagline          = $attributes['footerTagline'] ?? '';
$footer_newsletter_label = $attributes['footerNewsletterLabel'] ?? '';
$footer_services_links   = $attributes['footerServicesLinks'] ?? array();
$footer_company_links    = $attributes['footerCompanyLinks'] ?? array();
$footer_social_links     = $attributes['footerSocialLinks'] ?? array();
$footer_copyright        = $attributes['footerCopyright'] ?? '';
$footer_privacy_url      = $attributes['footerPrivacyUrl'] ?? '';
$footer_terms_url        = $attributes['footerTermsUrl'] ?? '';

$wrapper_attributes = get_block_wrapper_attributes();
$theme_uri          = get_stylesheet_directory_uri();
?>

<div class="services" <?php echo wp_kses_post( $wrapper_attributes ); ?>>
  <!-- Hero Section --> 
  <section class="section__hero" aria-label="Introduction" aria-labelledby="mss-hero-heading">
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
        <div class="section__hero-content-inner">
            <div class="section__hero-label"><?php echo esc_html( $hero_label ); ?></div>
            <h1 class="section__hero-heading" id="mss-hero-heading">
            <?php
            $heading_parts = explode( ',', $hero_heading, 2 );
            if ( count( $heading_parts ) > 1 ) {
                echo esc_html( trim( $heading_parts[0] ) ) . ',';
                echo ' <span class="section__accent-text">' . esc_html( trim( $heading_parts[1] ) ) . '</span>';
            } else {
                echo esc_html( $hero_heading );
            }
            ?>
            </h1>
        </div>
        <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/home/assets/images/divider-squiggle-horizontal.svg" alt="" class="section__hero-divider">
        <div class="section__hero-footer">
            <p class="section__hero-text"><?php echo esc_html( $hero_subtext ); ?></p>
            <div class="section__button-wrap"> 
              <a href="<?php echo esc_url( $hero_button_url ); ?>" class="section__button section__button--primary"><?php echo esc_html( $hero_button_text ); ?>
                <span class="vertical-left"></span>
                <span class="vertical-right"></span>
              </a> 
          </div>
        </div>
      </div>
    </section>

  <!-- Services Grid Section -->
  <section class="section__services" aria-labelledby="mss-services-heading">
    <div class="section__services-container">
      <h2 class="section__services-heading" id="mss-services-heading">
        <span class="section__services-heading--accent"><?php echo esc_html( $services_heading_accent ); ?></span>
        <?php echo esc_html( $services_heading ); ?>
      </h2>
      <p class="section__services-subtext"><?php echo esc_html( $services_subtext ); ?></p>
      
      <ul class="section__services-grid" aria-label="Suspension services list">
        <?php foreach ( $service_cards as $card ) : ?>
          <li class="section__services-card">
            <?php if ( ! empty( $card['imageUrl'] ) ) : ?>
              <figure class="section__services-card-img">
                <img src="<?php echo esc_url( $card['imageUrl'] ); ?>" alt="<?php echo esc_attr( $card['heading'] ?? '' ); ?>">
              </figure>
            <?php endif; ?>
            <div class="section__services-card-body">
              <?php if ( ! empty( $card['tag'] ) ) : ?>
                <p class="section__services-card-tag"><?php echo esc_html( $card['tag'] ); ?></p>
              <?php endif; ?>
              <h3 class="section__services-card-heading"><?php echo esc_html( $card['heading'] ?? '' ); ?></h3>
              <p class="section__services-card-text"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </section>

  <!-- Mid CTA Section -->
  <section class="section__mid-cta" aria-labelledby="mss-mid-cta-heading">
    <figure class="section__mid-cta-bg" aria-hidden="true">
      <img src="<?php echo esc_url( ! empty( $mid_cta_bg_url ) ? $mid_cta_bg_url : $theme_uri . '/build/blocks/services/assets/images/cta-mid-bg.jpg' ); ?>" alt="">
    </figure>
    <div class="section__mid-cta-overlay" aria-hidden="true"></div>
    <div class="section__mid-cta-container">
      <h2 class="section__mid-cta-heading" id="mss-mid-cta-heading">
        <?php echo esc_html( $mid_cta_heading ); ?>
        <span class="section__mid-cta-heading--accent"><?php echo esc_html( $mid_cta_heading_accent ); ?></span>
      </h2>
      <p class="section__mid-cta-subtext"><?php echo esc_html( $mid_cta_subtext ); ?></p>
      <div class="section__mid-cta-actions">
        <a href="<?php echo esc_url( $mid_cta_call_button_url ); ?>" class="section__mid-cta-btn section__mid-cta-btn--outline"><?php echo esc_html( $mid_cta_call_button_text ); ?></a>
        <a href="<?php echo esc_url( $mid_cta_schedule_button_url ); ?>" class="section__mid-cta-btn section__mid-cta-btn--solid"><?php echo esc_html( $mid_cta_schedule_button_text ); ?></a>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="section__process" aria-labelledby="mss-process-heading">
    <div class="section__process-container">
      <p class="section__process-label"><?php echo esc_html( $process_label ); ?></p>
      <h2 class="section__process-heading" id="mss-process-heading">
        <?php echo esc_html( $process_heading ); ?>
        <span class="section__process-heading--accent"><?php echo esc_html( $process_heading_accent ); ?></span>
      </h2>
      <p class="section__process-subtext"><?php echo esc_html( $process_subtext ); ?></p>
      
      <ol class="section__process-steps" aria-label="Suspension tuning process steps">
        <?php foreach ( $process_steps as $step ) : ?>
          <li class="section__process-step">
            <?php if ( ! empty( $step['iconUrl'] ) ) : ?>
              <figure class="section__process-step-icon" aria-hidden="true">
                <img src="<?php echo esc_url( $step['iconUrl'] ); ?>" alt="">
              </figure>
            <?php endif; ?>
            <h3 class="section__process-step-heading"><?php echo esc_html( $step['heading'] ?? '' ); ?></h3>
            <p class="section__process-step-text"><?php echo esc_html( $step['text'] ?? '' ); ?></p>
          </li>
        <?php endforeach; ?>
      </ol>
    </div>
  </section>

  <!-- Why Choose Section -->
  <section class="section__why" aria-labelledby="mss-why-heading">
    <div class="section__why-container">
      <h2 class="section__why-heading" id="mss-why-heading">
        <?php echo esc_html( $why_heading ); ?>
        <span class="section__why-heading--accent"><?php echo esc_html( $why_heading_accent ); ?></span>
      </h2>
      <p class="section__why-subtext"><?php echo esc_html( $why_subtext ); ?></p>
      
      <ul class="section__why-grid" aria-label="Reasons to choose DA Motorsports">
        <?php foreach ( $why_cards as $card ) : ?>
          <li class="section__why-card">
            <?php if ( ! empty( $card['imageUrl'] ) ) : ?>
              <figure class="section__why-card-img">
                <img src="<?php echo esc_url( $card['imageUrl'] ); ?>" alt="<?php echo esc_attr( $card['heading'] ?? '' ); ?>">
              </figure>
            <?php endif; ?>
            <div class="section__why-card-body">
              <h3 class="section__why-card-heading"><?php echo esc_html( $card['heading'] ?? '' ); ?></h3>
              <p class="section__why-card-text"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="mss-testimonial" aria-labelledby="section__why-heading">
    <div class="section__why-container">
      <div class="section__why-left">
        <h2 class="section__why-heading" id="mss-testimonial-heading"><?php echo esc_html( $testimonial_heading ); ?></h2>
        <p class="section__why-subtext"><?php echo esc_html( $testimonial_subtext ); ?></p>
      </div>
      
      <div class="section__why-right">
        <figure class="section__why-stars" aria-label="5 out of 5 stars">
          <span aria-hidden="true">★★★★★</span>
        </figure>
        <blockquote class="section__why-quote">
          <p>"<?php echo esc_html( $testimonial_quote ); ?>"</p>
        </blockquote>
        <figcaption class="section__why-attribution">
          <?php if ( ! empty( $testimonial_avatar_url ) ) : ?>
            <img src="<?php echo esc_url( $testimonial_avatar_url ); ?>" alt="<?php echo esc_attr( $testimonial_name ); ?>" class="section__why-avatar">
          <?php endif; ?>
          <div>
            <strong class="section__why-name"><?php echo esc_html( $testimonial_name ); ?></strong>
            <span class="section__why-role"><?php echo esc_html( $testimonial_role ); ?></span>
          </div>
        </figcaption>
      </div>
    </div>
    <div class="section__why-dots" aria-label="Testimonial navigation">
      <button class="section__why-dot section__why-dot--active" aria-label="Testimonial 1"></button>
      <button class="section__why-dot" aria-label="Testimonial 2"></button>
      <button class="section__why-dot" aria-label="Testimonial 3"></button>
    </div>
  </section>

  <!-- 5 Signs Section -->
  <section class="section__signs" aria-labelledby="section__signs-heading">
    <figure class="section__signs-bg" aria-hidden="true">
      <img src="<?php echo esc_url( ! empty( $signs_bg_url ) ? $signs_bg_url : $theme_uri . '/build/blocks/services/assets/images/signs-bg.jpg' ); ?>" alt="">
    </figure>
    <div class="section__signs-overlay" aria-hidden="true"></div>
    <div class="section__signs-container">
      <div class="section__signs-left">
        <h2 class="section__signs-heading" id="mss-signs-heading">
          <span class="section__signs-heading--accent"><?php echo esc_html( $signs_heading_accent ); ?></span>
          <?php echo esc_html( $signs_heading ); ?>
        </h2>
        <p class="section__signs-intro"><?php echo esc_html( $signs_intro ); ?></p>
        <ul class="section__signs-list">
          <?php foreach ( $signs_list as $sign ) : ?>
            <li><?php echo esc_html( $sign ); ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
      <?php if ( ! empty( $signs_image_url ) ) : ?>
        <figure class="section__signs-image">
          <img src="<?php echo esc_url( $signs_image_url ); ?>" alt="RZR side-by-side vehicle on desert terrain">
        </figure>
      <?php endif; ?>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section__faq" aria-labelledby="section__faq-heading">
    <div class="section__faq-container">
      <h2 class="section__faq-heading" id="mss-faq-heading"><?php echo esc_html( $faq_heading ); ?></h2>
      
      <dl class="section__faq-list">
        <?php foreach ( $faq_items as $index => $item ) : ?>
          <div class="section__faq-item">
            <dt class="section__faq-question">
              <button class="section__faq-toggle" aria-expanded="<?php echo 0 === $index ? 'true' : 'false'; ?>" aria-controls="faq-<?php echo esc_attr( $index ); ?>">
                <?php echo esc_html( $item['question'] ?? '' ); ?>
                <span class="section__faq-icon" aria-hidden="true"><?php echo 0 === $index ? '−' : '+'; ?></span>
              </button>
            </dt>
            <dd class="section__faq-answer<?php echo 0 === $index ? '' : ' section__faq-answer--hidden'; ?>" id="faq-<?php echo esc_attr( $index ); ?>">
              <?php echo esc_html( $item['answer'] ?? '' ); ?>
            </dd>
          </div>
        <?php endforeach; ?>
      </dl>
    </div>
  </section>

  <!-- Bottom CTA Section -->
  <section class="section__bottom-cta" aria-labelledby="mss-bottom-cta-heading">
    <div class="section__bottom-cta-container">
      <h2 class="section__bottom-cta-heading" id="mss-bottom-cta-heading"><?php echo esc_html( $bottom_cta_heading ); ?></h2>
      <p class="section__bottom-cta-subtext"><?php echo esc_html( $bottom_cta_subtext ); ?></p>
      <div class="section__button-wrap">
        <a href="<?php echo esc_url( $bottom_cta_call_button_url ); ?>" class="section__button section__button--outline"><?php echo esc_html( $bottom_cta_call_button_text ); ?></a>
        <a href="<?php echo esc_url( $bottom_cta_schedule_button_url ); ?>" class="section__button section__button--solid"><?php echo esc_html( $bottom_cta_schedule_button_text ); ?></a>
      </div>
    </div>
  </section>
</div>
