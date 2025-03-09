import { initArtistHomePage } from "./src/pages/ArtistHomePage/ArtistHomePage.js";
import { initArtistItemsPage } from "./src/pages/ArtistItemsPage/ArtistItemsPage.js";
import { initLandingPage } from "./src/pages/LandingPage/LandingPage.js";
import { initVisitorListingPage } from "./src/pages/VisitorListingPage/VisitorListingPage.js";
import { initVisitorHomePage } from "./src/pages/VisitorHomePage/VisitorHomePage.js";

function handleRouting() {
  const hash = location.hash ? location.hash : "#landingPage";

  const allPages = document.querySelectorAll(".page");
  allPages.forEach((page) => (page.style.display = "none"));

  document.querySelector(hash).style.display = "block";

  switch (hash) {
    case "#landingPage":
      initLandingPage();
      break;

    case "#visitorHomePage":
      initVisitorHomePage();
      break;

    case "#artistHomePage":
      initArtistHomePage();
      break;

    case "#artistItemsPage":
      initArtistItemsPage();
      break;

    case "#visitorListingPage":
      initVisitorListingPage();
      break;

    default:
      break;
  }
}

window.addEventListener("load", handleRouting);
window.addEventListener("hashchange", handleRouting);
