<?php
/**
 * Contact Us Page — server-side render.
 *
 * @package MBNTheme
 * @var array    $attributes Block attributes from block.json.
 * @var string   $content    Inner blocks content (unused).
 * @var WP_Block $block      Block instance.
 */

$theme_uri   = get_template_directory_uri();
$assets_path = $theme_uri . '/blocks/contact-us/assets/images';

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
	: $assets_path . '/hero-divider-line.png';
$hero_buttons        = isset( $attributes['heroButtons'] ) ? $attributes['heroButtons'] : array();

// Contact Info
$contact_mascot_url  = isset( $attributes['contactMascotUrl'] ) && ! empty( $attributes['contactMascotUrl'] )
	? $attributes['contactMascotUrl']
	: $assets_path . '/contact-mascot.png';
$contact_eyebrow     = isset( $attributes['contactEyebrow'] ) ? $attributes['contactEyebrow'] : '';
$contact_heading     = isset( $attributes['contactHeading'] ) ? $attributes['contactHeading'] : '';
$contact_subheading  = isset( $attributes['contactSubheading'] ) ? $attributes['contactSubheading'] : '';
$contact_divider_url = isset( $attributes['contactDividerUrl'] ) && ! empty( $attributes['contactDividerUrl'] )
	? $attributes['contactDividerUrl']
	: $assets_path . '/contact-divider-line.png';
$contact_details     = isset( $attributes['contactDetails'] ) ? $attributes['contactDetails'] : array();

// Form
$form_name_label          = isset( $attributes['formNameLabel'] ) ? $attributes['formNameLabel'] : 'Name';
$form_email_label         = isset( $attributes['formEmailLabel'] ) ? $attributes['formEmailLabel'] : 'Email';
$form_message_label       = isset( $attributes['formMessageLabel'] ) ? $attributes['formMessageLabel'] : 'Message';
$form_message_placeholder = isset( $attributes['formMessagePlaceholder'] ) ? $attributes['formMessagePlaceholder'] : '';
$form_checkbox_label      = isset( $attributes['formCheckboxLabel'] ) ? $attributes['formCheckboxLabel'] : '';
$form_submit_label        = isset( $attributes['formSubmitLabel'] ) ? $attributes['formSubmitLabel'] : 'Submit';

// Testimonial
$testimonial_bg_url         = isset( $attributes['testimonialBgUrl'] ) && ! empty( $attributes['testimonialBgUrl'] )
	? $attributes['testimonialBgUrl']
	: $assets_path . '/testimonial-bg-texture.jpg';
$testimonial_heading        = isset( $attributes['testimonialHeading'] ) ? $attributes['testimonialHeading'] : '';
$testimonial_description    = isset( $attributes['testimonialDescription'] ) ? $attributes['testimonialDescription'] : '';
$testimonials               = isset( $attributes['testimonials'] ) ? $attributes['testimonials'] : array();
$testimonial_arrow_prev_url = isset( $attributes['testimonialArrowPrevUrl'] ) && ! empty( $attributes['testimonialArrowPrevUrl'] )
	? $attributes['testimonialArrowPrevUrl']
	: $assets_path . '/testimonial-arrow-prev.svg';
$testimonial_arrow_next_url = isset( $attributes['testimonialArrowNextUrl'] ) && ! empty( $attributes['testimonialArrowNextUrl'] )
	? $attributes['testimonialArrowNextUrl']
	: $assets_path . '/testimonial-arrow-next.svg';

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
	  'class' => 'mbn-contact-us-page',
  )
);

