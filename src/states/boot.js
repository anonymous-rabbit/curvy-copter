var Game = {};

Game.Boot = function (game) {

};

Game.Boot.prototype = {
    init: function () {

    },
    preload: function() {
    },
    create: function() {
        this.physics.startSystem( Phaser.Physics.ARCADE );
	    this.state.start( 'preloader' );
    }


};
