"use strict";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

(async () => {
    function LoadImage(imageSrc) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = imageSrc;
        });
    }

let playerImage = await LoadImage("Player.png");

class Vector2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Player {
	constructor(image, x, y) {
		this.image = image;
		this.position = new Vector2(x, y);
	}
	update() {
		if (true) {} else {}
		context.drawImage(
			this.image, 
			this.position.x, 
			this.position.y
			);
	}
}

var player1 = new Player(playerImage, 10, 10);
player1.update();

})()