const {Player} = require('./Player');

class Meeple{
	
	constructor(player){
		this.player = player;
	}

	toString(){
		return "I am owned by : " + this.player;
	}

	

}

module.exports.Meeple = Meeple;