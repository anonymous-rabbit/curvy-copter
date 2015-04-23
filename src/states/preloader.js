Game.Preloader = function (game) {
};

Game.Preloader.prototype = {
    preload: function() {
        var loadingLabel = this.add.text(this.world.centerX, 150, 'Loading...', {
            fontSize: 20,
            fill: '#333'
        });
        loadingLabel.anchor.setTo(0.5, 0.5);
        var progressBar = this.add.sprite(this.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(progressBar);
        this.load.audio( 'music', [ 'assets/audio/bckgrnd.mp3', 'assets/audio/bckgrnd.ogg' ] );
    },

    create: function() {
        this.music = this.add.audio( 'music', 0.5, true );
	    this.music.play();
        this.state.start('Menu');
    },

    update: function() {
    }
}
