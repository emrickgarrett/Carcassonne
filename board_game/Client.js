
//If I export this game to another area (such as Randybot) 
//Client will be invalid... making it work with Node.js Backend most likely

var {ClientCommand} = require("./ClientCommand");

class Client{
	
	constructor(){

		initConnection();
	}

	initConnection(){

	}

	//Not very secure... cheating prob easy af. Would want to look into this later...
	sendCommand(command){

		//TODO send command to server.
	}

}


module.exports.Client = Client;