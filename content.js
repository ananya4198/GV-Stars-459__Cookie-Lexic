// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "changeFont") {
      document.body.style.fontFamily = message.fontFamily;
    }
  });