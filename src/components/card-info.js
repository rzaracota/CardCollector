import React, { Component } from 'react';

import CardDB, { Card } from '../lib/card-database';

class CardInfo extends Component {
    render() {
	if (this.props.card == null) {
	    return (<h3 className="danger">Card not found</h3>);
	}
	
	return (
		<div className="row">
		<h3>Card Info</h3>
		<div className="col-md-2">
		<img src={this.props.card.icon} alt={"Icon for " + this.props.card.name} />
	    </div>
	    </div>
	);
    }
}

export default CardInfo;
