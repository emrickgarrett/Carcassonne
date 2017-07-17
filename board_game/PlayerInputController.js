
class PlayerInputController{
	
	constructor(canvas, context, dom){
		this.canvas = canvas;
		this.context = context;
		this.dom = dom;

		this.registerController();

	}

	registerController(){
		this.canvas.addEventListener('mouseup', this.mouseClicked, false);
		this.dom.addEventListener('keyup', this.keyPressed);
		this.canvas.addEventListener('mousemove', this.mouseMoved);
	}

	mouseClicked(event){
		//I believe this will be top left of dom, will have to confirm
		var mouseX = event.clientX;
		var mouseY = event.clientY;

		//Distance from top left/right of screen
		var canvasX = event.layerX;
		var canvasY = event.layerY;

		console.log("mouseXY: " + mouseX + " " + mouseY + " canvasXY: " + canvasX + " " + canvasY);
	}

	mouseMoved(event){
		//Need a way to determine if they are hovering a piece or not... maybe an array of
		//locations to keep track off?

		//I believe this will be top left of dom, will have to confirm
		var mouseX = event.clientX;
		var mouseY = event.clientY;

		//Distance from top left/right of screen
		var canvasX = event.layerX;
		var canvasY = event.layerY;

		//Too spammy... may want this on at some point tho
		//console.log(event);
	}

	keyPressed(event){
		var key = event.key;
		console.log(key);
	}
}

module.exports.PlayerInputController = PlayerInputController;
