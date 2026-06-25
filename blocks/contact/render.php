<?php
/**
 * Contact Page Block - server-side render.
 *
 * @package MBNTheme
 * @var array    $attributes Block attributes from block.json.
 * @var string   $content    Inner blocks content (unused).
 * @var WP_Block $block      Block instance.
 */

$theme_uri   = get_template_directory_uri();
$assets_path = $theme_uri . '/blocks/contact/assets/images';

// Hero
$hero_eyebrow        = isset( $attributes['heroEyebrow'] ) ? $attributes['heroEyebrow'] : '';
$hero_heading        = isset( $attributes['heroHeading'] ) ? $attributes['heroHeading'] : '';
$hero_bg_photo_url   = isset( $attributes['heroBgPhotoUrl'] ) && ! empty( $attributes['heroBgPhotoUrl'] )
	? $attributes['heroBgPhotoUrl']
	: $assets_path . '/hero-bg-photo.jpg';
$hero_bg_texture_url = isset( $attributes['heroBgTextureUrl'] ) && ! empty( $attributes['heroBgTextureUrl'] )
	? $attributes['heroBgTextureUrl']
	: $assets_path . '/hero-bg-texture.jpg';
$hero_divider_url    = isset( $attributes['heroDividerUrl'] ) && ! empty( $attributes['heroDividerUrl'] )
	? $attributes['heroDividerUrl']
	: $assets_path . '/hero-divider-line.svg';
$hero_buttons        = isset( $attributes['heroButtons'] ) ? $attributes['heroButtons'] : array();

// Contact Info
$contact_mascot_url     = isset( $attributes['contactMascotUrl'] ) && ! empty( $attributes['contactMascotUrl'] )
	? $attributes['contactMascotUrl']
	: $assets_path . '/contact-mascot.png';
$contact_eyebrow        = isset( $attributes['contactEyebrow'] ) ? $attributes['contactEyebrow'] : '';
$contact_heading        = isset( $attributes['contactHeading'] ) ? $attributes['contactHeading'] : '';
$contact_heading_accent = isset( $attributes['contactHeadingAccent'] ) ? $attributes['contactHeadingAccent'] : '';
$contact_subheading     = isset( $attributes['contactSubheading'] ) ? $attributes['contactSubheading'] : '';
$contact_divider_url    = isset( $attributes['contactDividerUrl'] ) && ! empty( $attributes['contactDividerUrl'] )
	? $attributes['contactDividerUrl']
	: $assets_path . '/contact-divider-line.svg';
$contact_details        = isset( $attributes['contactDetails'] ) ? $attributes['contactDetails'] : array();


// Form
$form_name_label          = isset( $attributes['formNameLabel'] ) ? $attributes['formNameLabel'] : 'Name';
$form_email_label         = isset( $attributes['formEmailLabel'] ) ? $attributes['formEmailLabel'] : 'Email';
$form_message_label       = isset( $attributes['formMessageLabel'] ) ? $attributes['formMessageLabel'] : 'Message';
$form_message_placeholder = isset( $attributes['formMessagePlaceholder'] ) ? $attributes['formMessagePlaceholder'] : '';
$form_checkbox_label      = isset( $attributes['formCheckboxLabel'] ) ? $attributes['formCheckboxLabel'] : '';
$form_submit_label        = isset( $attributes['formSubmitLabel'] ) ? $attributes['formSubmitLabel'] : 'Submit';
// Form
$gravity_form_shortcode = isset( $attributes['gravityFormShortcode'] ) ? $attributes['gravityFormShortcode'] : '';

// Testimonial
$testimonial_bg_url         = isset( $attributes['testimonialBgUrl'] ) && ! empty( $attributes['testimonialBgUrl'] )
	? $attributes['testimonialBgUrl']
	: $assets_path . '/cta-bg-texture.png';
$testimonial_heading        = isset( $attributes['testimonialHeading'] ) ? $attributes['testimonialHeading'] : '';
$testimonial_description    = isset( $attributes['testimonialDescription'] ) ? $attributes['testimonialDescription'] : '';
$testimonials               = isset( $attributes['testimonials'] ) ? $attributes['testimonials'] : array();
$testimonial_arrow_prev_url = isset( $attributes['testimonialArrowPrevUrl'] ) && ! empty( $attributes['testimonialArrowPrevUrl'] )
	? $attributes['testimonialArrowPrevUrl']
	: $assets_path . '/icon-arrow-back.svg';
