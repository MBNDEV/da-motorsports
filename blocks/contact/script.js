/**
 * Contact Page Testimonial Slider - Frontend Interactivity
 */
document.addEventListener("DOMContentLoaded", function () {
  /**
   * Testimonial Slider
   */
  (function initTestimonialSlider() {
    const sliderContainer = document.querySelector(
      ".section__testimonial-slider",
    );
    if (!sliderContainer) {
      return;
    }

    const slides = sliderContainer.querySelectorAll(
      ".section__testimonial-slide",
    );
    if (slides.length === 0) {
      return;
    }

    // Hide all slides initially except the first
    slides.forEach(function (slide, index) {
      if (index === 0) {
        slide.classList.add("section__testimonial-slide--active");
      } else {
        slide.classList.remove("section__testimonial-slide--active");
      }
    });

    const dotsContainer = document.querySelector(".section__testimonial-dots");
    const prevButton = document.querySelector(".section__testimonial-prev");
    const nextButton = document.querySelector(".section__testimonial-next");

    let currentSlide = 0;

    // Create dot indicators
    function createDots() {
      if (!dotsContainer) {
        return;
      }

      dotsContainer.innerHTML = "";

      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("button");
        dot.classList.add("section__testimonial-dot");
        dot.setAttribute("type", "button");
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
        dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
        dot.dataset.slide = i;

        if (i === 0) {
          dot.classList.add("section__testimonial-dot--active");
        }

        dot.addEventListener("click", function () {
          goToSlide(i);
        });

        dotsContainer.appendChild(dot);
      }
    }

    // Update active states with sliding animation
    function updateSlide(index, direction) {
      const previousSlide = currentSlide;

      // Remove all animation classes from all slides
      slides.forEach(function (slide) {
        slide.classList.remove(
          "section__testimonial-slide--slide-left",
          "section__testimonial-slide--slide-right",
          "section__testimonial-slide--slide-out-left",
          "section__testimonial-slide--slide-out-right",
        );
      });

      // Animate out the current slide
      if (previousSlide !== index) {
        if (direction === "next") {
          slides[previousSlide].classList.add(
            "section__testimonial-slide--slide-out-left",
          );
          slides[index].classList.add("section__testimonial-slide--slide-left");
        } else if (direction === "prev") {
          slides[previousSlide].classList.add(
            "section__testimonial-slide--slide-out-right",
          );
          slides[index].classList.add(
            "section__testimonial-slide--slide-right",
          );
        }
      }

      // Update active states
      slides.forEach(function (slide, i) {
        if (i === index) {
          slide.classList.add("section__testimonial-slide--active");
        } else {
          slide.classList.remove("section__testimonial-slide--active");
        }
      });

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll(
          ".section__testimonial-dot",
        );
        dots.forEach(function (dot, i) {
          if (i === index) {
            dot.classList.add("section__testimonial-dot--active");
            dot.setAttribute("aria-selected", "true");
          } else {
            dot.classList.remove("section__testimonial-dot--active");
            dot.setAttribute("aria-selected", "false");
          }
        });
      }

      // Update button states
      if (prevButton) {
        prevButton.disabled = index === 0;
      }
      if (nextButton) {
        nextButton.disabled = index === slides.length - 1;
      }
    }

    // Go to specific slide
    function goToSlide(index, direction) {
      if (index < 0 || index >= slides.length) {
        return;
      }

      // Determine direction if not provided
      if (!direction) {
        direction = index > currentSlide ? "next" : "prev";
      }

      currentSlide = index;
      updateSlide(currentSlide, direction);
    }

    // Go to next slide
    function nextSlide() {
      if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1, "next");
      }
    }

    // Go to previous slide
    function prevSlide() {
      if (currentSlide > 0) {
        goToSlide(currentSlide - 1, "prev");
      }
    }

    // Initialize slider
    createDots();
    updateSlide(0, null);

    // Event listeners
    if (prevButton) {
      prevButton.addEventListener("click", prevSlide);
    }

    if (nextButton) {
      nextButton.addEventListener("click", nextSlide);
    }

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    sliderContainer.addEventListener(
      "touchend",
      function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true },
    );

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swiped left
          nextSlide();
        } else {
          // Swiped right
          prevSlide();
        }
      }
    }
  })(); // End testimonial slider IIFE
});
