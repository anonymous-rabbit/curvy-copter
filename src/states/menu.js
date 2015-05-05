Game.Menu = function (game) {

};

Game.Menu.prototype = {
    create: function() {
        this.keySpacebar = this.input.keyboard.addKey( Phaser.Keyboard.SPACEBAR );
        var gameName = this.add.text(this.world.centerX, -150, 'CURVY COPTER', {
                font: "Squada One",
                fontSize: 100,
                fill: '#333'
        });
        gameName.anchor.setTo(0.5, 0.5);
        var gameNameTween = this.add.tween(gameName);
        gameNameTween.to({y: this.world.centerY-50}, 1000).easing(Phaser.Easing.Bounce.Out).start();

        var gameBegin = this.add.text(this.world.centerX, this.world.centerY+100, 'PRESS SPACEBAR TO BEGIN', {
            font: "Squada One",
            fontSize: 40,
            fill: '#333'
        });
        gameBegin.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
        gameBegin.anchor.setTo(0.5, 0.5);
        var gameBeginTween = this.add.tween(gameBegin);
        gameBeginTween.to({
            angle: -gameBegin.angle
		},200+Math.random()*200,Phaser.Easing.Linear.None,true,0,1000,true);
        this.keySpacebar.onDown.addOnce(this.start, this);

    },
    start: function() {
        this.state.start('Play');
},
};
