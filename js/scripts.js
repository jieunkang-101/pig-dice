// business logic
function Player(name) {
  this.name = name;
  this.currentScore = 0;
  this.totalScore = 0;
}

var diceNum = Math.floor(Math.random() * 6 + 1);

Player.prototype.getCurrentScore = function(diceNum) {
  this.currentScore += diceNum;
  this.currentScore;
}

Player.prototype.getTotalScore = function() {
  this.totalScore += currentScore;
}


// user interface logic
var currentScore = 0;
var turn = 0;
var player1 = new Player();
var player2 = "";

$(document).ready(function () {
  $("#form1").submit(function(event) {
    event.preventDefault();
    player1 = new Player($("input#player1").val());
    player2 = new Player($("input#player2").val());
    $("#player1name").text(player1.name);
    $("#player2name").text(player2.name);
  });

  
  $("#rollBtn").click(function(event) {
    event.preventDefault();
    var diceNum = Math.floor(Math.random() * 6 + 1);
    $("#player1-dice").text(diceNum);
    if (diceNum !== 1) {
      player1.getCurrentScore(diceNum);
      $("#player1-current-score").text(player1.currentScore);
    } else {
      player1.currentScore = 0;
      $("#player1-total-score").text(player1.totalScore);
    }
  });
  $("#holdBtn").click(function(event){
    event.preventDefault();
    currentScore = player1.currentScore;
    player1.getTotalScore(this.currentScore);
    $("#player1-total-score").text(player1.totalScore);
  });
});




