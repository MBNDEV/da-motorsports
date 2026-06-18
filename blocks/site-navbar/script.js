/**
 * Site Navbar Block - Submenu Toggle Script
 *
 * Handles mobile submenu toggle functionality
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

        // Toggle submenu on click (mobile)
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

    // Close submenu when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".header__nav-links")) {
        menuItemsWithChildren.forEach(function (menuItem) {
          const link = menuItem.querySelector("a");
          const submenu = menuItem.querySelector(".sub-menu");
          if (link && submenu) {
            link.setAttribute("aria-expanded", "false");
            submenu.setAttribute("aria-hidden", "true");
            menuItem.classList.remove("submenu-open");
          }
        });
      }
    });
  }
})();
