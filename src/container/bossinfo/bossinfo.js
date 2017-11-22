import React from 'react'
import {NavBar,InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect( state => state.user, {update})
class BossInfo extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			title:'',
			desc:'',
			company:'',
			money:''
		}
	}
	onChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	render() {
		return (
			const path = this.props.location.pathname
			const redireact = this.props.redireactTo
			<div>
				{redireact&&redireact!==path ? <Redirect to={this.props.redireactTo}></Redirect> : null}
				<NavBar mode="dark" >BOSS完善信息页</NavBar>
				<AvatarSelector selectAvatar={imgname => {this.setState({avatar: imgname})}}></AvatarSelector>
				<InputItem onChange={(v)=>this.onChange('title',v)}>
					招聘职位
				</InputItem>
				<InputItem onChange={(v)=>this.onChange('company',v)}>
					公司名称
				</InputItem>
				<InputItem onChange={(v)=>this.onChange('money',v)}>
					职位薪资
				</InputItem>
				<TextareaItem
					onChange={(v)=>this.onChange('desc',v)}
					rows={3}
					autoHeight
					title='职位要求'
				></TextareaItem>
				<Button type='primary'
					onClick={() => {
						this.props.update(this.state)
					}}
					type='primary'
				>保存</Button>
			</div>
		)
	}
}

export default BossInfo