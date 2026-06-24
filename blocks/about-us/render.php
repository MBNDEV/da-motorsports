<?php
/**
 * About Us Page — server-side render.
 *
 * @package MBNTheme
 * @var array    $attributes Block attributes from block.json.
 * @var string   $content    Inner blocks content (unused).
 * @var WP_Block $block      Block instance.
 */

$theme_uri   = get_template_directory_uri();
$assets_path = $theme_uri . '/blocks/about-us/assets/images';

// Hero
$hero_eyebrow        = isset( $attributes['heroEyebrow'] ) ? $attributes['heroEyebrow'] : '';
$hero_heading        = isset( $attributes['heroHeading'] ) ? $attributes['heroHeading'] : '';
$hero_bg_rider_url   = isset( $attributes['heroBgRiderUrl'] ) && ! empty( $attributes['heroBgRiderUrl'] )
	? $attributes['heroBgRiderUrl']
	: $assets_path . '/hero-bg-rider.jpg';
$hero_bg_texture_url = isset( $attributes['heroBgTextureUrl'] ) && ! empty( $attributes['heroBgTextureUrl'] )
	? $attributes['heroBgTextureUrl']
	: $assets_path . '/hero-bg-texture.jpg';
$hero_divider_url    = isset( $attributes['heroDividerUrl'] ) && ! empty( $attributes['heroDividerUrl'] )
	? $attributes['heroDividerUrl']
	: $assets_path . '/hero-divider-line.png';

// About Content
$about_bg_url     = isset( $attributes['aboutBgUrl'] ) && ! empty( $attributes['aboutBgUrl'] )
	? $attributes['aboutBgUrl']
	: $assets_path . '/about-section-bg.jpg';
$about_heading    = isset( $attributes['aboutHeading'] ) ? $attributes['aboutHeading'] : '';
$about_paragraphs = isset( $attributes['aboutParagraphs'] ) ? $attributes['aboutParagraphs'] : array();

// Photos
$photo_rider_url    = isset( $attributes['photoRiderUrl'] ) && ! empty( $attributes['photoRiderUrl'] )
	? $attributes['photoRiderUrl']
	: $assets_path . '/about-photo-rider.jpg';
$photo_rider_alt    = isset( $attributes['photoRiderAlt'] ) ? $attributes['photoRiderAlt'] : '';
$photo_portrait_url = isset( $attributes['photoPortraitUrl'] ) && ! empty( $attributes['photoPortraitUrl'] )
	? $attributes['photoPortraitUrl']
	: $assets_path . '/about-photo-portrait.jpg';
$photo_portrait_alt = isset( $attributes['photoPortraitAlt'] ) ? $attributes['photoPortraitAlt'] : '';
$photo_desert_url   = isset( $attributes['photoDesertUrl'] ) && ! empty( $attributes['photoDesertUrl'] )
	? $attributes['photoDesertUrl']
	: $assets_path . '/about-photo-desert.jpg';
$photo_desert_alt   = isset( $attributes['photoDesertAlt'] ) ? $attributes['photoDesertAlt'] : '';

// Contact
$contact_bg_url       = isset( $attributes['contactBgUrl'] ) && ! empty( $attributes['contactBgUrl'] )
	? $attributes['contactBgUrl']
	: $assets_path . '/contact-bg-texture.jpg';
$contact_heading      = isset( $attributes['contactHeading'] ) ? $attributes['contactHeading'] : '';
$contact_details      = isset( $attributes['contactDetails'] ) ? $attributes['contactDetails'] : array();
$contact_mascot_url   = isset( $attributes['contactMascotUrl'] ) && ! empty( $attributes['contactMascotUrl'] )
	? $attributes['contactMascotUrl']
	: $assets_path . '/contact-mascot.png';
$contact_tbt_logo_url = isset( $attributes['contactTbtLogoUrl'] ) && ! empty( $attributes['contactTbtLogoUrl'] )
	? $attributes['contactTbtLogoUrl']
	: $assets_path . '/contact-tbt-logo.png';

$wrapper_attributes = get_block_wrapper_attributes(
  array(
	  'class' => 'mbn-about-us-page',
  )
);

