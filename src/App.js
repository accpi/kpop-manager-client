import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/home/Page'
import Artist from './pages/artists/Page'
import Footer from './components/Footer'

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
		<>
			<div style={{
				minHeight: '100vh', /* will cover the 100% of viewport */
				overflow: 'hidden',
				display: 'block',
				position: 'relative',
				paddingBottom: '100px', /* height of your footer */
				width: '80%',
				margin: '0 auto',
			}}>
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

				<div style={{
					position: "absolute",
					bottom: 0,
					width: '100%',
					height: '100px'
				}}>
					<Footer />
				</div>
			</div>
		</>
  	);
}

export default App;
