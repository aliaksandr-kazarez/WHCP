import { setItem } from "../utils/storage.js";
import { on } from "../utils/messageBus.js";
import { createNotification } from "../utils/notification.js";
import { play, ALERT_SOUND } from "../utils/sound.js";

const DEFAULT_REFRESH_RATE = 55;

chrome.runtime.onInstalled.addListener(async function () {

  await setItem("refreshRate", DEFAULT_REFRESH_RATE);
  console.log("Default RefreshRate set");

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: "www.amazon.com",
              pathEquals: "/gp/buy/shipoptionselect/handlers/display.html",
            },
          }),
        ],
        actions: [
          new chrome.declarativeContent.ShowPageAction(),
          // new chrome.declarativeContent.RequestContentScript({
          //     js: ["contentScript.js"]
          // })
        ],
      },
    ]);
  });

  on("slot-found", () => {
    createNotification({
      title: "New Slots Available",
      message: "New Slots available, proceed to checkout ASAP"
    });
  });

  on("slot-not-found", () => {
    play(ALERT_SOUND);
  });

  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message, sender);
    sendResponse("OK")
    // chrome.runtime.onMessage.removeListener(event);
  });

});
