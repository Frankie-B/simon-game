var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];

// Random number generating function
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Animation for buttons
  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
  audio.play();
}

// Detecting user clicked buttons

$('.btn').click(function() {
  var userChosenColours = $('this').attr('id');

  userClickedPattern.push(userChosenColours);
  console.log(userClickedPattern);
});
