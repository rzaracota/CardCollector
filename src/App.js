import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigator from './components/navigator';
import Profile from './components/profile';

const pages = {
    'profile': <Profile />,
    'home': <Profile />
};

var title = "Card Collector";

class App extends Component {
    componentDidMount() {
	this.setState((prevState, props) => {
	    return { page: "home", title: title };
	});
    }
    
    render() {	
	var page;

	if (this.state != null) {
	    page = pages[this.state.page];
	} else {
	    page = (<div className="button danger">
		    <h1>Error 404: Unknown page</h1>
		    </div>);
	}
	
	return (
		<div className="App">
		<div className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h2>Welcome to {title}</h2>
		</div>
		<Navigator />	    
		<div className="container-fluid">
		{page}
	    </div>
	    </div>
	);
    }
}

export default App;
