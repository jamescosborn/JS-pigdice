var Player1 = require('./../js/pigdice.js').player1Module;

describe('Pigdice', function() {
  it('should test whether the player has rolled a number', function() {
    var player = new Player1(0,0)
    expect(player.roundScore).toEqual(0)
  });
});
