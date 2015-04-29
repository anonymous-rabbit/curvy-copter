window.onload = function() {
var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
var gameRatio = innerWidth/innerHeight;
var game = new Phaser.Game(Math.ceil(640*gameRatio), 640, Phaser.AUTO, 'gameContainer');

game.global = {};

// List of states
game.state.add('Boot', Game.Boot);
game.state.add('Preloader', Game.Preloader);
game.state.add('Menu', Game.Menu);
game.state.add('Play', Game.Play);

// Start boot state
game.state.start('Boot');
};
