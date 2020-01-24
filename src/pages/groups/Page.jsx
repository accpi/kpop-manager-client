import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Index from './Index';
import Details from './Details';

export default function App() {
	let { path } = useRouteMatch()

	return (
		<div>
			<Switch>
				<Route path={`${path}/:id`} component={Details} />
				<Route path={path} component={Index} />
			</Switch>
		</div>
	);
}