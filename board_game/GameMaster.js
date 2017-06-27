var {GameBoard} = require('./GameBoard');


class GameMaster {
	
	constructor(canvas, dom){
		this.canvas = canvas;
		this.dom = dom;
		this.players = [];
		this.curTurn = 0;
		this.arePlaying = true;

		this.gameBoard = new GameBoard(null, 1, canvas);
	}

	startGame(){
		this.gameBoard.placeAllPieces();
		this.gameBoard.render();
	}

	scoreGame(){

	}

	setCanvasSize(){
		//do stuff with the dom
	}

	gameLoop(){
		
	}

}

export default GameMaster;