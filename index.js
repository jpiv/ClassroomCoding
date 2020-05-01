import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'

document.addEventListener('readystatechange', (event) => {
	if (document.readyState === 'interactive') {
		const container = document.getElementById('root');
		ReactDOM.render(React.createElement(Routes), container);
	}
});
