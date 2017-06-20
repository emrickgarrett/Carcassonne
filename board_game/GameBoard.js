var {Deck} = require("./Deck");

class GameBoard{

	constructor(players, expansionNumber){
		this.deck = new Deck();
		this.players = players;
		this.expansionNumber = expansionNumber;
		this.init();

	}

	init(){
		this.expansionNumber = 1; //default
		this.deck.populate(expansionNumber);
		this.board = [];
		this.boardSize = 10; // grow each time a piece is placed.
	}

	placeCard(x, y, rot, piece){
		if(validPosition(x, y, rot, piece)){
			piece.place(x, y, rot);
			this.board[x+y*height] = piece;
			return piece;
		}

		return -1;
	}

	getBoard(){
		return this.board;
	}

	//render the board onto the canvas
	render(canvas){
		//TODO
	}

}

module.exports.GameBoard = GameBoard;