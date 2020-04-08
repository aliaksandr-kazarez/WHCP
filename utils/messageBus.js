
export function on(eventName, callback) {
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.eventName === eventName) {
      callback(message);
    }
  });
}

export function emit(eventName, data) {
  chrome.runtime.sendMessage({
    eventName,
    data
  });
}
