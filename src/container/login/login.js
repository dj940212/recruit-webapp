import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import formCom from '../../component/formCom/formCom'

@connect(state => state.user, {login})
@formCom
class Login extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			pwd: ''
		}
		this.register = this.register.bind(this)
	}
	register() {
		this.props.history.push('/register')
	}
	handleLogin() {
		this.props.login(this.props.state)
	}
	render(){
		return(
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
				<Logo></Logo>
				<WingBlank>
					<List>
						{this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
						<InputItem onChange={v => this.props.handleChange('user', v)}>用户</InputItem>
						<InputItem onChange={v => this.props.handleChange('pwd', v)}>密码</InputItem>
					</List>
					<WhiteSpace></WhiteSpace>
					<Button type='primary' onClick={this.handleLogin.bind(this)}>登录</Button>
					<WhiteSpace></WhiteSpace>
					<Button onClick={this.register} type='primary'>注册</Button>
				</WingBlank>
			</div>
		) 
	}
}

export default Login