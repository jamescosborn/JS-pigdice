var Player1 = require('./../js/pigdice.js').player1Module;
var Player2 = require('./../js/pigdice.js').player2Module;

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
    alert("Player One: A winner is you!")
    $("#outputLastRoll1").empty();
    $("#outputRoundScore1").empty();
    $("#outputTotalScore1").empty();
    $("#outputLastRoll2").empty();
    $("#outputRoundScore2").empty();
    $("#outputTotalScore2").empty();
    }
});

$("#button3").click(function(event) {
event.preventDefault();
var diceRoll = inputPlayer2.dice();
inputPlayer2.bust(diceRoll);
$("#outputLastRoll2").text("Last Roll: " + diceRoll);
$("#outputRoundScore2").text("Round Score: "+ inputPlayer2.roundScore);
});
// Hold button
$("#button4").click(function(event) {
event.preventDefault();
inputPlayer2.totalScore = inputPlayer2.totalScore + inputPlayer2.roundScore;
inputPlayer2.roundScore = 0;
$("#outputRoundScore2").text("Round Score: "+ inputPlayer2.roundScore);
$("#outputTotalScore2").text("Total: " + inputPlayer2.totalScore);
if (inputPlayer2.totalScore >= 100) {
  alert("Player 2: You're winner!")
  $("#outputLastRoll1").empty();
  $("#outputRoundScore1").empty();
  $("#outputTotalScore1").empty();
  $("#outputLastRoll2").empty();
  $("#outputRoundScore2").empty();
  $("#outputTotalScore2").empty();
  }
});
});
// Make a new function for other buttons
// Ask what Round Roll is, why does this callback work?

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' thousands of junkmail   you shall receive</p>');
  });
});
