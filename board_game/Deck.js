class Deck{

	constructor(){
		this.init();
	}

	init(){
		this.deck = [];
		this.cardCount = 0;
	}	

	toString(){
		return "Not Implemented Yet":
	}

	populateDeck(expansionNumber){
		//determine which primes are in use, then populate deck
		var expansionList = this.determineExpansions(expansionNumber);
	}

	//Could easily make this simple, but fun challenge to do since I'm bored.
	determineExpansions(expansionNumber){
		//create algo to spit out a list of the numbers used.
	}


}

module.exports.Deck = Deck;