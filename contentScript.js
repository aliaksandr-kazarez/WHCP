const $ = document.querySelectorAll.bind(document);
const tRexRoarURL =
  "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3";
const play = (src) => {
  const audio = new Audio(src);
  return audio.play();
};

const isSlotsAvailable = $(".a-button.ufss-unavailable").length < 2;

if (isSlotsAvailable) {
//   alert("test");
    play(tRexRoarURL);
} else {
  console.log("available");
  play(tRexRoarURL);
  setTimeout(async function () {
    // await play(tRexRoarURL);
  }, 60 * 1000);
}
