import { play, NOTIFICATION_SOUND } from "./sound.js";
import { icon } from "../assets/index.js";

export function createNotification({ title, message, duration = 5}) {
  const options = { type: "basic", title, message, iconUrl: icon };
  chrome.notifications.create(options, (notificationId) => {
      if (duration) {
          setTimeout(() => {
              chrome.notifications.clear(notificationId);
          }, duration * 1000);
      }
  });

  play(NOTIFICATION_SOUND);
}