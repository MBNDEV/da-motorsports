<?php
/**
 * Thank You Hero Block — server-side render.
 *
 * @package MBNTheme
 * @var array    $attributes Block attributes from block.json.
 * @var string   $content    Inner blocks content (unused).
 * @var WP_Block $block      Block instance.
 */

$theme_uri = get_template_directory_uri();

// Extract and sanitize attributes
$heading              = isset( $attributes['heading'] ) ? $attributes['heading'] : 'Thank You';
$message              = isset( $attributes['message'] ) ? $attributes['message'] : 'Thank you for reaching out to us. We will get back to you as soon as possible.';
$button_text          = isset( $attributes['buttonText'] ) ? $attributes['buttonText'] : 'Back to Homepage';
$button_url           = isset( $attributes['buttonUrl'] ) ? $attributes['buttonUrl'] : '/';
$background_image_url = ! empty( $attributes['backgroundImageUrl'] ) ? $attributes['backgroundImageUrl'] : '';

$wrapper_attributes = get_block_wrapper_attributes(
  array(
      'class'      => 'homepage__hero',
      'aria-label' => 'Thank You',
  )
);
?>
<div class="homepage">
    <main class="homepage__main">
        <section <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
            <?php if ( '' !== $background_image_url ) : ?>
                <div class="homepage__hero-bg" aria-hidden="true">
                    <img src="<?php echo esc_url( $background_image_url ); ?>" alt="" />
                </div>
            <?php endif; ?>
            <div class="homepage__hero-content">
                <h1 class="homepage__hero-heading"><?php echo esc_html( $heading ); ?></h1>
                <div class="homepage__hero-footer">
                    <p class="homepage__hero-text">
                        <?php echo esc_html( $message ); ?>
                    </p>
                    <a href="<?php echo esc_url( $button_url ); ?>" class="homepage__button">
                        <?php echo esc_html( $button_text ); ?>
                    </a>
                </div>
            </div>
        </section>
    </main>
</div>
