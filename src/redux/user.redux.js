import axios from 'axios'
import {getRedireactPath} from '../util'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'        // 发生错误 
const LOAD_DATA = 'LOAD_DATA'  //加载用户信息

const initState = {
	redireactTo: '',
	msg: '',
	user: '',
	pwd: '',
	type: ''
}

// reducer
export function user(state=initState, action) {
	switch(action.type) {
		case AUTH_SUCCESS:
			return {...state, msg: '',redireactTo: getRedireactPath(action.payload), ...action.payload}
			break
		case LOAD_DATA:
			return {...state, ...action.payload}
			break
		case ERROR_MSG:
			return {...state, isAuth: false, msg: action.msg}
			break
		default:
			return state
	}
}
function authSuccess(obj) {
	const {pwd, ...data} = obj
	return {type: AUTH_SUCCESS, payload: data}
}

function errorMsg(msg) {
	return { msg, type: ERROR_MSG}
}

export function login({user, pwd}){
	if (!user||!pwd) {
		return errorMsg('用户密码必须输入')
	}
	return dispatch => {
		axios.post('/user/login', {user, pwd})
		.then(res => {
			if (res.status === 200&&res.data.code===0) {
				dispatch(authSuccess(res.data.data))
			}else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}

export function loadData(data) {
	console.log(data)
	return { type: LOAD_DATA, payload: data}
}

export function update(data){
	return dispatch=>{
		axios.post('/user/update',data)
			.then(res=>{
				if (res.status==200&&res.data.code===0) {
					dispatch(authSuccess(res.data.data))
				}else{
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}

export function register({user, pwd, repeatpwd, type}) {
	if (!user||!pwd) {
		return errorMsg('用户名密码必须输入')
	}
	if (pwd !== repeatpwd) {
		return errorMsg('密码和确认密码不匹配')
	}
	return dispatch => {
		axios.post('/user/register', {user, pwd, type})
		.then(res => {
			if (res.status === 200&&res.data.code===0) {
				dispatch(authSuccess({user, pwd, type}))
			}else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
	
}