$testimonial_arrow_next_url = isset( $attributes['testimonialArrowNextUrl'] ) && ! empty( $attributes['testimonialArrowNextUrl'] )
	? $attributes['testimonialArrowNextUrl']
	: $assets_path . '/icon-arrow-forward.svg';

// CTA
$cta_bg_photo_url   = isset( $attributes['ctaBgPhotoUrl'] ) && ! empty( $attributes['ctaBgPhotoUrl'] )
	? $attributes['ctaBgPhotoUrl']
	: $assets_path . '/cta-bg-photo.jpg';
$cta_bg_texture_url = isset( $attributes['ctaBgTextureUrl'] ) && ! empty( $attributes['ctaBgTextureUrl'] )
	? $attributes['ctaBgTextureUrl']
	: $assets_path . '/cta-bg-texture.jpg';
$cta_heading        = isset( $attributes['ctaHeading'] ) ? $attributes['ctaHeading'] : '';
$cta_divider_url    = isset( $attributes['ctaDividerUrl'] ) && ! empty( $attributes['ctaDividerUrl'] )
	? $attributes['ctaDividerUrl']
	: $assets_path . '/cta-divider-line.png';
$cta_body           = isset( $attributes['ctaBody'] ) ? $attributes['ctaBody'] : '';
$cta_buttons        = isset( $attributes['ctaButtons'] ) ? $attributes['ctaButtons'] : array();

$wrapper_attributes = get_block_wrapper_attributes(
  array(
	  'class' => 'mbn-contact-page',
  )
);

