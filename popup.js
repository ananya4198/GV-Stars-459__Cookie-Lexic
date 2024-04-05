
// Function to change font based on the button clicked
function changeFont(fontFamily) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", fontFamily: fontFamily });
  });
}

// Add event listeners to the font buttons
document.getElementById('OpenDyslexicButton').addEventListener('click', function() {
  changeFont('OpenDyslexic, sans-serif');
});
document.getElementById('ArialButton').addEventListener('click', function() {
  changeFont('Arial, sans-serif');
});
document.getElementById('VerdanaButton').addEventListener('click', function() {
  changeFont('Verdana, sans-serif');
});
document.getElementById('TimesNewRomanButton').addEventListener('click', function() {
  changeFont('Times New Roman, serif');
});
