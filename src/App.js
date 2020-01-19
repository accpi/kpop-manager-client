import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/home/Page'
import Artist from './pages/artists/Index'

import './App.css';

const routes = [
	{
		path: "/artists",
		sidebar_title: "Artists",
		component: () => <Artist />
	},
	{
		path: '/',
		sidebar_title: 'Home',
		component: () => <Home />
	}
];


function App() {
  	return (
    	<div>
			<BrowserRouter>
				<Switch>
					{routes.map((route, index) => (
						<Route
							key={ index }
							path={ route.path }
							exact={ route.exact }
							children={ route.component }
						/>
					))}
				</Switch>
			</BrowserRouter>
    	</div>
  	);
}

export default App;
