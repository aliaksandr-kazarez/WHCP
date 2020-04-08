import { alert, notification } from "../assets/index.js";
export const ALERT_SOUND = alert;
export const NOTIFICATION_SOUND = notification;

export const play = (src, loop = false) => {
    const audio = new Audio(src);
    audio.loop = loop;
    return audio.play();
};
