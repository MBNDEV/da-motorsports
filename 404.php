<?php
/**
 * 404 template file.
 *
 * @package CustomTheme
 */

get_header();
?>
<main id="main" class="site-main page-404">
      <main class="section__main">
        <section class="section__hero" aria-label="Introduction">
          <div class="section__hero-bg" aria-hidden="true">
            <img src="/wp-content/uploads/2026/06/hero-bg-rider-1.jpg" alt="" />
          </div>
          <div class="section__hero-content">
            <h1 class="section__hero-heading">Oops!</h1>
            <div class="section__hero-footer">
              <p class="section__hero-text">It seems you've hit a 404 error. Please return to the homepage or use the navigation menu.</p>
            <div class="section__button-wrap">
              <a href="/" class="section__button">Back to Homepage
                <span class="vertical-left"></span>
                <span class="vertical-right"></span>
            </a>
            </div>
            </div>
          </div>
        </section>
      </main>

</main>
<?php
get_footer();
