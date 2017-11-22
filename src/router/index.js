import React from 'react'
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom' 
import AuthRoute from '../component/authroute/authroute'
import BossInfo from '../container/bossinfo/bossinfo'
import GeniusInfo from '../container/geniusinfo/geniusinfo'
import Login from '../container/login/login'
import Register from '../container/register/register'
import Dashboard from '../component/dashboard/dashboard'

class Router extends React.Component{
	
	render() {
		function error() {
			return <p>error</p>
		}
		return (
			<BrowserRouter>
				<div>
					<AuthRoute></AuthRoute>
					<Switch>
						<Route path="/boss/info" component={BossInfo}></Route>
						<Route path="/genius/info" component={GeniusInfo}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/register" component={Register}></Route>
						<Route component={Dashboard}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default Router

