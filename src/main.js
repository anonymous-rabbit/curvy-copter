window.onload = function() {
var game = new Phaser.Game(960, 600, Phaser.AUTO, 'gameContainer');

game.global = {};

// List of states
game.state.add('Boot', Game.Boot);
game.state.add('Preloader', Game.Preloader);
game.state.add('Menu', Game.Menu);
game.state.add('Play', Game.Play);

// Start boot state
game.state.start('Boot');
};
