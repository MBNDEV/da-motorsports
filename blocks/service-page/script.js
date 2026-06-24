/**
 * Homepage Location Tabs - Frontend Interactivity
 */
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Location Tabs
  const locationTabs = document.querySelectorAll(".section__location-tab");
  const locationMap = document.querySelector(".section__locations-map img");

  if (locationTabs.length && locationMap) {
    locationTabs.forEach(function (tab) {
      // Make tabs keyboard accessible
      tab.setAttribute("role", "button");
      tab.setAttribute("tabindex", "0");

      // Prevent button clicks from triggering tab switch
      const button = tab.querySelector(".section__button");
      if (button) {
        button.addEventListener("click", function (e) {
          e.stopPropagation();
        });
      }

      // Handle click event
      const switchTab = function () {
        // Remove active class from all tabs
        locationTabs.forEach(function (t) {
          t.classList.remove("section__location-tab--active");
          t.setAttribute("aria-selected", "false");
          // Remove active indicator
          const indicator = t.querySelector(".section__location-tab-indicator");
          if (indicator) {
            indicator.remove();
          }
        });

        // Add active class to clicked tab
        tab.classList.add("section__location-tab--active");
        tab.setAttribute("aria-selected", "true");

        // Add active indicator
        const indicator = document.createElement("img");
        indicator.src = tab.dataset.indicatorUrl;
        indicator.alt = "";
        indicator.className = "section__location-tab-indicator";
        tab.insertBefore(indicator, tab.firstChild);

        // Update map image
        const mapUrl = tab.dataset.mapUrl;
        const locationTitle = tab.querySelector(
          ".section__location-title",
        ).textContent;

        if (mapUrl) {
          locationMap.src = mapUrl;
          locationMap.alt = "Map showing the " + locationTitle + " location";
        }
      };

      // Click event
      tab.addEventListener("click", switchTab);

      // Keyboard support (Enter and Space)
      tab.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          switchTab();
        }
      });
    });
  }

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
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
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

    // Update active states
    function updateSlide(index) {
      // Hide all slides
      slides.forEach(function (slide) {
        slide.classList.remove("section__testimonial-slide--active");
      });

      // Show current slide
      slides[index].classList.add("section__testimonial-slide--active");

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll(
          ".section__testimonial-dot",
        );
        dots.forEach(function (dot, i) {
          if (i === index) {
            dot.classList.add("section__testimonial-dot--active");
          } else {
            dot.classList.remove("section__testimonial-dot--active");
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
    function goToSlide(index) {
      if (index < 0 || index >= slides.length) {
        return;
      }

      currentSlide = index;
      updateSlide(currentSlide);
    }

    // Go to next slide
    function nextSlide() {
      if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
      }
    }

    // Go to previous slide
    function prevSlide() {
      if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    }

    // Initialize slider
    createDots();
    updateSlide(0);

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
