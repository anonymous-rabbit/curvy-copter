Game.Preloader = function (game) {
};

Game.Preloader.prototype = {
    preload: function() {
        var loadingLabel = this.add.text(this.world.centerX, this.world.centerY, 'LOADING...', {
            font: "Squada One",
            fontSize: 200,
            fill: '#333'
        });
        loadingLabel.anchor.setTo(0.5, 0.5);
        this.load.audio( 'music', [ 'assets/audio/bckgrnd.mp3', 'assets/audio/bckgrnd.ogg' ] );
        var square = this.add.bitmapData( 20, 20 );
	square.context.fillStyle = '#333';
	square.context.fillRect( 0, 0, 20, 20 );
	this.cache.addBitmapData( 'square', square );
    },

    create: function() {

        this.music = this.add.audio( 'music', 0.5, true );
	    this.music.play();
        this.time.events.add( Phaser.Timer.SECOND* 0.5, function() {
                this.state.start('Menu');
			}, this );
    },

    update: function() {
    }
}
