import { items } from "../../data/db.js";

export function addItem(item) {
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

export function updateItem(item) {
  const editingItem = items.find((i) => i.id === item.id);
  editingItem = { ...item };

  localStorage.setItem("items", JSON.stringify(items));
}

export function deleteItem(item) {
  items = items.filter((i) => i.id !== item.id);
  localStorage.setItem("items", JSON.stringify(items));
}

export function getItems() {
  return JSON.parse(localStorage.getItem("items")) ?? items;
}
