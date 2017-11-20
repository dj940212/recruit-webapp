import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Login extends React.Component{
	render(){
		return (
			<div>
				<Logo></Logo>
				<h2>我是注册页</h2>
				<WingBlank>
					<Button type='primary'>登录</Button>
					<Button type='primary'>注册</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login