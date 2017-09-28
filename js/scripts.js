function Player1(roundScore, totalScore) {
  this.roundScore = 0;
  this.totalScore = 0;
}
Player1.prototype.dice = function () {
  var roll1= Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  this.roundScore += roll1;
  return roll1;
}
Player1.prototype.bust = function (roundRoll) {
  if (roundRoll === 1) {
    this.roundScore = 0;
    }
}

function Player2(roundScore, totalScore) {
  this.roundScore = 0;
  this.totalScore = 0;
}
Player2.prototype.dice = function () {
  var roll1= Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  this.roundScore += roll1;
  return roll1;
}
Player2.prototype.bust = function (roundRoll) {
  if (roundRoll === 1) {
    this.roundScore = 0;
    }
  }
$(document).ready(function() {
  var inputPlayer = new Player1 ();
  var inputPlayer2 = new Player2 ();
  // Submit Button
  $("#button1").click(function(event) {
    event.preventDefault();
    var diceRoll = inputPlayer.dice();
    inputPlayer.bust(diceRoll);
    $("#outputLastRoll1").text("Last Roll: " + diceRoll);
    $("#outputRoundScore1").text("Round Score: "+ inputPlayer.roundScore);
    });
  // Hold button
  $("#button2").click(function(event) {
    event.preventDefault();
    inputPlayer.totalScore = inputPlayer.totalScore + inputPlayer.roundScore;
    inputPlayer.roundScore = 0;
    $("#outputRoundScore1").text("Round Score: "+ inputPlayer.roundScore);
    $("#outputTotalScore1").text("Total: " + inputPlayer.totalScore);
    if (inputPlayer.totalScore >= 100) {
      alert("You are winner!")
      }
});
});
// Make a new function for other buttons
// Ask what Round Roll is, why does this callback work?
