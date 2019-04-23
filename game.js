var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];

// Starting the game
var started = false;
var level = 0;

$(document).keydown(function() {
  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }
});

// Detecting user clicked buttons

$('.btn').click(function() {
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {
  // increasing user level
  level++;
  // Updating the Level title
  $('#level-title').text('level ' + level);

  // Random number generating function for patterns.
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Animation for buttons
  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

// Playing Sound

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

// Background animation for buttons
function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');

  setTimeout(function() {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}
