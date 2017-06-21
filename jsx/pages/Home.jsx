import React from 'react';
import ReactDOM from 'react-dom';

import PageHeader from '../components/PageHeader.jsx';

import GameBoard from '../../board_game/GameBoard.js';

class Home extends React.Component{
	constructor(){
		super();

		this.state = {
		};

	}

	componentDidMount(){
		var game = new GameBoard(null, 1, document.getElementById('game-canvas').getContext("2d"));
		game.render();
	}

	render(){
		return(
		<div>
			<PageHeader title="Main Menu" date="true"/>
			<div className='game-container'>
				<canvas id="game-canvas" width="1533px" height="900px"></canvas>
			</div>
		</div>
		);	
	}
}

export default Home;