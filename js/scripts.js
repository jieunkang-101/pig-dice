// business logic
function Player(name) {
  this.name = name;
  this.totalScore = 0;
}

Player.prototype.updateScore = function() {
  this.totalScore += currentScore;
  return this.totalScore;
}

// user interface logic
var currentScore = 0;
var turn = 0;
var player1 = new Player($("#player1"));
var player2 = new Player($("#player2"));
console.log(player1);

$(document).ready(function() {
  // $("#starBtn").submit(function(event) {
    //   event.preventDefault();
    
    // });
    
  $("#rollBtn").click(function(event) {
    event.preventDefault();
    var diceNum = Math.floor(Math.random()*6 +1);
  $(".dice-number").text(diceNum);
    if (diceNum !== 1) {
      currentScore += diceNum;
      $(".current-score").text(currentScore);
    } else {
      currentScore = 0;
      // turn = 1;
    }
  });

  $("#holdBtn").click(function(event) {
    event.preventDefault();
    $(".total-score").text(player1.updateScore());
  });
});