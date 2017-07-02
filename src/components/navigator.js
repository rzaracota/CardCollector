import React, { Component } from 'react';

class Navigator extends Component {
    render() {
	return ( <div className="navbar navbar-inverse">
  <div className="container-fluid">
  <div className="navbar-header">
    <a className="navbar-brand">Card Collector</a>
  </div>
  <ul className="nav navbar-nav navbar-right">    
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
