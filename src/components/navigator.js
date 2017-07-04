import React, { Component } from 'react';
import './navigator.css';

function clickTest() {
    window.location.href = "/";
}

function NElement(props) {
    console.log("props.isActive: " + props.isActive);
    console.log("props.target: " + props.target);
    
    return (<li className={(props.isActive) ? "active" : null}><button className="button-inverse text-capitalize" onClick={() => clickTest(props.target)}>{props.target}</button></li>);
}

class Navigator extends Component {
    render() {
	var navItems = [];

	console.log("this.props.activePage: " + this.props.activePage);
	
	for (var i = 0; i < this.props.navItems.length; i++) {
	    var isActive = (this.props.activePage === this.props.navItems[i]) ? true : false;
	    
	    navItems.push(<NElement isActive={isActive} target={this.props.navItems[i]} />);
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
