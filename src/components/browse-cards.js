import React, { Component } from 'react';

import CardDB from '../lib/card-database';
import './card.css';

class CardBrief extends Component {
    render() {
	return (<div className="col-md-8 col-md-offset-2"><div className="row card-brief" onClick={() => this.props.clickHandler({ page: 'card-info', card: this.props.card}) }><div className="col-md-1"><img className="image-responsive browse-image" src={this.props.card.icon} alt="alt text" /></div><div className="col-md-11"><p className="text-left">{this.props.itemNum}: {this.props.card.name}: Lvl: {this.props.card.lvl}</p></div></div></div>);
    }
}

class CardList extends Component {
    componentDidMount() {
	this.setState({ cards: this.props.cards });
    }
    
    render() {
	if (this.state && this.state.cards) {
	    var cards = this.state.cards;
	    var cardBriefs = [];

	    for (var i = 0; i < cards.length; i++) {
		cardBriefs.push(<CardBrief key={i} itemNum={i + 1} card={cards[i]} clickHandler={this.props.clickHandler} />);
	    }
	    
	    return (<div className="row">
		    {cardBriefs}
		    </div>);
	} else {
	    return (<h3>No cards in db</h3>);
	}
    }
}

class BrowseCards extends Component {
    constructor(props) {
	super();

	this.stateManager = props.stateManager;

	
    }
    
    test(card) {
	this.props.clickHandler({ page: 'card-info', card: card });
    }

    render() {
	var db = new CardDB();
	var cards = db.getCards();

	return <CardList cards={cards}
	clickHandler={this.props.clickHandler} />;
    }
}

export default BrowseCards;
