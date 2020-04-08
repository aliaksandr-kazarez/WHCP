(async () => {
    const src = chrome.extension.getURL("content/contentScript.js");
    const contentScript = await import(src);
    // contentScript.main(/* chrome: no need to pass it */);
})();
