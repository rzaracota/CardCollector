import React, { Component } from 'react';

function NElement(props) {
    return (<li><a href={props.target} className="text-capitalize">{props.target}</a></li>);
}

class Navigator extends Component {
    render() {
	var navItems = [];

	for (var i = 0; i < this.props.navItems.length; i++) {
	    navItems.push(<NElement target={this.props.navItems[i]} />);
	}
	
	return ( <div className="navbar navbar-inverse">
  <div className="container-fluid">
  <div className="navbar-header">
    <a className="navbar-brand">Card Collector</a>
  </div>
		 <ul className="nav navbar-nav navbar-right">
		 {navItems}
		 <li>Items: {navItems.length}</li>
		 <li><a href="#">Home</a></li>
		 <li><a href="#">Sign up now!</a></li>
		 <li><a href="#">Card Collections</a></li>
		 <li><a href="#">Browse Cards</a></li>
		 <li><a href="#">Browse People</a></li>
		 <li><a href="#">Log in</a></li>
		 <li><a href="#">Log out</a></li>
  </ul>
  </div>
</div>	);
    }
}

export default Navigator;
