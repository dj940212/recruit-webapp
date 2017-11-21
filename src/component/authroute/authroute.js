import React from 'react'
import axios from 'axios'

class AuthRoute extends React.Component{
	componentDidmount() {
		// 获取用户信息
		axios.get('/user/info')
		.then(res => {
			if (res.state===200) {
				console.log(res.data)
			}
		})

		


	}
	render() {
		return (<div>123</div>)
	}
}
export default AuthRoute