import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class DefaultHeader extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div className="header">
			<Link to='home'>Carcassonne</Link>
			<Navigation/>
		</div>
		);	
	}


}

class Navigation extends React.Component{
	constructor(){
		super();
	}

	componentDidMount(){

		//Add animation to buttons so that the animation doesn't run when page loads
		var items = this.refs.nav_list.getElementsByTagName("li");
		for(var i = 0; i < items.length; i++){
			items[i].childNodes[0].onmouseout = function(){
				this.className = "header_list_anim";
			};
		}
	}

	render(){
		return(
			<ul ref="nav_list">
				<li><Link to='home'>Home</Link></li>
			</ul>
		);
	}


}

export default DefaultHeader;