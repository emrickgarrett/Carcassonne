var {Deck} = require("./Deck");

class GameBoard{

	constructor(players, expansionNumber, canvas){
		this.deck = new Deck(this);
		this.players = players;
		this.expansionNumber = expansionNumber;
		this.canvas = canvas; // The actual Canvas. Use this for height/width
		this.context = canvas.getContext("2d"); // Used for Drawing
		this.init();

	}

	init(){
		this.expansionNumber = 1; //default
		this.deck.populateDeck(this.expansionNumber);
		this.boardSize = 225; // grow each time a piece is placed.
		this.board = Array(this.boardSize).fill(-1);
		this.boardHeight = Math.sqrt(this.boardSize);
		this.pieces = [];
	}

	placeCard(x, y, rot, piece){
		if(this.isValidPosition(x, y, rot, piece)){
			piece.place(x, y, rot);
			this.board[x+y*this.boardHeight] = piece;
			this.pieces.push(piece);
			return piece;
		}

		return -1;
	}

	isValidPosition(x, y, rot, piece){
		if(this.board[x+y*this.boardHeight] === -1){
			return true;
		}
		return false;
	}

	getBoard(){
		return this.board;
	}

	//render the board onto the canvas
	render(){
		for(var i = 0; i < this.pieces.length; i++){
			var image = new Image();
			const context = this.context;
			const canvas = this.canvas;
			const x = this.pieces[i].x*70+70;
			const y = this.pieces[i].y*69+69;
			const rot = this.pieces[i].rot
			image.onload = function(){
				//context.drawImage(this, x, y);
				context.save();
				context.translate(x, y);
				context.rotate(rot * (Math.PI/180));
				context.drawImage(this, -(this.width/2), -(this.height/2));
				context.restore();
			}
			image.src = this.pieces[i].img_src;

			//setup rotation
			
		}
	}

	placeAllPieces(){
		const width = this.canvas.width;
		var x = 0;
		var y = 0;
		for(var i = 0; i < this.deck.deck.length; i++){
			if(x >= this.boardHeight){
				y++;
				x = 0;
			}
			if(this.placeCard(x, y, 0, this.deck.deck[i]) !== -1){
				x++;
			}else{
				i--;
				x = 0;
				y++;
			}
		}

		this.deck.printDeck();
	}

}

export default GameBoard;