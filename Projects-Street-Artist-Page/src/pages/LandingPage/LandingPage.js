import { setArtist } from "../../utils/global.js";

const usersSelect = document.querySelector("#users");

export function initLandingPage() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      const userNames = users.map((user) => user.name);
      usersSelect.innerHTML = "";

      const defaultOption = document.createElement("option");
      defaultOption.textContent = "Choose";
      defaultOption.value = "";
      usersSelect.appendChild(defaultOption);

      userNames.forEach((userName) => {
        const option = document.createElement("option");
        option.value = userName;
        option.textContent = userName;
        usersSelect.appendChild(option);
      });

      usersSelect.addEventListener("change", function () {
        const selectedArtist = usersSelect.value;
        setArtist(selectedArtist);
        window.location.hash = "#artistHomePage";
      });
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
}
