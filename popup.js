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