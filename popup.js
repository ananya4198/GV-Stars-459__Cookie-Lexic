function changeFont(fontName) {
// Change font of the entire document body
document.body.style.fontFamily = fontName + ', sans-serif';
  
// Change font of the title
document.querySelector('.title').style.fontFamily = fontName + ', sans-serif';

// Change font of the subtitles
const subtitles = document.querySelectorAll('.subtitle');
subtitles.forEach(subtitle => {
  subtitle.style.fontFamily = fontName + ', sans-serif';

  
})

};

//event listeners for the buttons to change the fonts
document.getElementById('ArialButton').addEventListener('click', function() {
  changeFont('Arial' + ', sans-serif');
});

document.getElementById('VerdanaButton').addEventListener('click', function() {
  changeFont('Verdana' + ', sans-serif');
});

document.getElementById('OpenDyslexicButton').addEventListener('click', function() {
  changeFont('OpenDyslexia');
});

document.getElementById('TimesNewRomanButton').addEventListener('click', function() {
  changeFont('Times New Roman' + ', sans-serif');
});

// Function to change the body background color
function changeBodyColor(color) {
  document.body.style.backgroundColor = color;
}

// Event listener for radio button clicks
document.querySelectorAll('input[name="color"]').forEach(function(radio) {
  radio.addEventListener('click', function() {
    // Get the selected color from the radio button's ID
    const color = getComputedStyle(document.getElementById(radio.id)).getPropertyValue('accent-color');
    // Change the body background color to the selected color
    changeBodyColor(color);
  });
});

// Function to change the font size of all elements in the popup
function changeFontSize(fontSize) {
  const elements = document.querySelectorAll('.container, .container *');
  elements.forEach(function(element) {
    element.style.fontSize = fontSize + 'px';
  });
}

// Event listener for slider change
document.getElementById('TextSizeSlider').addEventListener('input', function() {
  // Get the value of the slider
  const fontSize = this.value * 0.3;
  // Change the font size of all elements in the popup
  changeFontSize(fontSize);
});
