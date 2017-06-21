var {Piece} = require('./Piece');

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

		//test data
		this.deck.push(new Piece('cloyster1', this.gameboard));
		this.deck.push(new Piece('cloyster2', this.gameboard));
		this.deck.push(new Piece('cloyster3', this.gameboard));
		this.deck.push(new Piece('cloyster4', this.gameboard));


		for(var i = 0; i < this.deck.length; i++){
			console.log(this.deck[i]);
		}
	}

	//Could easily make this simple, but fun challenge to do since I'm bored.
	determineExpansions(expansionNumber){
		//create algo to spit out a list of the numbers used.
	}


}

module.exports.Deck = Deck;