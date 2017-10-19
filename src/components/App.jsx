import React from 'react';

import NavBar from './common/NavBar';
import Routes from './Routes';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Routes />
			</div>
		);
	}
}

export default App;
