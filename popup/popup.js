import { getItem, setItem } from "../utils/storage.js";

let refreshRateEl = document.getElementById("refreshRate");


getItem("refreshRate").then((refreshRate) => {
  refreshRateEl.value = refreshRate;
});

refreshRateEl.addEventListener("change", (event) => {
  const refreshRate = event.target.value;
  setItem("refreshRate", refreshRate);
});
