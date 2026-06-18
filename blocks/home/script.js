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
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      locationTabs.forEach(function (t) {
        t.classList.remove("homepage__location-tab--active");
        // Remove active indicator
        const indicator = t.querySelector(".homepage__location-tab-indicator");
        if (indicator) {
          indicator.remove();
        }
      });

      // Add active class to clicked tab
      tab.classList.add("homepage__location-tab--active");

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
    });
  });
});
