/**
 * Homepage Location Tabs - Frontend Interactivity
 */
document.addEventListener("DOMContentLoaded", function () {
  const locationTabs = document.querySelectorAll(".homepage__location-tab");
  const locationMap = document.querySelector(".homepage__locations-map img");

  if (!locationTabs.length || !locationMap) {
    return;
  }

  locationTabs.forEach(function (tab) {
    // Make tabs keyboard accessible
    tab.setAttribute("role", "button");
    tab.setAttribute("tabindex", "0");

    // Prevent button clicks from triggering tab switch
    const button = tab.querySelector(".homepage__button");
    if (button) {
      button.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    // Handle click event
    const switchTab = function () {
      // Remove active class from all tabs
      locationTabs.forEach(function (t) {
        t.classList.remove("homepage__location-tab--active");
        t.setAttribute("aria-selected", "false");
        // Remove active indicator
        const indicator = t.querySelector(".homepage__location-tab-indicator");
        if (indicator) {
          indicator.remove();
        }
      });

      // Add active class to clicked tab
      tab.classList.add("homepage__location-tab--active");
      tab.setAttribute("aria-selected", "true");

      // Add active indicator
      const indicator = document.createElement("img");
      indicator.src = tab.dataset.indicatorUrl;
      indicator.alt = "";
      indicator.className = "homepage__location-tab-indicator";
      tab.insertBefore(indicator, tab.firstChild);

      // Update map image
      const mapUrl = tab.dataset.mapUrl;
      const locationTitle = tab.querySelector(
        ".homepage__location-title",
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
});
