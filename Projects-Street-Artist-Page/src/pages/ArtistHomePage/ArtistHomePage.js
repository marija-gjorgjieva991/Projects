import { displayArtist, getArtist } from "../../utils/global.js";
import { items } from "../../../data/db.js";
import { formatDateEn, generateDateLabels } from "../../utils/dates.js";

let chartInstance;

export function initArtistHomePage() {
  const selectedArtist = getArtist();
  displayArtist("artistName");
  updateDashboard(selectedArtist);
}

function updateDashboard(selectedArtist) {
  document.getElementById("total-items-sold").innerText =
    getTotalItemsSold(selectedArtist);
  document.getElementById("total-income").innerText = `$${getTotalIncome(
    selectedArtist
  )}`;
  drawChart(7, selectedArtist);
}

function getTotalItemsSold(selectedArtist) {
  const artistItems = items.filter((item) => item.artist === selectedArtist);
  const soldItemsCount = artistItems.filter((item) => item.dateSold).length;
  const totalItemsCount = artistItems.length;
  return totalItemsCount === 0 ? "0/0" : `${soldItemsCount}/${totalItemsCount}`;
}

function getTotalIncome(selectedArtist) {
  return items
    .filter((item) => item.artist === selectedArtist)
    .reduce((acc, item) => acc + (item.priceSold || 0), 0);
}

const auctionState = {
  ongoing: true,
  currentBid: 1200,
};

function updateLiveAuctionWidget() {
  const liveAuctionItem = document.getElementById("live-auction-item");
  if (auctionState.ongoing) {
    liveAuctionItem.innerHTML = `Current Bid: $${auctionState.currentBid}`;
    liveAuctionItem.onclick = () => {
      window.location.href = "index.html#auction";
    };
  } else {
    liveAuctionItem.innerHTML = "";
  }
}

const last7 = document.querySelector(".btn-7");
const last14 = document.querySelector(".btn-14");
const last30 = document.querySelector(".btn-30");

window.onload = () => {
  const selectedArtist = getArtist();
  updateDashboard(selectedArtist);
  drawChart(7, selectedArtist);
};

last7.addEventListener("click", function () {
  const selectedArtist = getArtist();
  drawChart(7, selectedArtist);
});
last14.addEventListener("click", function () {
  const selectedArtist = getArtist();
  drawChart(14, selectedArtist);
});
last30.addEventListener("click", function () {
  const selectedArtist = getArtist();
  drawChart(30, selectedArtist);
});

function drawChart(daysAgo, selectedArtist) {
  const labels = generateDateLabels(daysAgo);

  const artistItems = items.filter(
    (item) => item.artist === selectedArtist && !!item.priceSold
  );

  const data = getChartData(artistItems, labels);

  if (chartInstance) {
    chartInstance.data.labels = labels;
    chartInstance.data.datasets[0].data = data;
    chartInstance.update();
  } else {
    chartInstance = initChart({
      labels: labels,
      data: data,
    });
  }
}

function getChartData(items = [], labels = []) {
  const chartData = [];

  labels.forEach((label) => {
    let sum = 0;

    items.forEach((item) => {
      if (formatDateEn(item.dateSold) === label) {
        sum += item.priceSold;
      }
    });

    chartData.push(sum);
  });

  return chartData;
}

function initChart(config) {
  const ctx = document.getElementById("myChart");

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: config.labels,
      datasets: [
        {
          label: "Amount",
          data: config.data,
          borderWidth: 3,
          backgroundColor: config.colors || "rgb(161, 106, 94)",
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  });

  return myChart;
}
