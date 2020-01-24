import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/home/Page'
import Artist from './pages/artists/Page'
import Group from './pages/groups/Page'
import Footer from './components/Footer'

import './App.css';

const routes = [
	{
		path: "/artists",
		sidebar_title: "Artists",
		component: () => <Artist />
	},
	{
		path: "/groups",
		sidebar_title: "Groups",
		component: () => <Group />
	},
	{
		path: '/',
		sidebar_title: 'Home',
		component: () => <Home />
	}
];


function App() {
  	return (
		<>
			<div id="app-container">
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
				<Footer />
			</div>
		</>
  	);
}

export default App;
