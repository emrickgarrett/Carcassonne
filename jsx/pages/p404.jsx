import React from 'react';
import ReactDOM from 'react-dom';

class p404 extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<h2>Page Does Not Exist!</h2>
			<p>Whoops! The page you are looking for could not be found!</p>
		</div>
		);	
	}
}

export default p404;