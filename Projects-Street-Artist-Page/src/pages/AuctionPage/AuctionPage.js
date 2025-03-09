import { items } from "../../../data/db";

const items = JSON.parse(localStorage.getItem("items")) || [];

document.addEventListener("DOMContentLoaded", function () {
  const ongoingAuctionData = localStorage.getItem("ongoingAuction");

  if (ongoingAuctionData) {
    const ongoingAuction = JSON.parse(ongoingAuctionData);
    console.log("Ongoing Auction Item:", ongoingAuction);

    document.getElementById("itemTitle").textContent = ongoingAuction.title;
    document.getElementById("itemImage").src = ongoingAuction.imageUrl;
    document.getElementById("itemDescription").textContent =
      ongoingAuction.description;
    document.getElementById("currentBid").textContent = (
      ongoingAuction.price / 2
    ).toFixed(2);

    startAuctionTimer();
  } else {
    document.getElementById("auctionDesign").innerHTML =
      "<p>No auction item found. Please select an item to bid on.</p>";
  }

  let timerValue = 120;
  const timerElement = document.getElementById("timer");
  const bidButton = document.getElementById("bidButton");
  const bidAmountInput = document.getElementById("bidAmount");
  const bidLog = document.getElementById("bidLog");

  function startAuctionTimer() {
    const auctionTimer = setInterval(() => {
      if (timerValue > 0) {
        timerValue--;
        const minutes = Math.floor(timerValue / 60);
        const seconds = timerValue % 60;
        timerElement.textContent = `${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`;
      } else {
        clearInterval(auctionTimer);
        endAuction();
      }
    }, 1000);
  }

  function endAuction() {
    bidButton.disabled = true;
    bidButton.textContent = "Auction Ended";
    bidLog.innerHTML +=
      "<p>The auction has ended. Final bid has been recorded.</p>";

    const winningBid = document.getElementById("currentBid").textContent;
    bidLog.innerHTML += `<p>Winning Bid: $${winningBid}</p>`;
  }

  if (bidButton) {
    bidButton.addEventListener("click", function () {
      const bidAmount = parseFloat(bidAmountInput.value);
      if (isNaN(bidAmount) || bidAmount <= 0) {
        alert("Please enter a valid bid amount.");
        return;
      }

      let currentBid = parseFloat(
        document.getElementById("currentBid").textContent
      );
      if (bidAmount > currentBid) {
        currentBid = bidAmount;
        document.getElementById("currentBid").textContent = currentBid;
        bidLog.innerHTML += `<p>New bid placed: $${currentBid}</p>`;
      } else {
        alert("Your bid must be higher than the current bid.");
      }

      bidAmountInput.value = "";
    });
  }
});
