import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import Navigation from './presentational/navigation.component'
//import {getCountries} from './actions/actions-countries.js';

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Navigation}>

			</Route>
		</Router>

			//<DevTools />
	</Provider>,
	document.getElementById('root')
);

////store.dispatch(getCountries());