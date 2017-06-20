var {GameBoard} = require('./GameBoard');

class Piece{
	
	constructor(type, img_src, gameBoard){
		this.x = -999;
		this.y = -999;
		this.type = type;
		this.img_src = img_src;
		this.gameBoard = gameBoard;
		this.populateBasedOnType();
		this.init();
	}

	init(){
		this.meepleList = [];
		this.rot = 0; //0 def, 1 90, 2 180, 3 270
		this.x = -1;
		this.y = -1;
		this.meeples = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
	}

	populateBasedOnType(){
		//based on type, populate some variables.
		//determine slots, img_src, expansion pack 
		this.slots = [];
		this.img_src = '';
		this.expansion_pack = -1; // Will decorate outline of card in hand to show which expansion it's from
		switch(type){
			case 0:
				return;
			case 1:
				return;
			default:
				return;
		}
	}

	toString(){
		return type + " : x: " + x + " y: " + y + " Meeples: [ " + meepleList + " ]";
	}

	getPic(){
		return "../img/img_src";
	}

	addMeeple(meeple, slot){
		if(this.meeples[slot] === -1){

			if(this.isValidPlacementForMeeple(slot)){

				this.meeples[slot] = meeple;
				return this.meeples[slot];

			}
		}

		return -1;
	}

	isValidPlacementForMeeple(slot){
		var board = this.gameBoard.getBoard();// Use this to check surrounding pieces
	}

	place(x, y, rot){
		this.x = x;
		this.y = y;
		this.rot = rot;
	}
}


module.exports.CharacterClass = CharacterClass;