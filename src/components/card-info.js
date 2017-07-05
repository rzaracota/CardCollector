import React, { Component } from 'react';

import CardDB, { Card } from '../lib/card-database';

function Attrib(props) {
    return (<div className="row"><div className="col-md-2"><h4 className="text-right text-capitalize card-attrib-label">{props.attrib}</h4></div><div className="col-md-4">
	    <p className="text-left card-attrib-text">{props.value}</p></div></div>);

}

function getAttribs(card) {
    var attribs = [];

    var keys = Object.keys(card);

    delete keys[keys.indexOf('icon')];
    
    for (var i = 0; i < keys.length; i++) {
	attribs.push(<Attrib key={i} attrib={keys[i]} value={card[keys[i]]} />);
    }
    
    return attribs;
}

class CardInfo extends Component {
    render() {
	if (this.props.card == null) {
	    return (<h3 className="danger">Card not found</h3>);
	}

	return (
		<div className="row">
		<div className="row">
		<div className="col-md-12">
		<h3>Card Info</h3>
		</div>
		</div>
		<div className="row">
		<div className="col-md-8 col-md-offset-2">
		<div className="row">
		<div className="col-md-4">
		<img className="img-responsive" src={this.props.card.icon} alt={"Icon for " + this.props.card.name} /></div>
		<div className="col-md-8 card-brief">
		{getAttribs(this.props.card)}
	    </div>
	    </div>
	    </div>
		</div>
		</div>
	);
    }
}

export default CardInfo;
