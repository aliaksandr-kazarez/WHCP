import { emit } from "../utils/messageBus.js";
const $ = document.querySelectorAll.bind(document);

const noSlotsText = "No delivery windows available. New windows are released throughout the day.";

const isSlotsAvailable = () => {
  const alert = $(".a-alert-heading");
  return alert && ![...alert].find(({ innerText }) => innerText.toLowerCase() === noSlotsText.toLowerCase());
};

if (isSlotsAvailable()) {
  emit("slot-found");
} else {
  setTimeout(function () {
    emit("slot-not-found");
    location.reload();
  }, 36 * 1000);
}
