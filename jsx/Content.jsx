import React from 'react';
import ReactDOM from 'react-dom';

import DefaultHeader from './components/header_components/default_header.jsx';

class Content extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<DefaultHeader/>
			<div className='page_content'>	
				{this.props.children}
			</div>
		</div>
		);	
	}
}

export default Content;