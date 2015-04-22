window.onload = function() {
var game = new Phaser.Game(960, 600, Phaser.AUTO, 'gameContainer');

game.global = {};

// List of states
game.state.add('boot', Game.Boot);
game.state.add('preloader', Game.Preloader);
game.state.add('menu', Game.MainMenu);
game.state.add('play', Game.Play);

// Start boot state
game.state.start('boot');
};
