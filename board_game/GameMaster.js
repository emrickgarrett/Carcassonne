var {GameBoard} = require('./GameBoard');
var {PlayerInputController} = require('./PlayerInputController');

//Multiplayer Specific files... if exported to another enviro these will need to be modified/replaced.
var {Client} = require('./multiplayer_files/Client');
var {ClientCommand} = require('./multiplayer_files/ClientCommand');

//Gamemaster controls LOCAL logic/controls. Server is the overall gamemaster.
class GameMaster {
	
	constructor(canvas, dom){
		this.canvas = canvas;
		this.context =  canvas.getContext("2d");
		this.dom = dom;
		this.players = [];
		this.curTurn = 0;
		this.arePlaying = true;


		this.gameBoard = new GameBoard(null, 1, this.canvas, this.context);
		this.playerInputController = new PlayerInputController(this.canvas, this.context, this.dom);
	}

	startGame(){
		this.gameBoard.placeAllPieces();
		this.gameBoard.render();
	}


	setCanvasSize(){
		//do stuff with the dom
	}

	gameLoop(){
		//No turn logic/placing logic for EVERYONE, just the local player. Game loop will have to be server side
	}

}

export default GameMaster;