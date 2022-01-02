import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToggleColorMode from './ToggleColorMode';

ReactDOM.render(
	<React.StrictMode>
		<ToggleColorMode>
			<App />
		</ToggleColorMode>
	</React.StrictMode>,
	document.getElementById('root')
);
