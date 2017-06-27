import React from 'react';
import ReactDOM from 'react-dom';

import PageHeader from '../components/PageHeader.jsx';

import GameMaster from '../../board_game/GameMaster.js';

class Home extends React.Component{
	constructor(){
		super();

		this.state = {
		};

	}

	componentDidMount(){
		var game = new GameMaster(document.getElementById('game-canvas'), null);
		game.startGame();
	}

	render(){
		return(
		<div>
			<PageHeader title="Main Menu" date="true"/>
			<div className='game-container'>
				<canvas id="game-canvas" width="1190px" height="900px"></canvas>
			</div>
		</div>
		);	
	}
}

export default Home;