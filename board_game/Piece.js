var {GameBoard} = require('./GameBoard');
/*
Slots: 1 = placeable, 0 = unplaceable
slotType (maybe make Enum for this?)
0 = unplaceable (river for example)
1 = grass
2 = road
3 = castle
4 = endpoint (for roads)
5 = cloyster
*/



class Piece{
	
	constructor(name, gameBoard, slots,img_src, slot_types, double_points, expansion_number){
		this.x = -999;
		this.y = -999;
		this.name = name;
		this.gameBoard = gameBoard;
		this.slots = slots;
		this.img_src = img_src;
		this.slot_types = slot_types;
		this.double_points = double_points;
		this.expansion_number = expansion_number;
		this.init();
	}

	init(){
		this.meepleList = [];
		this.rot = 0; //0 def, 1 90, 2 180, 3 270
		this.x = -1;
		this.y = -1;
		this.meeples = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
	}

	populateBasedOnName(){
		
	}

	toString(){
		return this.name + " : x: " + this.xx + " y: " + this.y + " Meeples: [ " + this.meepleList + " ]"
		+ " slots: " + this.slots + " slots_types: " + this.slots_types + " img_src: " + this.img_src 
		+ " double_points: " + this.double_points;
	}

	getPic(){
		return this.img_src;
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


module.exports.Piece = Piece;