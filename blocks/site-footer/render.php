<?php
/**
 * Site Footer Block — server-side render.
 *
 * @package MBNTheme
 * @var array    $attributes Block attributes from block.json.
 * @var string   $content    Inner blocks content (unused).
 * @var WP_Block $block      Block instance.
 */

$theme_uri = get_template_directory_uri();

// Extract and sanitize attributes
$logo_image_url         = ! empty( $attributes['logoImageUrl'] ) ? $attributes['logoImageUrl'] : $theme_uri . '/build/blocks/site-footer/assets/images/logo-da-motorsports-footer.png';
$newsletter_text        = isset( $attributes['newsletterText'] ) ? $attributes['newsletterText'] : '';
$gravity_form_shortcode = isset( $attributes['gravityFormShortcode'] ) ? $attributes['gravityFormShortcode'] : '';
$disclaimer_text        = isset( $attributes['disclaimerText'] ) ? $attributes['disclaimerText'] : '';
$company_links          = isset( $attributes['companyLinks'] ) ? $attributes['companyLinks'] : array();
$social_links           = isset( $attributes['socialLinks'] ) ? $attributes['socialLinks'] : array();
$copyright_text         = isset( $attributes['copyrightText'] ) ? $attributes['copyrightText'] : '';
$legal_links            = isset( $attributes['legalLinks'] ) ? $attributes['legalLinks'] : array();

$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => 'section__footer' ) );
?>
<div class="footer">
    <div class="section__footer" <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
        <div class="section__container">
            <div class="section__footer-top">
                <div class="section__footer-brand">
                    <img
                        src="<?php echo esc_url( $logo_image_url ); ?>"
                        alt="DA Motorsports"
                        class="section__footer-logo"
                    />
                    <p class="section__footer-text">
                        <?php echo esc_html( $newsletter_text ); ?>
                    </p>
                    <form class="section__footer-form" action="#" method="post">
                        <div class="section__footer-form-row">
                            <?php echo do_shortcode( $gravity_form_shortcode ); ?>
                            <p class="section__footer-disclaimer">
                                <?php echo esc_html( $disclaimer_text ); ?>
                            </p>
                        </div>
                    </form>
                </div>
                <nav class="section__footer-links" aria-label="Footer navigation"> 
                    <div class="section__footer-column">
                        <h3 class="section__footer-column-title">Company</h3>
                        <ul class="section__footer-link-list">
                            <?php foreach ( $company_links as $footer_link ) : ?>
                                <li><a href="<?php echo esc_url( $footer_link['url'] ); ?>" target="_blank"><?php echo esc_html( $footer_link['label'] ); ?></a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <div class="section__footer-column">
                        <h3 class="section__footer-column-title">Support</h3>
                        <ul class="section__footer-social-list">
                            <?php
                            foreach ( $social_links as $footer_link ) :
                                $icon_file = 'icon-' . $footer_link['icon'] . '.svg';
                              ?>
                            <li>
                                <a href="<?php echo esc_url( $footer_link['url'] ); ?>" target="_blank">
                                    <img src="<?php echo esc_url( $theme_uri . '/build/blocks/site-footer/assets/images/' . $icon_file ); ?>" alt="" />
                                    <?php echo esc_html( $footer_link['label'] ); ?>
                                    </a>
                                </li>
                                <?php endforeach; ?>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="section__footer-bottom">
                <img
                    src="<?php echo esc_url( $theme_uri ); ?>/build/blocks/site-footer/assets/images/divider-line-footer.svg"
                    alt=""
                    class="section__footer-divider"
                />
                <div class="section__footer-credits">
                    <p><?php echo esc_html( $copyright_text ); ?></p>
                    <ul class="section__footer-legal-links">
                        <?php foreach ( $legal_links as $footer_link ) : ?>
                            <li><a href="<?php echo esc_url( $footer_link['url'] ); ?>"><?php echo esc_html( $footer_link['label'] ); ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
