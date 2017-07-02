import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App path={window.location.pathname} />,
		document.getElementById('root'));
registerServiceWorker();
