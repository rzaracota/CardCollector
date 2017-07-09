import React, { Component } from 'react';

import CardDB from '../lib/card-database';
import './card.css';

import VisibleCardList from './card-list-container';

class BrowseCards extends Component {
    constructor(props) {
	super();

	this.stateManager = props.stateManager;	
    }

    componentDidMount() {
    }
    
    test(card) {
	this.props.clickHandler({ page: 'card-info', card: card });
    }

    render() {
	return <VisibleCardList />;
    }
}

export default BrowseCards;
