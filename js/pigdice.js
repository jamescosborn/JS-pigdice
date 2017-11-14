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
