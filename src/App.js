import React, { Component } from 'react';
import Hello from './Hello';


class App extends Component {

	constructor() {
		console.log("App.js");
		super();
		this.state = {
			name: ""
		}
	}
	
	componentWillMount() {
		console.log("App.js: componentWillMount()");
	}


	shouldComponentUpdate() {
		console.log("App.js: shouldComponentUpdate()");
		return true;	// continue to componentWillUpdate() -> render() -> componentDidUpdate()
		// return false; // no continue to componentWillUpdate, stop here
	}
	
	componentWillUpdate() {
		console.log("App.js: componentWillUpdate()");
	}
	
	
	nameChange(e) {
		this.setState({
			name: e.target.value
		})
		
	}
	
	render() {
		console.log("App.js: render()");
		return (
			<form>
	  
				Name: <input type="text" value={this.state.name} onChange={this.nameChange.bind(this)} />
	  
	  
				<Hello name={this.state.name} />
	  
			</form>
		);
	}
	
	componentDidMount() {
		console.log("App.js: componentDidMount()");
	}
	
	componentDidUpdate() {
		console.log("App.js: componentDidUpdate()");
	}

}

export default App;
