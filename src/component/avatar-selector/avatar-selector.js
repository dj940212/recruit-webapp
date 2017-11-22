import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component{
	static propTypes = {
		selectAvatar: PropTypes.func.isRequired
	}
	constructor(props) {
		super(props)
		this.state = {}		
	}

	render() {
		const avatarStr = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
		const avatarList = avatarStr.split(',').map(v => ({
			icon: require(`../img/${v}.png`),
			text: v
		}))

		const gridHeader = this.state.icon ? 
		(<div>
			<span>选择头像</span>
			<img style={{width: 20}} src={this.state.icon} />
		</div>)
		: '请选择头像'

		return (
			<div>
				<List renderHeader={() => gridHeader}>
					<Grid 
						data={avatarList} 
						onClick={elm => {
							this.setState(elm)
							this.props.selectAvatar(elm.text)
						}} 
						columnNum={5}
					></Grid>
				</List>
			</div>
		)
	}
}

export default AvatarSelector