(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

exports.pigDiceModule = Pigdice;

},{}],2:[function(require,module,exports){
var Pigdice = require('./../js/pigdice.js').pigDiceModule;

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

},{"./../js/pigdice.js":1}]},{},[2]);
