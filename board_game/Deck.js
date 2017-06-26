var {Piece} = require('./Piece');

var default_tileset = require('./default_tileset.json');
var image_path = "board_game/img/"

class Deck{

	constructor(gameboard){
		this.init();
		this.gameboard = gameboard;
	}

	init(){
		this.deck = [];
		this.cardCount = 0;
	}	

	toString(){
		return "Not Implemented Yet";
	}

	populateDeck(expansionNumber){
		//determine which primes are in use, then populate deck
		var expansionList = this.determineExpansions(expansionNumber);

		//based on type, populate some variables.
		//determine slots, img_src, expansion pack 
		var tiles = default_tileset[0].defaultTiles;

		for(var i = 0; i < tiles.length; i++){
			for(var j = 0; j < tiles[i].count; j++){
				this.deck.push(new Piece(tiles[i].tileName, this.gameboard, tiles[i].slots, 
					image_path + tiles[i].imgSrc, tiles[i].slotType, 
					tiles[i].doublePoints, expansionNumber));
			}
		}


		this.expansion_pack = -1; // Will decorate outline of card in hand to show which expansion it's from

		
	}

	//Could easily make this simple, but fun challenge to do since I'm bored.
	determineExpansions(expansionNumber){
		//create algo to spit out a list of the numbers used.
		return 1;
	}

	printDeck(){
		for(var i = 0; i < this.deck.length; i++){
			console.log(this.deck[i]);
		}
	}


}

module.exports.Deck = Deck;