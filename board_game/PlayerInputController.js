
class PlayerInputController{
	
	constructor(gameboard, canvas, context, dom){
		this.gameboard = gameboard;
		this.canvas = canvas;
		this.context = context;
		this.dom = dom;
		this.hovering = false;
		this.curObjectHover = null;
		this.dateObject = new Date();
		this.lastCheck = this.dateObject.getMilliseconds();
		this.registerController();

	}

	registerController(){
		this.canvas.addEventListener('mouseup', this.mouseClicked, false);
		this.dom.addEventListener('keyup', this.keyPressed);
		this.canvas.addEventListener('mousemove', this.mouseMoved);

		this.canvas.inputController = this;
		this.dom.inputController = this;
	}

	mouseClicked(event){
		//I believe this will be top left of dom, will have to confirm
		var mouseX = event.clientX;
		var mouseY = event.clientY;

		//Distance from top left/right of screen
		var canvasX = event.layerX;
		var canvasY = event.layerY;

		console.log("mouseXY: " + mouseX + " " + mouseY + " canvasXY: " + canvasX + " " + canvasY);

		if(this.inputController.curObjectHover !== null){
			console.log(this.inputController.curObjectHover);
		}
	}

	mouseMoved(event){
		//Need a way to determine if they are hovering a piece or not... maybe an array of
		//locations to keep track off?

		//Idk if necessary... just to stop the object from constantly blasting/causing lag
		if(this.inputController.dateObject.getMilliseconds() - this.inputController.lastCheck >= 300){
			return;
		}
		this.inputController.lastCheck = this.inputController.dateObject.getMilliseconds();


		//I believe this will be top left of dom, will have to confirm
		var mouseX = event.clientX;
		var mouseY = event.clientY;

		//Distance from top left/right of screen
		var canvasX = event.layerX;
		var canvasY = event.layerY;

		//Too spammy... may want this on at some point tho
		//console.log(event);

		//Simply loop through every game object based on mouse x/y and see if
		//it's hovering over an object. Shouldn't be too bad with ~50-100 objects.

		//pieces first
		var pieces = this.inputController.gameboard.pieces;

		for(var i = 0; i < pieces.length; i++){
			if(canvasX >= pieces[i].x*70 && canvasX <= pieces[i].x*70+70
				&& canvasY >= pieces[i].y*70 && canvasY <= pieces[i].y*70+70){
					this.inputController.hovering = true;
					this.inputController.curObjectHover = pieces[i];
					return;
			}
		}

		this.inputController.curObjectHover = null;
		this.inputController.hovering = false;

	}

	keyPressed(event){
		var key = event.key;
		console.log(key);
	}

	updateMouse(){
		if(this.hovering){
			//pointer
			this.canvas.style.cursor="pointer";
		}else{
			//default
			this.canvas.style.cursor="default";
		}
	}
}

module.exports.PlayerInputController = PlayerInputController;