// Enqueue block stylesheet.
wp_enqueue_style(
  'mbn-contact-us-block',
  $theme_uri . '/blocks/contact-us/style.css',
  array(),
  filemtime( get_theme_file_path( 'blocks/contact-us/style.css' ) )
);
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<!-- ============================================================
	SECTION 1 — PAGE HERO
	============================================================ -->
	<section
		class="section__contact-hero"
		aria-labelledby="section__contact-hero-heading"
	>
		<figure class="section__contact-hero-bg" aria-hidden="true">
			<img
				class="section__contact-hero-bg-photo"
				src="<?php echo esc_url( $hero_bg_photo_url ); ?>"
				alt=""
			/>
			<img
				class="section__contact-hero-bg-texture"
				src="<?php echo esc_url( $hero_bg_texture_url ); ?>"
				alt=""
			/>
		</figure>
		<div class="section__contact-hero-gradient" aria-hidden="true"></div>

		<div class="section__contact-hero-inner">
			<!-- Bottom row: headline left + buttons right -->
			<div class="section__contact-hero-content-row">
				<div class="section__contact-hero-text">
					<?php if ( ! empty( $hero_eyebrow ) ) : ?>
						<p class="section__contact-hero-eyebrow"><?php echo esc_html( $hero_eyebrow ); ?></p>
					<?php endif; ?>
					<?php if ( ! empty( $hero_heading ) ) : ?>
						<h1
							class="section__contact-hero-heading"
							id="section__contact-hero-heading"
						>
							<?php echo wp_kses_post( $hero_heading ); ?>
						</h1>
					<?php endif; ?>
				</div>

				<?php if ( ! empty( $hero_buttons ) ) : ?>
					<nav
						class="section__contact-hero-actions"
						aria-label="Quick contact actions"
					>
						<?php foreach ( $hero_buttons as $button ) : ?>
							<a
								href="<?php echo esc_url( $button['url'] ); ?>"
								class="section__contact-hero-btn section__contact-hero-btn--<?php echo esc_attr( $button['style'] ); ?>"
							><?php echo esc_html( $button['label'] ); ?></a>
						<?php endforeach; ?>
					</nav>
				<?php endif; ?>
			</div>

			<!-- Decorative divider line -->
			<figure class="section__contact-hero-divider" aria-hidden="true">
				<img src="<?php echo esc_url( $hero_divider_url ); ?>" alt="" />
			</figure>
		</div>
	</section>

	<!-- ============================================================
	SECTION 2 — CONTACT FORM + INFO
	============================================================ -->
	<section
		class="section__contact-form-section"
		aria-labelledby="section__contact-form-heading"
	>
		<div class="section__contact-form-inner">
			<!-- ── Left column — info ── -->
			<div class="section__contact-info">
				<!-- Mascot + heading block -->
				<div class="section__contact-info-top">
					<figure class="section__contact-info-mascot">
						<img
							src="<?php echo esc_url( $contact_mascot_url ); ?>"
							alt="DA Motorsports skull mascot illustration"
							loading="lazy"
						/>
					</figure>

					<div class="section__contact-info-heading-block">
						<?php if ( ! empty( $contact_eyebrow ) ) : ?>
							<p class="section__contact-info-eyebrow"><?php echo esc_html( $contact_eyebrow ); ?></p>
						<?php endif; ?>
						<?php if ( ! empty( $contact_heading ) ) : ?>
							<h2
								class="section__contact-info-heading"
								id="section__contact-form-heading"
							>
								<?php echo wp_kses_post( $contact_heading ); ?>
							</h2>
						<?php endif; ?>
						<?php if ( ! empty( $contact_subheading ) ) : ?>
							<p class="section__contact-info-subheading">
								<?php echo esc_html( $contact_subheading ); ?>
							</p>
						<?php endif; ?>
						<figure class="section__contact-info-divider" aria-hidden="true">
							<img src="<?php echo esc_url( $contact_divider_url ); ?>" alt="" />
						</figure>
					</div>
				</div>

				<!-- Contact details -->
				<?php if ( ! empty( $contact_details ) ) : ?>
					<dl class="section__contact-details">
						<?php foreach ( $contact_details as $detail ) : ?>
							<div class="section__contact-details-row">
								<dt class="section__contact-details-label"><?php echo esc_html( $detail['label'] ); ?></dt>
								<dd class="section__contact-details-value<?php echo ! empty( $detail['isAccent'] ) ? ' section__contact-details-value--accent' : ''; ?>">
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
			<div class="section__contact-form-col">
				<form
					class="section__contact-form"
					action="#"
					method="post"
					novalidate
					aria-label="Contact DA Motorsports"
				>
					<div class="section__contact-form-field">
						<label class="section__contact-form-label" for="contact-name">
							<?php echo esc_html( $form_name_label ); ?>
						</label>
						<input
							class="section__contact-form-input"
							type="text"
							id="contact-name"
							name="name"
							autocomplete="name"
							required
						/>
					</div>

					<div class="section__contact-form-field">
						<label class="section__contact-form-label" for="contact-email">
							<?php echo esc_html( $form_email_label ); ?>
						</label>
						<input
							class="section__contact-form-input"
							type="email"
							id="contact-email"
							name="email"
							autocomplete="email"
							required
						/>
					</div>

					<div class="section__contact-form-field">
						<label class="section__contact-form-label" for="contact-message">
							<?php echo esc_html( $form_message_label ); ?>
						</label>
						<textarea
							class="section__contact-form-textarea"
							id="contact-message"
							name="message"
							rows="4"
							placeholder="<?php echo esc_attr( $form_message_placeholder ); ?>"
						></textarea>
					</div>

					<div class="section__contact-form-checkbox">
						<input
							class="section__contact-form-checkbox-input"
							type="checkbox"
							id="contact-terms"
							name="terms"
							required
						/>
						<label
							class="section__contact-form-checkbox-label"
							for="contact-terms"
						>
							<?php echo esc_html( $form_checkbox_label ); ?>
						</label>
					</div>

					<button type="submit" class="section__contact-form-submit">
						<?php echo esc_html( $form_submit_label ); ?>
					</button>
				</form>
			</div>
		</div>
	</section>

	<!-- ============================================================
	SECTION 3 — TESTIMONIAL / RIDER FEEDBACK
	============================================================ -->
	<section
		class="section__contact-testimonial"
		aria-labelledby="section__contact-testimonial-heading"
	>
		<figure class="section__contact-testimonial-bg" aria-hidden="true">
			<img src="<?php echo esc_url( $testimonial_bg_url ); ?>" alt="" />
		</figure>

		<div class="section__contact-testimonial-inner">
			<!-- Left -->
			<div class="section__contact-testimonial-left">
				<?php if ( ! empty( $testimonial_heading ) ) : ?>
					<h2
						class="section__contact-testimonial-heading"
						id="section__contact-testimonial-heading"
					>
						<?php echo esc_html( $testimonial_heading ); ?>
					</h2>
				<?php endif; ?>
				<?php if ( ! empty( $testimonial_description ) ) : ?>
					<p class="section__contact-testimonial-desc">
						<?php echo esc_html( $testimonial_description ); ?>
					</p>
				<?php endif; ?>
			</div>

			<!-- Right -->
			<div class="section__contact-testimonial-right">
				<?php if ( ! empty( $testimonials ) ) : ?>
					<?php $first_testimonial = $testimonials[0]; ?>
					<!-- Review card -->
					<article
						class="section__contact-review-card"
						aria-label="Review by <?php echo esc_attr( $first_testimonial['name'] ); ?>"
					>
						<?php
						$stars_url = ! empty( $first_testimonial['starsUrl'] )
							? $first_testimonial['starsUrl']
							: $assets_path . '/testimonial-stars.svg';
						?>
						<figure
							class="section__contact-review-stars"
							aria-label="5 out of 5 stars"
						>
							<img src="<?php echo esc_url( $stars_url ); ?>" alt="5 stars" />
						</figure>

						<blockquote class="section__contact-review-quote">
							<p><?php echo esc_html( $first_testimonial['quote'] ); ?></p>
						</blockquote>

						<figcaption class="section__contact-review-attribution">
							<?php
							$avatar_url = ! empty( $first_testimonial['avatarUrl'] )
								? $first_testimonial['avatarUrl']
								: $assets_path . '/testimonial-avatar.jpg';
							?>
							<img
								class="section__contact-review-avatar"
								src="<?php echo esc_url( $avatar_url ); ?>"
								alt="<?php echo esc_attr( $first_testimonial['name'] ); ?>"
								width="48"
								height="48"
								loading="lazy"
							/>
							<div>
								<strong class="section__contact-review-name">
									<?php echo esc_html( $first_testimonial['name'] ); ?>
								</strong>
								<span class="section__contact-review-role">
									<?php echo esc_html( $first_testimonial['role'] ); ?>
								</span>
							</div>
						</figcaption>
					</article>

					<!-- Slider controls -->
					<div
						class="section__contact-testimonial-controls"
						aria-label="Testimonial navigation"
					>
						<div
							class="section__contact-testimonial-dots"
							role="tablist"
							aria-label="Testimonial pages"
						>
							<?php foreach ( $testimonials as $index => $testimonial ) : ?>
								<button
									role="tab"
									aria-selected="<?php echo 0 === $index ? 'true' : 'false'; ?>"
									aria-label="Review <?php echo esc_attr( (string) ( $index + 1 ) ); ?>"
									class="section__contact-testimonial-dot<?php echo 0 === $index ? ' section__contact-testimonial-dot--active' : ''; ?>"
								></button>
							<?php endforeach; ?>
						</div>
						<div class="section__contact-testimonial-arrows">
							<button
								class="section__contact-testimonial-arrow"
								aria-label="Previous review"
							>
								<img src="<?php echo esc_url( $testimonial_arrow_prev_url ); ?>" alt="" />
							</button>
							<button
								class="section__contact-testimonial-arrow"
								aria-label="Next review"
							>
								<img src="<?php echo esc_url( $testimonial_arrow_next_url ); ?>" alt="" />
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
	<section
		class="section__contact-cta"
		aria-labelledby="section__contact-cta-heading"
	>
		<figure class="section__contact-cta-bg" aria-hidden="true">
			<img
				class="section__contact-cta-bg-photo"
				src="<?php echo esc_url( $cta_bg_photo_url ); ?>"
				alt=""
			/>
			<img
				class="section__contact-cta-bg-texture"
				src="<?php echo esc_url( $cta_bg_texture_url ); ?>"
				alt=""
			/>
		</figure>
		<div class="section__contact-cta-overlay" aria-hidden="true"></div>

		<div class="section__contact-cta-inner">
			<div class="section__contact-cta-card">
				<?php if ( ! empty( $cta_heading ) ) : ?>
					<h2
						class="section__contact-cta-heading"
						id="section__contact-cta-heading"
					>
						<?php echo esc_html( $cta_heading ); ?>
					</h2>
				<?php endif; ?>

				<figure class="section__contact-cta-divider" aria-hidden="true">
					<img src="<?php echo esc_url( $cta_divider_url ); ?>" alt="" />
				</figure>

				<?php if ( ! empty( $cta_body ) ) : ?>
					<p class="section__contact-cta-body">
						<?php echo esc_html( $cta_body ); ?>
					</p>
				<?php endif; ?>

				<?php if ( ! empty( $cta_buttons ) ) : ?>
					<div class="section__contact-cta-actions">
						<?php foreach ( $cta_buttons as $button ) : ?>
							<a
								href="<?php echo esc_url( $button['url'] ); ?>"
								class="section__contact-cta-btn section__contact-cta-btn--<?php echo esc_attr( $button['style'] ); ?>"
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
