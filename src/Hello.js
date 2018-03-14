import React, { Component } from 'react';

class Hello extends Component {

	componentWillReceiveProps(props) {
		console.log("   Hello.js: componentWillReceiveProps(",props,")");
	}

	shouldComponentUpdate() {
		console.log("   Hello.js: shouldComponentUpdate()");
		return true;	// continue to componentWillUpdate() -> render() -> componentDidUpdate()
		// return false; // no continue to componentWillUpdate, stop here
	}
	
	componentWillUpdate() {
		console.log("   Hello.js: componentWillUpdate()");
	}
	
	render() {
		console.log("   Hello.js: render()");
		return (
			<div>Hello {this.props.name}</div>
		);
	}
	
	componentDidUpdate() {
		console.log("   Hello.js: componentDidUpdate()");
	}
	

}

export default Hello;
