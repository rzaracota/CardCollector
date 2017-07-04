import React, { Component } from 'react';

import CardDB from '../lib/card-database';

class CardBrief extends Component {
    render() {
	return (<p>{this.props.cards}</p>);
    }
}

class BrowseCards extends Component {
    render() {
	var db = new CardDB();
	var cards = db.getCards();

	if (cards) {
	    var cardBriefs = [];

	    for (var i = 0; i < cards.length; i++) {
		cardBriefs.push(<CardBrief card={cards[i]} />);
	    }
	    
	    return (<li>
		    {cardBriefs}
		    </li>);
	} else {
	    return (<h3>No cards in db</h3>);
	}
    }
}

export default BrowseCards;
