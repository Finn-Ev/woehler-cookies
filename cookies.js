var body = document.body;
var acceptAllButton = document.querySelector("#acceptAllButton");
var openSettingsButton = document.querySelector("#openSettingsButton");
var declineAllButton = document.querySelector("#declineAll");
var customBannerContainer = document.querySelector(".cookie-banner-container");

window.addEventListener("cf_init", function () {
  if (CookieFirst.consent) {
    // Alle Cookie relevanten Elemente werden entfernt, da der Nutzer die Cookies bereits ausgewählt hat
    removeCustomCookieBanner();
  } else {
    removeCFBanner();
    showCustomBanner();
  }

  ///////////////////
  // helper functions

  // der Standard CookieFirst-Banner wird entfernt
  function removeCFBanner() {
    var cfRoot = document.querySelector("#cf-root");
    cfRoot.style.display = "none";
  }

  // initial ist der Custom-Banner auf visibility: "hidden" gestellt
  function showCustomBanner() {
    customBannerContainer.style.visibility = "visible";
    body.style.overflow = "hidden";
  }

  function removeCustomCookieBanner() {
    customBannerContainer.remove();
    body.style.overflow = "visible";
  }

  //////////////////////////////
  // Reaktionen auf Nutzerauswahl
  acceptAllButton.addEventListener("click", function () {
    CookieFirst.acceptAllCategories();
    removeCustomCookieBanner();
  });

  declineAllButton.addEventListener("click", function () {
    CookieFirst.declineAllCategories();
    removeCustomCookieBanner();
  });

  openSettingsButton.addEventListener("click", function () {
    CookieFirst.openPanel();
    removeCustomCookieBanner();
  });
});
