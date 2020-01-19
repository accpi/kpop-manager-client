import React from 'react';
import { Switch, Route } from "react-router-dom";
import Index from './Index';
import Details from './Details';

export default function App() {
	return (
		<div>
			<Switch>
				<Route path="/artists/:id" component={Details} />
				<Route path="/" component={Details} />
			</Switch>
		</div>
	);
}