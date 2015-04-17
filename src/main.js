var game = new Phaser.Game(
	        /* szerokość */ 960,
	       /* wysokość */ 600,
	     /* renderer */ Phaser.AUTO,
	       /* rodzic */ 'game-wrap',
	        /* stan */ null,
	  /* przezroczystość */ true,
	    /* antialias */ true,
	/* konfiguracja fizyki */ null
);

game.global = {};

game.state.add('boot', Game.Boot);
game.state.add('preload', Game.Preload);
game.state.add('menu', Game.Splash);
game.state.add('play', Game.Play);

game.state.start('boot');
