import { items } from "../../../data/db.js";
import { formatDate } from "../../utils/dates.js";
import { displayArtist, getArtist } from "../../utils/global.js";

let itemToEditId = null;
let ongoingAuction = null;

export function initArtistItemsPage() {
  const selectedArtist = getArtist();
  displayArtist("artistName2");
  renderItems(selectedArtist);

  document
    .getElementById("add-new-item-btn")
    .addEventListener("click", openArtistAddNewItemPage);

  document
    .getElementById("cancelButton")
    .addEventListener("click", closeArtistAddNewItemPage);

  document
    .getElementById("addItemButton")
    .addEventListener("click", handleSubmitItem);
}

function renderItems(selectedArtist) {
  const container = document.getElementById("items-container");
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const artistItems = items.filter((item) => item.artist === selectedArtist);

  artistItems.forEach((item) => {
    const card = createItemCard(item);
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function createItemCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `item-${item.id}`;

  const buttonClass = "btn-dark";
  const publishButtonText = item.isPublished ? "Unpublish" : "Publish";
  const publishButtonClass = item.isPublished ? "btn-unpublish" : "btn-publish";
  card.innerHTML = `
    <img class="card-img-top" src="${item.image}" alt="${item.title}">
    <div class="card-body card-inner">
      <div class="heading-box">
      <div>
       <h5 class="card-title">${item.title}</h5>
       <p>${formatDate(item.dateCreated)}</p>
       </div>
        <a href="#" class="btn ${buttonClass}">$${item.price}</a>
      </div>
      
      <p class="card-text">${item.description}</p>
    </div>
    <div class="btn-background">
      <button class="btn-blue" id="send-to-auction-${item.id}" ${
    isAuctionOngoing() ? "disabled" : ""
  }>Send to Auction</button>
      <button id="toggle-publish-${
        item.id
      }" class="${publishButtonClass}">${publishButtonText}</button>
      <button class="btn-remove" id="remove-${item.id}">Remove</button>
      <button class="btn-edit" id="edit-${item.id}">Edit</button>
    </div>
  `;

  setupEventListeners(item, card);
  return card;
}

function setupEventListeners(item, card) {
  const sendToAuctionBtn = card.querySelector(`#send-to-auction-${item.id}`);
  const togglePublishBtn = card.querySelector(`#toggle-publish-${item.id}`);
  const removeBtn = card.querySelector(`#remove-${item.id}`);
  const editBtn = card.querySelector(`#edit-${item.id}`);

  sendToAuctionBtn?.addEventListener("click", () => sendToAuction(item.id));
  togglePublishBtn?.addEventListener("click", () =>
    togglePublish(item.id, togglePublishBtn)
  );
  removeBtn?.addEventListener("click", () => confirmRemove(item.id));
  editBtn?.addEventListener("click", () => editItem(item.id));
}

function togglePublish(itemId, togglePublishBtn) {
  const item = items.find((i) => i.id === itemId);
  if (item) {
    item.isPublished = !item.isPublished;
    togglePublishBtn.textContent = item.isPublished ? "Unpublish" : "Publish";
    localStorage.setItem("items", JSON.stringify(items));
    const selectedArtist = getArtist();
    renderItems(selectedArtist);
  }
}

function confirmRemove(itemId) {
  const confirmationPopup = document.getElementById("confirmation-popup");
  confirmationPopup.style.display = "flex";

  document.getElementById("confirm-remove").onclick = () => {
    removeItem(itemId);
    confirmationPopup.style.display = "none";
  };

  document.getElementById("cancel-remove").onclick = () => {
    confirmationPopup.style.display = "none";
  };
}

function removeItem(itemId) {
  const index = items.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    const selectedArtist = getArtist();
    renderItems(selectedArtist);
  }
}

function editItem(itemId) {
  itemToEditId = itemId;
  const item = items.find((i) => i.id === itemId);

  if (item) {
    document.getElementById("itemTitle").value = item.title;
    document.getElementById("itemDescription").value = item.description;
    document.getElementById("itemPrice").value = item.price;
    document.getElementById("itemType").value = item.type;
    document.getElementById("itemImageUrl").value = item.image;

    openArtistAddNewItemPage();
  }
}

function handleSubmitItem(event) {
  event.preventDefault();

  const priceValue = parseFloat(document.getElementById("itemPrice").value);
  const title = document.getElementById("itemTitle").value.trim();
  const description = document.getElementById("itemDescription").value.trim();
  const type = document.getElementById("itemType").value.trim();
  const image =
    document.getElementById("itemImageUrl").value.trim() ||
    document.getElementById("overlayImage").src;
  const artist = getArtist();

  if (!title || !description || !type || priceValue <= 0) {
    return;
  }

  if (itemToEditId) {
    updateItem(artist, image);
  } else {
    addItem(artist, image);
  }
}

function addItem(artist, image) {
  const newItem = {
    id: generateUniqueId(),
    artist: getArtist(),
    price: parseFloat(document.getElementById("itemPrice").value),
    title: document.getElementById("itemTitle").value.trim(),
    description: document.getElementById("itemDescription").value.trim(),
    type: document.getElementById("itemType").value.trim(),
    image: image,
    isPublished: true,
    isInAuction: false,
    dateCreated: new Date().toISOString(),
    dateSold: null,
  };

  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));

  alert("Item added successfully!");
  closeArtistAddNewItemPage();
  const selectedArtist = getArtist();
  renderItems(selectedArtist);
}

