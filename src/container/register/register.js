import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WhiteSpace, Button, Radio} from 'antd-mobile'

class Login extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			pwd: '',
			repeatpwd: '',
			type: 'genuis'
		}
	}
	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	handleRegister() {
		console.log(this.state)
	}
	render(){
		const RadioItem = Radio.RadioItem
		return (
			<div>
				<Logo></Logo>
				<List>
					<InputItem onChange={v=>this.handleChange('user', v)}>用户名</InputItem>
					<InputItem type="password" onChange={v=>this.handleChange('pwd', v)}>密码</InputItem>
					<InputItem type="password" onChange={v=>this.handleChange('repeatpwd', v)}>确认密码</InputItem>
					<RadioItem 
						checked={this.state.type==='genuis'}
						onChange={v=>this.handleChange('type', 'genuis')}
					>牛人</RadioItem>
					<RadioItem 
						checked={this.state.type==='boss'}
						onChange={v=>this.handleChange('type', 'boss')}
					>BOSS</RadioItem>
					<WhiteSpace/>
					<Button type="primary" onClick={this.handleRegister.bind(this)}>注册</Button>
				</List>
			</div>
		)
	}
}

export default Login
