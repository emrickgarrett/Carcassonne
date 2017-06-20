import React from 'react';
import ReactDOM from 'react-dom';

import PageHeader from '../components/PageHeader.jsx';

class Home extends React.Component{
	constructor(){
		super();

		this.state = {
		};
	}

	render(){
		return(
		<div>
			<PageHeader title="Main Menu" date="true"/>
			<div className='game-container'>
	
			</div>
		</div>
		);	
	}
}

export default Home;