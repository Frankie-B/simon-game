var buttonColors = ['red', 'blue', 'green', 'yellow'];
var randomNumber = Math.floor(Math.random() * 4);
var gamePattern = [];

// Random number generating function
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  // Flashing animation and sounds for colours

  $('#' + randomChosenColor)
    .fadein(100)
    .fadeout(100)
    .fadein(100);

  var audio = new Audio('sounds/' + randomChosenColor + '.mp3');
  audio.play();
}
