import React from 'react';

import Breadcrumb from './common/Breadcrumb';
import NavBar from './common/NavBar';
import Routes from './Routes';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Breadcrumb />
				<Routes />
			</div>
		);
	}
}

export default App;
