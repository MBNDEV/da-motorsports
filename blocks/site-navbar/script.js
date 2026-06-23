/**
 * Site Navbar Block - Mobile Menu & Submenu Toggle Script
 *
 * Handles mobile hamburger menu and submenu toggle functionality
 */

(function () {
  "use strict";

  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    initMobileMenuToggle();
    initSubmenuToggle();
  }

  /**
   * Initialize mobile hamburger menu toggle
   */
  function initMobileMenuToggle() {
    const menuToggle = document.querySelector(".header__menu-toggle");
    const menuWrapper = document.querySelector(".header__nav-menu-wrapper");

    if (!menuToggle || !menuWrapper) {
      return;
    }

    // Toggle menu on button click
    menuToggle.addEventListener("click", function () {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", !isExpanded);
      menuWrapper.classList.toggle("menu-open");

      // Prevent body scroll when menu is open
      if (!isExpanded) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !e.target.closest(".header__nav") &&
        menuWrapper.classList.contains("menu-open")
      ) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuWrapper.classList.remove("menu-open");
        document.body.style.overflow = "";
      }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth > 767) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuWrapper.classList.remove("menu-open");
        document.body.style.overflow = "";
      }
    });

    // Close menu when pressing Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuWrapper.classList.contains("menu-open")) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuWrapper.classList.remove("menu-open");
        document.body.style.overflow = "";
      }
    });
  }

  /**
   * Initialize submenu toggle for mobile
   */
  function initSubmenuToggle() {
    // Get all menu items with submenus
    const menuItemsWithChildren = document.querySelectorAll(
      ".header__nav-links .menu-item-has-children, .header__nav-links .has-submenu",
    );

    // Add click handlers for mobile submenu toggle
    menuItemsWithChildren.forEach(function (menuItem) {
      const link = menuItem.querySelector("a");
      const submenu = menuItem.querySelector(".sub-menu");

      if (link && submenu) {
        // Add aria attributes for accessibility
        link.setAttribute("aria-haspopup", "true");
        link.setAttribute("aria-expanded", "false");
        submenu.setAttribute("aria-hidden", "true");

        // Toggle submenu on click (mobile only)
        link.addEventListener("click", function (e) {
          // Only prevent default on mobile
          if (window.innerWidth < 768) {
            e.preventDefault();

            const isExpanded = link.getAttribute("aria-expanded") === "true";

            // Close other open submenus
            menuItemsWithChildren.forEach(function (otherItem) {
              if (otherItem !== menuItem) {
                const otherLink = otherItem.querySelector("a");
                const otherSubmenu = otherItem.querySelector(".sub-menu");
                if (otherLink && otherSubmenu) {
                  otherLink.setAttribute("aria-expanded", "false");
                  otherSubmenu.setAttribute("aria-hidden", "true");
                  otherItem.classList.remove("submenu-open");
                }
              }
            });

            // Toggle current submenu
            link.setAttribute("aria-expanded", !isExpanded);
            submenu.setAttribute("aria-hidden", isExpanded);
            menuItem.classList.toggle("submenu-open");
          }
        });
      }
    });
  }
})();
