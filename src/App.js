import { observer } from 'mobx-react';
import React from "react";
import './App.css';
import Market from './components/Market';

const App = observer((props) => {
	return (
		<header className="App-header">
			{<Market />}
		</header>
	);
});

export default App;
