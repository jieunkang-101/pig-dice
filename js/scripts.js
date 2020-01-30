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
        currentScore = 0;
        player1.getCurrentScore(diceNum);
        player1.getTotalScore(currentScore);
        $("#player1-current-score").text(player1.currentScore);
        $("#player1-total-score").text(player1.totalScore);
      }
    });
  });

  $("#holdBtn").click(function(event){
    event.preventDefault();
    // var diceNum = Math.floor(Math.random() * 6 + 1);
    
    // player1.totalScore += currentScore;
    $("#player1-total-score").text(player1.totalScore);
    currentScore = 0;
    $("#player1-current-score").text(player1.currentScore);
    console.log(palyer1.currentScore);
    console.log(player1.totalScore);
   });



//         $("#holdBtn").click(function (event) {
//           event.preventDefault();
//           player1.totalScore += currentScore;
//           $("#player1-total-score").text(player1.totalScore);
//           currentScore = 0;
//           turn = 1;
//         });
//       } else {
//         currentScore = 0;
//         $(".current-score").text(currentScore);
//         turn = 1;
//       }
      
//     } else {
//       var diceNum = Math.floor(Math.random() * 6 + 1);
//       $("#player2-dice").text(diceNum);
//       if (diceNum !== 1) {
//         currentScore += diceNum;
//         $("#player2-current-score").text(currentScore);
//         $("#holdBtn").click(function (event) {
//           event.preventDefault();
//           player2.totalScore += currentScore;
//           $("#player2-total-score").text(player2.totalScore);
//           currentScore = 0;
//           turn = 0;
//           });
//       } else {
//           currentScore = 0;
//           $(".current-score").text(currentScore);
//           turn=0;
//         } 
//     };
 
// });