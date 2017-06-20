const {Meeple} = require('./Meeple');

class Player{
	
	constructor(name, color){
		this.name = name;
		this.color = color;
		

		this.init();
	}

	init(){
		this.points = 0;
		this.meepleList = [];

		for(var i = 0; i < 7; i++){
			this.meepleList.push(new Meeple(this));
		}
	}

	toString(){
		return name + ", " + color + " has " + points + " points and " 
		+ meepleList.length + " meeples left.";
	}

	returnMeeple(meeple, score){
		this.score += score;
		this.meepleList.push(meeple);
	}

	placeMeeple(piece){
		if(this.meepleList.length > 0){
			piece.addMeeple(this.meepleList[this.meepleList.length]);
			this.meepleList.remove(this.meepleList.length-1);
		}
	}


}

module.exports.Player = Player;