import React, { Component } from 'react';

import CardDB from '../lib/card-database';
import './card.css';

class CardBrief extends Component {
    render() {
	return (<div className="col-md-8 col-md-offset-2"><p className="card-brief">{this.props.card.name}: Lvl: {this.props.card.lvl}</p></div>);
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
	    
	    return (<div className="row">
		    {cardBriefs}
		    </div>);
	} else {
	    return (<h3>No cards in db</h3>);
	}
    }
}

export default BrowseCards;