function updateItem(artist, image) {
  const item = items.find((i) => i.id === itemToEditId);

  if (item) {
    const updatedTitle = document.getElementById("itemTitle").value.trim();
    const updatedDescription = document
      .getElementById("itemDescription")
      .value.trim();
    const updatedPrice = parseFloat(document.getElementById("itemPrice").value);
    const updatedType = document.getElementById("itemType").value.trim();

    if (!updatedTitle || !updatedDescription || updatedPrice <= 0)
      item.title = updatedTitle;
    item.description = updatedDescription;
    item.price = updatedPrice;
    item.type = updatedType;
    item.image = image || item.image;
    item.artist = artist;

    localStorage.setItem("items", JSON.stringify(items));

    alert("Item updated successfully!");

    closeArtistAddNewItemPage();

    itemToEditId = null;

    const selectedArtist = getArtist();
    renderItems(selectedArtist);
  } else {
    console.error("Item not found for update!");
  }
}

function openArtistAddNewItemPage() {
  displayArtist("artistName3");
  const panel = document.querySelector(".panel");
  panel.classList.add("show");
  document.getElementById("artistAddNewItemPage").style.display = "block";

  const formHeading = document.getElementById("formHeading");
  const submitButton = document.getElementById("addItemButton");

  if (itemToEditId) {
    formHeading.textContent = "Edit Item";
    submitButton.textContent = "Update Item";
  } else {
    formHeading.textContent = "Add New Item";
    submitButton.textContent = "Add New Item";
  }
}

function closeArtistAddNewItemPage() {
  const panel = document.querySelector(".panel");
  panel.classList.remove("show");
  document.getElementById("artistItemsPage").style.display = "block";

  document.getElementById("itemTitle").value = "";
  document.getElementById("itemDescription").value = "";
  document.getElementById("itemPrice").value = "";
  document.getElementById("itemType").value = "";
  document.getElementById("itemImage").value = "";

  itemToEditId = null;

  const selectedArtist = getArtist();
  renderItems(selectedArtist);
}

function generateUniqueId() {
  return "item-" + Math.random().toString(36).substring(2, 9);
}

function isAuctionOngoing() {
  return ongoingAuction !== null;
}

function sendToAuction(itemId) {
  const item = items.find((i) => i.id === itemId);

  if (item) {
    if (!item.isInAuction) {
      item.isInAuction = true;
      item.isPublished = false;
      localStorage.setItem("ongoingAuction", JSON.stringify(item));
      localStorage.setItem("items", JSON.stringify(items));

      alert(`${item.title} has been sent to auction!`);
      window.location.hash = "#auctionPage";
    } else {
      alert("This item is already in auction.");
    }
  }
}

document.addEventListener("DOMContentLoaded", initArtistItemsPage);

const captureImageBtn = document.getElementById("captureImageBtn");
const imageCapturePanel = document.getElementById("imageCapturePanel");
const video = document.getElementById("video");
const captureBtn = document.getElementById("captureBtn");
const canvas = document.getElementById("canvas");
const overlayImage = document.getElementById("overlayImage");
const retakeBtn = document.getElementById("retakeBtn");
const closePanelBtn = document.getElementById("closePanel");
const itemImageInput = document.getElementById("itemImageUrl");

captureImageBtn.addEventListener("click", (e) => {
  e.preventDefault();
  imageCapturePanel.style.display = "block";
  displayArtist("artistName4");

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((err) => {
      console.error("Error accessing camera: ", err);
    });
});

captureBtn.addEventListener("click", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  overlayImage.style.display = "block";
  overlayImage.src = canvas.toDataURL("image/png");
  itemImageInput.value = overlayImage.src;

  handleSubmitItem(new Event("submit"));

  video.style.display = "none";
  captureBtn.style.display = "none";
  retakeBtn.style.display = "inline-block";
});

retakeBtn.addEventListener("click", () => {
  overlayImage.style.display = "none";
  video.style.display = "block";
  captureBtn.style.display = "inline-block";
  retakeBtn.style.display = "none";
  itemImageInput.value = "";
});

closePanelBtn.addEventListener("click", () => {
  imageCapturePanel.style.display = "none";
  const stream = video.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach((track) => track.stop());
  video.srcObject = null;
});

function loadItems() {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const itemsContainer = document.getElementById("items-container");
  itemsContainer.innerHTML = "";

  items.forEach((item) => {
    const card = createItemCard(item);
    itemsContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadItems);
