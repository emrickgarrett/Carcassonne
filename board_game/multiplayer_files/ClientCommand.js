
class ClientCommand{
	
	constructor(input){
		this.player = player;
		this.input = input;
	}

	toJSONObject(){
		return {"player": this.player, "input": this.input}
	}

}

module.exports.ClientCommand = ClientCommand;