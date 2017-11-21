import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import reducers from './reducer'
import AuthRoute from './component/authroute/authroute'

import Login from './container/login/login'
import Register from './container/register/register'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtends?window.devToolsExtendsion():f=>f
))

function Boss() {
	return <h2>boos</h2>
}

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Route path="/boss" component={Boss}></Route>
				<Route path="/login" component={Login}></Route>
				<Route path="/register" component={Register}></Route>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);
