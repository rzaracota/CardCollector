import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigator from './components/navigator';
import Home from './components/home';
import Profile from './components/profile';

const pages = {
    'profile': <Profile />,
    'home': <Home />
};

var title = "Card Collector";

function H3(props) {
    return (<h3>{props.value}</h3>);
}

class App extends Component {
    clickHandler(page) {
	this.setState({ page: page });
    }

    componentDidMount() {
	if (this.state == null || this.state.page === undefined) {
	    console.log("Set state to home");
	    
	    this.setState({ page: "home" });
	}

	/*this.setState((prevState, props) => {
	    var newPage = "blueberry";
	    
	    if (props.path === '/') {
		newPage = "home";
	    } else {
		if (props.path.charAt(0) === '/') {
		    newPage = props.path.slice(1,
					       props.path.length);
		} else {
		    newPage = props.path;
		}
	    }
	    
	    return { page: newPage, title: title,
		     path: props.path };
	});*/
    }

    getNavItems() {
	var navItems = [];

	var keys = Object.keys(pages)
	
	for (var i = 0; i < keys.length; i++) {
	    navItems.push(keys[i]);
	}

	return navItems;
    }	
    
    render() {	
	var page, currentPage;

	if (this.state != null) {
	    page = pages[this.state.page];
	    currentPage = this.state.page;
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
		<Navigator activePage={currentPage} navItems={this.getNavItems()} clickHandler={this.clickHandler.bind(this)} />	    
		<div className="container-fluid">
		{page}
		<H3 value={this.state ? this.state.path : null} />
	    </div>
	    </div>
	);
    }
}

export default App;
