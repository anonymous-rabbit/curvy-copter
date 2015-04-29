Game.Menu = function (game) {

};

Game.Menu.prototype = {
    create: function() {
        var gameName = this.add.text(this.world.centerX, this.world.centerY-250, 'CURVY COPTER', {
                font: "Squada One",
                fontSize: 90,
                fill: '#333'
        });
        gameName.anchor.setTo(0.5, 0.5);
        gameName.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
          var gameNameTween = this.add.tween(gameName);
		gameNameTween.to({
			angle: -gameName.angle
		},5000+Math.random()*5000,Phaser.Easing.Linear.None,true,0,1000,true);
    }
};