// Enqueue block stylesheet.
wp_enqueue_style(
  'mbn-contact-block',
  $theme_uri . '/blocks/contact/style.css',
  array(),
  filemtime( get_theme_file_path( 'blocks/contact/style.css' ) )
);
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<!-- ============================================================
	SECTION 1 — PAGE HERO
	============================================================ -->
	<section class="section__hero" aria-labelledby="section__hero-heading">
		<figure class="section__hero-bg" aria-hidden="true">
			<img
				class="section__hero-bg-photo"
				src="<?php echo esc_url( $hero_bg_photo_url ); ?>"
				alt=""
			/>
			<img
				class="section__hero-bg-texture"
				src="<?php echo esc_url( $hero_bg_texture_url ); ?>"
				alt=""
			/>
		</figure>
		<div class="section__hero-gradient" aria-hidden="true"></div>

		<div class="section__hero-inner">
			<!-- Bottom row: headline left + buttons right -->
			<div class="section__hero-content-row">
				<div class="section__hero-text">
					<?php if ( ! empty( $hero_eyebrow ) ) : ?>
						<p class="section__hero-eyebrow"><?php echo esc_html( $hero_eyebrow ); ?></p>
					<?php endif; ?>
					<?php if ( ! empty( $hero_heading ) ) : ?>
						<h1 class="section__hero-heading" id="section__hero-heading">
							<?php echo wp_kses_post( $hero_heading ); ?>
						</h1>
					<?php endif; ?>
				</div>

				<?php if ( ! empty( $hero_buttons ) ) : ?>
					<nav class="section__hero-actions" aria-label="Quick contact actions">
						<?php foreach ( $hero_buttons as $button ) : ?>
							<a
								href="<?php echo esc_url( $button['url'] ); ?>"
								class="section__hero-btn section__hero-btn--<?php echo esc_attr( $button['style'] ); ?>"
							><?php echo esc_html( $button['label'] ); ?></a>
						<?php endforeach; ?>
					</nav>
				<?php endif; ?>
			</div>

			<!-- Decorative divider line -->
			<figure class="section__hero-divider" aria-hidden="true">
				<img src="<?php echo esc_url( $hero_divider_url ); ?>" alt="" />
			</figure>
		</div>
	</section>

	<!-- ============================================================
	SECTION 2 — CONTACT FORM + INFO
	============================================================ -->
	<section class="section__form-section" aria-labelledby="section__form-heading">
		<div class="section__form-inner">
			<!-- ── Left column — info ── -->
			<div class="section__info">
				<!-- Mascot + heading block -->
				<div class="section__info-top">
					<figure class="section__info-mascot">
						<img
							src="<?php echo esc_url( $contact_mascot_url ); ?>"
							alt="DA Motorsports skull mascot illustration"
							loading="lazy"
						/>
					</figure>

					<div class="section__info-heading-block">
						<?php if ( ! empty( $contact_eyebrow ) ) : ?>
							<p class="section__info-eyebrow"><?php echo esc_html( $contact_eyebrow ); ?></p>
						<?php endif; ?>
						<?php if ( ! empty( $contact_heading ) ) : ?>
							<h2 class="section__info-heading" id="section__form-heading">
								<?php echo esc_html( $contact_heading ); ?>
								<?php if ( ! empty( $contact_heading_accent ) ) : ?>
									<span class="section__info-heading-accent"><?php echo esc_html( $contact_heading_accent ); ?></span>
								<?php endif; ?>
							</h2>
						<?php endif; ?>
						<?php if ( ! empty( $contact_subheading ) ) : ?>
							<p class="section__info-subheading">
								<?php echo esc_html( $contact_subheading ); ?>
							</p>
						<?php endif; ?>
						<figure class="section__info-divider" aria-hidden="true">
							<img src="<?php echo esc_url( $contact_divider_url ); ?>" alt="" />
						</figure>
					</div>
				</div>

				<!-- Contact details -->
				<?php if ( ! empty( $contact_details ) ) : ?>
					<dl class="section__details">
						<?php foreach ( $contact_details as $detail ) : ?>
							<div class="section__details-row">
								<dt class="section__details-label"><?php echo esc_html( $detail['label'] ); ?></dt>
								<dd class="section__details-value<?php echo ! empty( $detail['isAccent'] ) ? ' section__details-value--accent' : ''; ?>">
									<?php if ( ! empty( $detail['isLink'] ) && ! empty( $detail['linkUrl'] ) ) : ?>
										<a href="<?php echo esc_url( $detail['linkUrl'] ); ?>"><?php echo esc_html( $detail['value'] ); ?></a>
									<?php else : ?>
										<?php echo esc_html( $detail['value'] ); ?>
									<?php endif; ?>
								</dd>
							</div>
						<?php endforeach; ?>
					</dl>
				<?php endif; ?>
			</div>

			<!-- ── Right column — form ── -->
			<div class="section__form-col">                
                <div class="section__footer-form-row">
                    <?php echo do_shortcode( $gravity_form_shortcode ); ?> 
                </div>
			</div>
		</div>
	</section>

	<!-- ============================================================
	SECTION 3 — TESTIMONIAL / RIDER FEEDBACK
	============================================================ -->
	<section class="section__testimonial" aria-labelledby="section__testimonial-heading">
		<figure class="section__testimonial-bg" aria-hidden="true">
			<img src="<?php echo esc_url( $testimonial_bg_url ); ?>" alt="" />
		</figure>

		<div class="section__testimonial-inner">
			<!-- Left -->
			<div class="section__testimonial-left">
				<?php if ( ! empty( $testimonial_heading ) ) : ?>
					<h2 class="section__testimonial-heading" id="section__testimonial-heading">
						<?php echo esc_html( $testimonial_heading ); ?>
					</h2>
				<?php endif; ?>
				<?php if ( ! empty( $testimonial_description ) ) : ?>
					<p class="section__testimonial-desc">
						<?php echo esc_html( $testimonial_description ); ?>
					</p>
				<?php endif; ?>
			</div>

			<!-- Right -->
			<div class="section__testimonial-right">
				<?php
				$testimonial_query = new WP_Query(
				  array(
					  'post_type'      => 'testimonials',
					  'posts_per_page' => -1,
					  'post_status'    => 'publish',
					  'orderby'        => 'date',
					  'order'          => 'DESC',
				  )
				);

				if ( $testimonial_query->have_posts() ) :
                  ?>
          		<div class="section__testimonial-wrapper--inner">
					<!-- Testimonial Slider -->
					<div class="section__testimonial-slider">
						<?php
						$slide_index = 0;
						while ( $testimonial_query->have_posts() ) :
							$testimonial_query->the_post();
							$client_name     = get_field( 'client_name' );
							$client_location = get_field( 'client_position_location' );
							$avatar_url      = get_the_post_thumbnail_url( get_the_ID(), 'thumbnail' );
                          if ( ! $avatar_url ) {
                              $avatar_url = '';
                          }
                          ?>
							<article
								class="section__testimonial-slide<?php echo 0 === $slide_index ? ' section__testimonial-slide--active' : ''; ?>"
								aria-label="Review by <?php echo esc_attr( $client_name ); ?>"
							>
								<div class="section__review-card">
									<figure class="section__review-stars" aria-label="5 out of 5 stars">
										<img src="<?php echo esc_url( $assets_path ); ?>/icon-stars-rating.svg" alt="5 stars" />
									</figure>

									<blockquote class="section__review-quote">
										<p><?php echo wp_kses_post( get_the_content() ); ?></p>
									</blockquote>

									<figcaption class="section__review-attribution">    
										<?php if ( ! empty( $avatar_url ) ) : ?>
											<img src="<?php echo esc_url( $avatar_url ); ?>" alt="<?php echo esc_attr( $client_name ); ?>" class="section__testimonial-avatar">
										<?php endif; ?>
										<div>
											<strong class="section__review-name">
												<?php echo esc_html( $client_name ); ?>
											</strong>
											<span class="section__review-role">
												<?php echo esc_html( $client_location ); ?>
											</span>
										</div>
									</figcaption>
								</div>
							</article>
							<?php
							++$slide_index;
						endwhile;
						wp_reset_postdata();
						?>
					</div>
					
					<span class="vertical-left"></span>
					<span class="vertical-right"></span>
				</div>

					<!-- Slider controls -->
					<div class="section__testimonial-controls" aria-label="Testimonial navigation">
						<div class="section__testimonial-dots" role="tablist" aria-label="Testimonial pages">
							<!-- Dots will be dynamically generated by JavaScript -->
						</div>
						<div class="section__testimonial-arrows">
							<button
								class="section__testimonial-arrow section__testimonial-prev"
								aria-label="Previous review"
							>
                                <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/contact/assets/images/icon-arrow-back.svg" alt="">
							</button>
							<button
								class="section__testimonial-arrow section__testimonial-next"
								aria-label="Next review"
							>
                                <img src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/contact/assets/images/icon-arrow-forward.svg" alt="">
							</button>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<!-- ============================================================
	SECTION 4 — CTA
	============================================================ -->
	<section class="section__cta" aria-labelledby="section__cta-heading">
		<figure class="section__cta-bg" aria-hidden="true">
			<img
				class="section__cta-bg-photo"
				src="<?php echo esc_url( $cta_bg_photo_url ); ?>"
				alt=""
			/>
			<img
				class="section__cta-bg-texture"
				src="<?php echo esc_url( $cta_bg_texture_url ); ?>"
				alt=""
			/>
		</figure>
		<div class="section__cta-overlay" aria-hidden="true"></div>

		<div class="section__cta-inner">
			<div class="section__cta-card">
				<?php if ( ! empty( $cta_heading ) ) : ?>
					<h2 class="section__cta-heading" id="section__cta-heading">
						<?php echo esc_html( $cta_heading ); ?>
					</h2>
				<?php endif; ?>

				<figure class="section__cta-divider" aria-hidden="true">
					<img src="<?php echo esc_url( $cta_divider_url ); ?>" alt="" />
				</figure>

				<?php if ( ! empty( $cta_body ) ) : ?>
					<p class="section__cta-body">
						<?php echo esc_html( $cta_body ); ?>
					</p>
				<?php endif; ?>

				<?php if ( ! empty( $cta_buttons ) ) : ?>
					<div class="section__cta-actions">
						<?php foreach ( $cta_buttons as $button ) : ?> 
							<a
								href="<?php echo esc_url( $button['url'] ); ?>"
								class="section__cta-btn section__cta-btn--<?php echo esc_attr( $button['style'] ); ?>"
							>
								<?php echo esc_html( $button['label'] ); ?> 
							</a>
							
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</section>
</div>
