import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { collectDispatcher } from './lib/backend';

import logo from './logo.svg';
import './App.css';

import state_manager from './lib/backend';

import Navigator from './components/navigator';
import Home from './components/home';
import Profile from './components/profile';
import BrowseCards from './components/browse-cards';
import CardInfo from './components/card-info';

let store = createStore(collectDispatcher);

const pages = {
    'profile': <Profile />,
    'home': <Home />,
    'browse-cards': <BrowseCards />,
    'card-info': <CardInfo />
};

const default_page = 'browse-cards';

var title = "Card Collector";

function H3(props) {
    return (<h3>{props.value}</h3>);
}

class App extends Component {
    clickHandler(props) {
	this.state.sm.test();

	this.setState({ page: props.page, props: props });
    }

    componentDidMount() {
	if (this.state == null || this.state.page === undefined) {
	    this.setState({ page: default_page, sm: new state_manager() });
	}
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
	    if (this.state.page === 'card-info') {
		page = <CardInfo card={this.state.props && this.state.props.card} />;
	    } else if (this.state.page === 'browse-cards') {
		page = <BrowseCards clickHandler={this.clickHandler.bind(this)}
		stateManager={this.state.sm} />;
	    } else {
		page = pages[this.state.page];
	    }

	    currentPage = this.state.page;
	} else {
	    page = (<div className="button danger">
		    <h1>Error 404: Unknown page</h1>
		    </div>);
	}

	return (
		<Provider store={store}>
		<div className="App">
		<div className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h2>Welcome to {title}</h2>
		</div>
		<Navigator activePage={currentPage} navItems={this.getNavItems()} clickHandler={this.clickHandler.bind(this)} />	    
		<div className="container-fluid">
		{page}
		<H3 value={this.state ? this.state.page : null} />
		</div>
		</div>
		</Provider>
	);
    }
}

export default App;
