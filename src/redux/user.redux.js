import axios from 'axios'
import {getRedireactPath} from '../util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'


const initState = {
	redireactTo: '',
	isAuth: false,
	msg: '',
	user: '',
	pwd: '',
	type: ''
}

// reducer
export function user(state=initState, action) {
	switch(action.type) {
		case REGISTER_SUCCESS:
			return {...state, msg: '',redireactTo: getRedireactPath(action.payload), isAuth: true, ...action.payload}
			break
		case LOGIN_SUCCESS:
			return {...state, msg: '',redireactTo: getRedireactPath(action.payload), isAuth: true, ...action.payload}
			break
		case ERROR_MSG:
			return {...state, isAuth: false, msg: action.msg}
			break
		default:
			return state
	}
}
function loginSuccess(data) {
	return {type: LOGIN_SUCCESS, payload: data}
}
function registerSuccess(data) {
	return { type: REGISTER_SUCCESS, payload: data }
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
				dispatch(loginSuccess(res.data.data))
			}else {
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
				dispatch(registerSuccess({user, pwd, type}))
			}else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
	
}