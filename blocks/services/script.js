/**
 * Services Page Block - Frontend JavaScript
 */

(function () {
  "use strict";

  // FAQ accordion toggle
  document.addEventListener("DOMContentLoaded", function () {
    // FAQ accordion functionality
    var faqToggles = document.querySelectorAll(".section__faq-toggle");
    faqToggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = this.getAttribute("aria-expanded") === "true";
        var answerId = this.getAttribute("aria-controls");
        var answer = document.getElementById(answerId);

        if (answer) {
          this.setAttribute("aria-expanded", String(!expanded));
          answer.classList.toggle("section__faq-answer--hidden", expanded);

          var icon = this.querySelector(".section__faq-icon");
          if (icon) {
            icon.textContent = expanded ? "+" : "−";
          }
        }
      });
    });

    // Mobile nav toggle (if present)
    var navToggle = document.querySelector(".section__header-mobile-toggle");
    var navList = document.querySelector(".section__header-nav");
    if (navToggle && navList) {
      navToggle.addEventListener("click", function () {
        var open = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", String(!open));
        navList.classList.toggle("section__header-nav--open", !open);
      });
    }
  });
})();
