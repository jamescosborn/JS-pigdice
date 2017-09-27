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
    } else {
    this.totalScore = this.roundScore + this.totalScore;
    }
  }
$(document).ready(function() {
  var inputPlayer = new Player ();
  $("#form1").submit(function(event) {
  event.preventDefault();
  var tryFirstRoll = inputPlayer.dice();
  inputPlayer.bust(tryFirstRoll);
  console.log(tryFirstRoll);
  console.log(inputPlayer.roundScore);
    $("#output").text(tryFirstRoll);
  });
});
// Make a new function for other buttons
// Ask what Round Roll is, why does this callback work?
