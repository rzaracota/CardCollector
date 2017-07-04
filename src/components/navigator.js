import React, { Component } from 'react';
import './navigator.css';

function clickTest(page) {
    window.location.href = "/";
    console.log("onClick page: " + page);
}

function NElement(props) {
    var names = "button-inverse text-capitalize";

    if (props.isActive) {
	names += " active";
    }
    
    return (<li><button className={names} onClick={() => props.clickHandler(props.target)}>{props.target}</button></li>);
}

class Navigator extends Component {
    render() {
	var navItems = [];

	console.log("this.props.activePage: " + this.props.activePage);
	
	for (var i = 0; i < this.props.navItems.length; i++) {
	    var isActive = (this.props.activePage === this.props.navItems[i]) ? true : false;

	    console.log("isActive: " + isActive);
	    
	    navItems.push(<NElement key={i} isActive={isActive} target={this.props.navItems[i]} clickHandler={this.props.clickHandler} />);
	}
	
	return ( <div className="navbar navbar-inverse">
  <div className="container-fluid">
  <div className="navbar-header">
    <a className="navbar-brand">Card Collector</a>
  </div>
		 <ul className="nav navbar-nav navbar-right">
		 {navItems}
  </ul>
  </div>
</div>	);
    }
}

export default Navigator;
