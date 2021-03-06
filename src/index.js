import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import DevTools from './DevTools';
//import {getCountries} from './actions/actions-countries.js';
import routes from './routes';

render(
	<Provider store={store}>
		<h1>
			<Router history={hashHistory} routes={routes}/>
			<DevTools />
		</h1>
	</Provider>,
	document.getElementById('root')
);

//store.dispatch(getCountries());