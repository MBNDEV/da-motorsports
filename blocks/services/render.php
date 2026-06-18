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
$hero_label       = $attributes['heroLabel'] ?? '';
$hero_heading     = $attributes['heroHeading'] ?? '';
$hero_subtext     = $attributes['heroSubtext'] ?? '';
$hero_button_text = $attributes['heroButtonText'] ?? '';
$hero_button_url  = $attributes['heroButtonUrl'] ?? '';
$hero_bg_url      = $attributes['heroBackgroundImageUrl'] ?? '';

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

<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
  <!-- Hero Section -->
  <section class="mss-hero" aria-labelledby="mss-hero-heading">
    <figure class="mss-hero__bg" aria-hidden="true">
      <img src="<?php echo esc_url( ! empty( $hero_bg_url ) ? $hero_bg_url : $theme_uri . '/blocks/services/assets/images/hero-suspension-bg.jpg' ); ?>" alt="">
    </figure>
    <div class="mss-hero__overlay" aria-hidden="true"></div>
    <div class="mss-hero__container">
      <p class="mss-hero__label"><?php echo esc_html( $hero_label ); ?></p>
      <h1 class="mss-hero__heading" id="mss-hero-heading"><?php echo esc_html( $hero_heading ); ?></h1>
      <p class="mss-hero__subtext"><?php echo esc_html( $hero_subtext ); ?></p>
      <a href="<?php echo esc_url( $hero_button_url ); ?>" class="mss-hero__btn"><?php echo esc_html( $hero_button_text ); ?></a>
    </div>
  </section>

  <!-- Services Grid Section -->
  <section class="mss-services" aria-labelledby="mss-services-heading">
    <div class="mss-services__container">
      <h2 class="mss-services__heading" id="mss-services-heading">
        <span class="mss-services__heading--accent"><?php echo esc_html( $services_heading_accent ); ?></span>
        <?php echo esc_html( $services_heading ); ?>
      </h2>
      <p class="mss-services__subtext"><?php echo esc_html( $services_subtext ); ?></p>
      
      <ul class="mss-services__grid" aria-label="Suspension services list">
        <?php foreach ( $service_cards as $card ) : ?>
          <li class="mss-services__card">
            <?php if ( ! empty( $card['imageUrl'] ) ) : ?>
              <figure class="mss-services__card-img">
                <img src="<?php echo esc_url( $card['imageUrl'] ); ?>" alt="<?php echo esc_attr( $card['heading'] ?? '' ); ?>">
              </figure>
            <?php endif; ?>
            <div class="mss-services__card-body">
              <?php if ( ! empty( $card['tag'] ) ) : ?>
                <p class="mss-services__card-tag"><?php echo esc_html( $card['tag'] ); ?></p>
              <?php endif; ?>
              <h3 class="mss-services__card-heading"><?php echo esc_html( $card['heading'] ?? '' ); ?></h3>
              <p class="mss-services__card-text"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </section>

  <!-- Mid CTA Section -->
  <section class="mss-mid-cta" aria-labelledby="mss-mid-cta-heading">
    <figure class="mss-mid-cta__bg" aria-hidden="true">
      <img src="<?php echo esc_url( ! empty( $mid_cta_bg_url ) ? $mid_cta_bg_url : $theme_uri . '/blocks/services/assets/images/cta-mid-bg.jpg' ); ?>" alt="">
    </figure>
    <div class="mss-mid-cta__overlay" aria-hidden="true"></div>
    <div class="mss-mid-cta__container">
      <h2 class="mss-mid-cta__heading" id="mss-mid-cta-heading">
        <?php echo esc_html( $mid_cta_heading ); ?>
        <span class="mss-mid-cta__heading--accent"><?php echo esc_html( $mid_cta_heading_accent ); ?></span>
      </h2>
      <p class="mss-mid-cta__subtext"><?php echo esc_html( $mid_cta_subtext ); ?></p>
      <div class="mss-mid-cta__actions">
        <a href="<?php echo esc_url( $mid_cta_call_button_url ); ?>" class="mss-mid-cta__btn mss-mid-cta__btn--outline"><?php echo esc_html( $mid_cta_call_button_text ); ?></a>
        <a href="<?php echo esc_url( $mid_cta_schedule_button_url ); ?>" class="mss-mid-cta__btn mss-mid-cta__btn--solid"><?php echo esc_html( $mid_cta_schedule_button_text ); ?></a>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="mss-process" aria-labelledby="mss-process-heading">
    <div class="mss-process__container">
      <p class="mss-process__label"><?php echo esc_html( $process_label ); ?></p>
      <h2 class="mss-process__heading" id="mss-process-heading">
        <?php echo esc_html( $process_heading ); ?>
        <span class="mss-process__heading--accent"><?php echo esc_html( $process_heading_accent ); ?></span>
      </h2>
      <p class="mss-process__subtext"><?php echo esc_html( $process_subtext ); ?></p>
      
      <ol class="mss-process__steps" aria-label="Suspension tuning process steps">
        <?php foreach ( $process_steps as $step ) : ?>
          <li class="mss-process__step">
            <?php if ( ! empty( $step['iconUrl'] ) ) : ?>
              <figure class="mss-process__step-icon" aria-hidden="true">
                <img src="<?php echo esc_url( $step['iconUrl'] ); ?>" alt="">
              </figure>
            <?php endif; ?>
            <h3 class="mss-process__step-heading"><?php echo esc_html( $step['heading'] ?? '' ); ?></h3>
            <p class="mss-process__step-text"><?php echo esc_html( $step['text'] ?? '' ); ?></p>
          </li>
        <?php endforeach; ?>
      </ol>
    </div>
  </section>

  <!-- Why Choose Section -->
  <section class="mss-why" aria-labelledby="mss-why-heading">
    <div class="mss-why__container">
      <h2 class="mss-why__heading" id="mss-why-heading">
        <?php echo esc_html( $why_heading ); ?>
        <span class="mss-why__heading--accent"><?php echo esc_html( $why_heading_accent ); ?></span>
      </h2>
      <p class="mss-why__subtext"><?php echo esc_html( $why_subtext ); ?></p>
      
      <ul class="mss-why__grid" aria-label="Reasons to choose DA Motorsports">
        <?php foreach ( $why_cards as $card ) : ?>
          <li class="mss-why__card">
            <?php if ( ! empty( $card['imageUrl'] ) ) : ?>
              <figure class="mss-why__card-img">
                <img src="<?php echo esc_url( $card['imageUrl'] ); ?>" alt="<?php echo esc_attr( $card['heading'] ?? '' ); ?>">
              </figure>
            <?php endif; ?>
            <div class="mss-why__card-body">
              <h3 class="mss-why__card-heading"><?php echo esc_html( $card['heading'] ?? '' ); ?></h3>
              <p class="mss-why__card-text"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="mss-testimonial" aria-labelledby="mss-testimonial-heading">
    <div class="mss-testimonial__container">
      <div class="mss-testimonial__left">
        <h2 class="mss-testimonial__heading" id="mss-testimonial-heading"><?php echo esc_html( $testimonial_heading ); ?></h2>
        <p class="mss-testimonial__subtext"><?php echo esc_html( $testimonial_subtext ); ?></p>
      </div>
      
      <div class="mss-testimonial__right">
        <figure class="mss-testimonial__stars" aria-label="5 out of 5 stars">
          <span aria-hidden="true">★★★★★</span>
        </figure>
        <blockquote class="mss-testimonial__quote">
          <p>"<?php echo esc_html( $testimonial_quote ); ?>"</p>
        </blockquote>
        <figcaption class="mss-testimonial__attribution">
          <?php if ( ! empty( $testimonial_avatar_url ) ) : ?>
            <img src="<?php echo esc_url( $testimonial_avatar_url ); ?>" alt="<?php echo esc_attr( $testimonial_name ); ?>" class="mss-testimonial__avatar">
          <?php endif; ?>
          <div>
            <strong class="mss-testimonial__name"><?php echo esc_html( $testimonial_name ); ?></strong>
            <span class="mss-testimonial__role"><?php echo esc_html( $testimonial_role ); ?></span>
          </div>
        </figcaption>
      </div>
    </div>
    <div class="mss-testimonial__dots" aria-label="Testimonial navigation">
      <button class="mss-testimonial__dot mss-testimonial__dot--active" aria-label="Testimonial 1"></button>
      <button class="mss-testimonial__dot" aria-label="Testimonial 2"></button>
      <button class="mss-testimonial__dot" aria-label="Testimonial 3"></button>
    </div>
  </section>

  <!-- 5 Signs Section -->
  <section class="mss-signs" aria-labelledby="mss-signs-heading">
    <figure class="mss-signs__bg" aria-hidden="true">
      <img src="<?php echo esc_url( ! empty( $signs_bg_url ) ? $signs_bg_url : $theme_uri . '/blocks/services/assets/images/signs-bg.jpg' ); ?>" alt="">
    </figure>
    <div class="mss-signs__overlay" aria-hidden="true"></div>
    <div class="mss-signs__container">
      <div class="mss-signs__left">
        <h2 class="mss-signs__heading" id="mss-signs-heading">
          <span class="mss-signs__heading--accent"><?php echo esc_html( $signs_heading_accent ); ?></span>
          <?php echo esc_html( $signs_heading ); ?>
        </h2>
        <p class="mss-signs__intro"><?php echo esc_html( $signs_intro ); ?></p>
        <ul class="mss-signs__list">
          <?php foreach ( $signs_list as $sign ) : ?>
            <li><?php echo esc_html( $sign ); ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
      <?php if ( ! empty( $signs_image_url ) ) : ?>
        <figure class="mss-signs__image">
          <img src="<?php echo esc_url( $signs_image_url ); ?>" alt="RZR side-by-side vehicle on desert terrain">
        </figure>
      <?php endif; ?>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="mss-faq" aria-labelledby="mss-faq-heading">
    <div class="mss-faq__container">
      <h2 class="mss-faq__heading" id="mss-faq-heading"><?php echo esc_html( $faq_heading ); ?></h2>
      
      <dl class="mss-faq__list">
        <?php foreach ( $faq_items as $index => $item ) : ?>
          <div class="mss-faq__item">
            <dt class="mss-faq__question">
              <button class="mss-faq__toggle" aria-expanded="<?php echo 0 === $index ? 'true' : 'false'; ?>" aria-controls="faq-<?php echo esc_attr( $index ); ?>">
                <?php echo esc_html( $item['question'] ?? '' ); ?>
                <span class="mss-faq__icon" aria-hidden="true"><?php echo 0 === $index ? '−' : '+'; ?></span>
              </button>
            </dt>
            <dd class="mss-faq__answer<?php echo 0 === $index ? '' : ' mss-faq__answer--hidden'; ?>" id="faq-<?php echo esc_attr( $index ); ?>">
              <?php echo esc_html( $item['answer'] ?? '' ); ?>
            </dd>
          </div>
        <?php endforeach; ?>
      </dl>
    </div>
  </section>

  <!-- Bottom CTA Section -->
  <section class="mss-bottom-cta" aria-labelledby="mss-bottom-cta-heading">
    <div class="mss-bottom-cta__container">
      <h2 class="mss-bottom-cta__heading" id="mss-bottom-cta-heading"><?php echo esc_html( $bottom_cta_heading ); ?></h2>
      <p class="mss-bottom-cta__subtext"><?php echo esc_html( $bottom_cta_subtext ); ?></p>
      <div class="mss-bottom-cta__actions">
        <a href="<?php echo esc_url( $bottom_cta_call_button_url ); ?>" class="mss-bottom-cta__btn mss-bottom-cta__btn--outline"><?php echo esc_html( $bottom_cta_call_button_text ); ?></a>
        <a href="<?php echo esc_url( $bottom_cta_schedule_button_url ); ?>" class="mss-bottom-cta__btn mss-bottom-cta__btn--solid"><?php echo esc_html( $bottom_cta_schedule_button_text ); ?></a>
      </div>
    </div>
  </section>
</div>

<script>
/* FAQ accordion toggle */
document.querySelectorAll('.mss-faq__toggle').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    var answerId = this.getAttribute('aria-controls');
    var answer = document.getElementById(answerId);
    this.setAttribute('aria-expanded', String(!expanded));
    answer.classList.toggle('mss-faq__answer--hidden', expanded);
    this.querySelector('.mss-faq__icon').textContent = expanded ? '+' : '−';
  });
});

/* Mobile nav toggle */
var navToggle = document.querySelector('.mss-header__mobile-toggle');
var navList = document.querySelector('.mss-header__nav');
if (navToggle && navList) {
  navToggle.addEventListener('click', function() {
    var open = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!open));
    navList.classList.toggle('mss-header__nav--open', !open);
  });
}
</script>
