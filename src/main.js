window.onload = function() {
var game = new Phaser.Game(
	        /* szerokość */ 960,
	       /* wysokość */ 600,
	     /* renderer */ Phaser.AUTO,
	       /* rodzic */ 'gameContainer',
	        /* stan */ null,
	  /* przezroczystość */ true,
	    /* antialias */ true,
	/* konfiguracja fizyki */ null
);

game.global = {};

// List of states
game.state.add('boot', Game.Boot);
game.state.add('preloader', Game.Preloader);
game.state.add('menu', Game.MainMenu);
game.state.add('play', Game.Play);

// Start boot state
game.state.start('boot');
};
