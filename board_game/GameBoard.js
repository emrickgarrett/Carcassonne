var {Deck} = require("./Deck");

class GameBoard{

	constructor(players, expansionNumber, canvas){
		this.deck = new Deck(this);
		this.players = players;
		this.expansionNumber = expansionNumber;
		this.canvas = canvas;
		this.init();

	}

	init(){
		this.expansionNumber = 1; //default
		this.deck.populateDeck(this.expansionNumber);
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
	render(){
		//TODO
		for(var i = 0; i < this.deck.deck.length; i++){
			var image = new Image();
			const canvas = this.canvas;
			const x = 70+70*i;
			const y = 69;
			image.onload = function(){
				canvas.drawImage(this, x, y);
			}
			image.src = this.deck.deck[i].img_src;
			this.canvas.drawImage(image, 70 + 70*i, 69);
		}
	}

}

export default GameBoard;