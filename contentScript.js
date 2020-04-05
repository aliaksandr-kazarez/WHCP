const $ = document.querySelectorAll.bind(document);
const tRexRoarURL =
  "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3";
const play = (src, loop = false) => {
  const audio = new Audio(src);
  audio.loop = loop;
  return audio.play();
};

const isSlotsAvailable = () => $(".a-button.ufss-unavailable").length < 2;

if (isSlotsAvailable()) {
  console.log("available");
  play(tRexRoarURL, true);
} else {
  console.log("No Slots Available, reloading in 55 seconds");
  setTimeout(async function () {
    location.reload();
  }, 55 * 1000);
}
