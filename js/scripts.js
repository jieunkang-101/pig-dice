// business logic
function Player(name) {
  this.name = name;
  this.currentScore = 0;
  this.totalScore = 0;
  this.turn = 0;
}

var diceNum = Math.floor(Math.random() * 6 + 1);


Player.prototype.getCurrentScore = function(diceNum) {
  this.currentScore += diceNum;
}

Player.prototype.getTotalScore = function() {
  this.totalScore += currentScore;
}

Player.prototype.checkWinner = function() {
  if (this.totalScore >= 100) {
    alert(player1.name + ", you win!");
  }
}



// user interface logic
var turn = 0;
var player1 = new Player();
var player2 = new Player();

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

    if (turn === 0) {
      $("#player1-dice").text(diceNum);
      if (diceNum !== 1) {
        player1.getCurrentScore(diceNum);
        $("#player1-current-score").text(player1.currentScore); 
      } else {
        player1.currentScore = 0;
        $("#player1-total-score").text(player1.totalScore);
        turn = 1;
        $("#player1-current-score").text(""); 
      } 
    } else {
      $("#player2-dice").text(diceNum);
      if (diceNum !== 1) {
        player2.getCurrentScore(diceNum);
        $("#player2-current-score").text(player2.currentScore); 
      } else {
        player2.currentScore = 0;
        $("#player2-total-score").text(player2.totalScore);
        turn = 0;
        $("#player2-current-score").text("");
      } 
    }
  });

  $("#holdBtn").click(function(event){
    event.preventDefault();
    if (turn === 0) {
      currentScore = player1.currentScore;
      player1.getTotalScore(this.currentScore);
      $("#player1-total-score").text(player1.totalScore);
      player1.checkWinner();
      turn = 1;
      $("#player1-current-score").text("");
    } else {
      currentScore = player2.currentScore;
      player2.getTotalScore(this.currentScore);
      $("#player2-total-score").text(player2.totalScore);
      player2.checkWinner();
      turn = 0;
      $("#player2-current-score").text(""); 
    }
  });


  $("#restartBtn").click(function(event){
    event.preventDefault();
    var diceNum = 0;
    var currentScore = 0;
    var totalScore = 0;
    $("input#player1").val("");
    $("input#player2").val("");
    $("#player1-dice").text(diceNum);
    $("#player2-dice").text(diceNum);
    $("#player1-current-score").text(currentScore);
    $("#player2-current-score").text(currentScore);
    $("#player1-total-score").text(totalScore);
    $("#player2-total-score").text(totalScore);
  });
});