// Enqueue block stylesheet.
wp_enqueue_style(
  'mbn-about-us-block',
  $theme_uri . '/blocks/about-us/style.css',
  array(),
  filemtime( get_theme_file_path( 'blocks/about-us/style.css' ) )
);
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<!-- ============================================================
	SECTION 1 — HERO
	============================================================ -->
	<section
		class="section__about-hero"
		aria-labelledby="section__about-hero-heading"
	>
		<!-- Background layers -->
		<figure class="section__about-hero-bg" aria-hidden="true">
			<img
				class="section__about-hero-bg-rider"
				src="<?php echo esc_url( $hero_bg_rider_url ); ?>"
				alt=""
			/>
			<img
				class="section__about-hero-bg-texture"
				src="<?php echo esc_url( $hero_bg_texture_url ); ?>"
				alt=""
			/>
		</figure>
		<div class="section__about-hero-gradient" aria-hidden="true"></div>

		<!-- Content -->
		<div class="section__about-hero-content">
			<div class="section__about-hero-text">
				<?php if ( ! empty( $hero_eyebrow ) ) : ?>
					<p class="section__about-hero-eyebrow"><?php echo esc_html( $hero_eyebrow ); ?></p>
				<?php endif; ?>
				<?php if ( ! empty( $hero_heading ) ) : ?>
					<h1
						class="section__about-hero-heading"
						id="section__about-hero-heading"
					>
						<?php echo wp_kses_post( $hero_heading ); ?>
					</h1>
				<?php endif; ?>
			</div>

			<!-- Decorative divider line (red + white) -->
			<figure class="section__about-hero-divider" aria-hidden="true">
				<img src="<?php echo esc_url( $hero_divider_url ); ?>" alt="" />
			</figure>
		</div>
	</section>

	<!-- ============================================================
	SECTION 2 — ABOUT CONTENT
	============================================================ -->
	<section
		class="section__about-content"
		aria-labelledby="section__about-content-heading"
	>
		<!-- Subtle texture overlay -->
		<figure class="section__about-content-bg" aria-hidden="true">
			<img src="<?php echo esc_url( $about_bg_url ); ?>" alt="" />
		</figure>

		<div class="section__about-content-inner">
			<!-- Left — text -->
			<div class="section__about-content-text">
				<?php if ( ! empty( $about_heading ) ) : ?>
					<h2
						class="section__about-content-heading"
						id="section__about-content-heading"
					>
						<?php echo wp_kses_post( $about_heading ); ?>
					</h2>
				<?php endif; ?>
				<?php if ( ! empty( $about_paragraphs ) ) : ?>
					<div class="section__about-content-body">
						<?php foreach ( $about_paragraphs as $paragraph ) : ?>
							<?php if ( ! empty( $paragraph['text'] ) ) : ?>
								<p><?php echo esc_html( $paragraph['text'] ); ?></p>
							<?php endif; ?>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>

			<!-- Right — photos -->
			<div class="section__about-content-photos">
				<!-- Top row: two images side by side -->
				<div class="section__about-content-photos-row">
					<figure
						class="section__about-content-photo section__about-content-photo--rider"
					>
						<img
							src="<?php echo esc_url( $photo_rider_url ); ?>"
							alt="<?php echo esc_attr( $photo_rider_alt ); ?>"
							loading="lazy"
						/>
					</figure>
					<figure
						class="section__about-content-photo section__about-content-photo--portrait"
					>
						<img
							src="<?php echo esc_url( $photo_portrait_url ); ?>"
							alt="<?php echo esc_attr( $photo_portrait_alt ); ?>"
							loading="lazy"
						/>
					</figure>
				</div>

				<!-- Bottom row: wide desert racing photo -->
				<figure
					class="section__about-content-photo section__about-content-photo--desert"
				>
					<img
						src="<?php echo esc_url( $photo_desert_url ); ?>"
						alt="<?php echo esc_attr( $photo_desert_alt ); ?>"
						loading="lazy"
					/>
				</figure>
			</div>
		</div>
	</section>

	<!-- ============================================================
	SECTION 3 — CONTACT CTA
	============================================================ -->
	<section
		class="section__about-contact"
		aria-labelledby="section__about-contact-heading"
	>
		<!-- Dark textured background -->
		<figure class="section__about-contact-bg" aria-hidden="true">
			<img src="<?php echo esc_url( $contact_bg_url ); ?>" alt="" />
		</figure>

		<div class="section__about-contact-inner">
			<!-- Decorative: skull mascot (left) -->
			<figure class="section__about-contact-mascot" aria-hidden="true">
				<img src="<?php echo esc_url( $contact_mascot_url ); ?>" alt="" />
			</figure>

			<!-- Centered content -->
			<div class="section__about-contact-content">
				<?php if ( ! empty( $contact_heading ) ) : ?>
					<h2
						class="section__about-contact-heading"
						id="section__about-contact-heading"
					>
						<?php echo esc_html( $contact_heading ); ?>
					</h2>
				<?php endif; ?>

				<address
					class="section__about-contact-card"
					aria-label="DA Motorsports contact information"
				>
					<dl class="section__about-contact-details">
						<?php foreach ( $contact_details as $detail ) : ?>
							<div class="section__about-contact-row">
								<dt class="section__about-contact-label"><?php echo esc_html( $detail['label'] ); ?></dt>
								<dd class="section__about-contact-value">
									<?php if ( ! empty( $detail['isLink'] ) && ! empty( $detail['linkUrl'] ) ) : ?>
										<a href="<?php echo esc_url( $detail['linkUrl'] ); ?>"><?php echo esc_html( $detail['value'] ); ?></a>
									<?php else : ?>
										<?php echo esc_html( $detail['value'] ); ?>
									<?php endif; ?>
								</dd>
							</div>
						<?php endforeach; ?>
					</dl>
				</address>
			</div>

			<!-- Decorative: TBT Racing logo (right) -->
			<figure
				class="section__about-contact-tbt-logo"
				aria-label="TBT Racing — official partner"
			>
				<img src="<?php echo esc_url( $contact_tbt_logo_url ); ?>" alt="TBT Racing" />
			</figure>
		</div>
	</section>
</div>
