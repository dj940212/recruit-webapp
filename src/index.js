import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css'
// import App from './App'
import reducers from './reducer'
import Router from './router'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtendsion?window.devToolsExtendsion():f=>f
))

ReactDOM.render(
	(<Provider store={store}>
		<Router></Router>
	</Provider>),
	document.getElementById('root')
);
