function Player(roundScore, totalScore) {
  this.roundScore = 0;
  this.totalScore = 0;

}
// Player.prototype.to randomize first roll
Player.prototype.dice = function () {
  var roll1= Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  this.roundScore += roll1;
  return roll1;
}
Player.prototype.bust = function (roundRoll) {
  if (roundRoll === 1) {
    this.roundScore = 0;
    }
  }
$(document).ready(function() {
  var inputPlayer = new Player ();
  // Submit Button
  $("#button1").click(function(event) {
  event.preventDefault();
  var diceRoll = inputPlayer.dice();
  inputPlayer.bust(diceRoll);
  console.log(diceRoll);
  console.log(inputPlayer.roundScore);
  console.log(inputPlayer.totalScore);
  $("#output2").text("Round Score: "+ inputPlayer.roundScore);
  $("#output").text("Last Roll: " + diceRoll);
  });
  // Hold button
  $("#button2").click(function(event) {
    event.preventDefault();
    inputPlayer.totalScore = inputPlayer.totalScore + inputPlayer.roundScore;
    inputPlayer.roundScore = 0;
    $("#output2").text("Round Score: "+ inputPlayer.roundScore);
    $("#output3").text("Total: " + inputPlayer.totalScore);
    console.log(inputPlayer.totalScore);
    if (inputPlayer.totalScore >= 100) {
      alert("You are winner!")
    }
});
});
// Make a new function for other buttons
// Ask what Round Roll is, why does this callback work?
