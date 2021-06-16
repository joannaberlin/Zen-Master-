class Obstacle {
    constructor(image) {
        this.image = image;
        this.x = (Math.random() * height);
        this.y = 0;
        this.width = 50;
        this.height = 50;
		//this.playerScore = 1000;
    }

    collision(playerInfo) {
		const obstacleX = this.x + this.width / 2;
		const playerX = playerInfo.x + playerInfo.width / 2;

		if ( Math.abs(obstacleX - playerX) < 50 && Math.abs(this.y - playerInfo.y) < 50) {
			//change score here
			game.score -= 50;
		    console.log(game.score);
			return true 
		} else {
			return false
		}
	}

    draw() { 
        this.y++;
		image(this.image, this.x, this.y, this.width, this.height);
    }
}

//if collision happen than player.score - 50

//in Thought class => collision =>if condition with game.player.score += 30;
