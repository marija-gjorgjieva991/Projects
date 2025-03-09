const itemsContainer = document.querySelector("#visitorItemsContainer");
const filtersPanel = document.getElementById("filters-panel");
import { items } from "../../../data/db.js";
import { setArtist } from "../../utils/global.js";
import { itemTypes } from "../../../data/db.js";

let publishedItems = [];

export function initVisitorListingPage() {
  publishedItems = items.filter((item) => item.isPublished);

  document
    .querySelector(".filter-icon")
    .addEventListener("click", openFilterPanel);
  document
    .getElementById("close-filters")
    .addEventListener("click", closeFilterPanel);
  document
    .getElementById("apply-filters")
    .addEventListener("click", applyFilters);

  renderVisitorItems(publishedItems);

  populateItemTypesSelect();
}

function openFilterPanel() {
  filtersPanel.classList.add("show");
}

function closeFilterPanel() {
  filtersPanel.classList.remove("show");
}

function applyFilters() {
  const title = document.getElementById("title-input").value.trim();
  const artist = document.getElementById("artist-select").value;
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
  const maxPrice =
    parseFloat(document.getElementById("max-price").value) || Infinity;
  const type = document.getElementById("item-type").value;

  const filteredItems = publishedItems.filter(
    (item) =>
      (title ? item.title.includes(title) : true) &&
      (artist ? item.artist === artist : true) &&
      item.price >= minPrice &&
      item.price <= maxPrice &&
      (type ? item.type === type : true)
  );

  renderVisitorItems(filteredItems);
  closeFilterPanel();
}

function renderVisitorItems(items) {
  itemsContainer.innerHTML = "";
  items.forEach((item, idx) => {
    const card = document.createElement("div");
    card.classList.add("card", idx % 2 === 0 ? "card-light" : "card-dark");
    const buttonClass = idx % 2 === 0 ? "btn-dark" : "btn-light";
    card.innerHTML = `
      <img class="card-img-top" src="${item.image}" alt="${item.title}">
      <div class="card-body">
        <div class="heading-box">
          <p id="artist-name" class="font-reenie">${item.artist}</p>
          <a href="#" class="btn ${buttonClass}">$${item.price}</a>
        </div>
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
      </div>`;

    itemsContainer.appendChild(card);
  });
}

function populateItemTypesSelect() {
  const itemTypeSelect = document.getElementById("item-type");

  itemTypeSelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Choose";
  defaultOption.value = "";
  itemTypeSelect.appendChild(defaultOption);

  itemTypes.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    itemTypeSelect.appendChild(option);
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((artists) => {
    const artistSelect = document.getElementById("artist-select");
    artistSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Choose";
    defaultOption.value = "";
    artistSelect.appendChild(defaultOption);
    artists.forEach((artist) => {
      const option = document.createElement("option");
      option.value = artist.name;
      option.textContent = artist.name;
      artistSelect.appendChild(option);
    });

    artistSelect.addEventListener("change", function () {
      const selectedArtist = artistSelect.value;
      setArtist(selectedArtist);
      window.location.hash = "#visitorListingPage";
    });
  })
  .catch((error) => console.error("Error fetching artists:", error));
document.addEventListener("DOMContentLoaded", initVisitorListingPage);
