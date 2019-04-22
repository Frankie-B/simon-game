var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];

// Random number generating function
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}
