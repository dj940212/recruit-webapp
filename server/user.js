const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = {pwd: 0, __v: 0}

// 用户列表
Router.get('/list', function(req, res){
	User.find({}, function(err, doc) {
		return res.json(doc)
	})
})

// 登录
Router.post('/login', function(req, res) {
	const {user, pwd} = req.body
	User.findOne({user, pwd: md5Pwd(pwd)} ,_filter ,function(err, doc) {
		if (!doc) {
			return res.json({code: 1, msg: '用户名或者密码错误'})
		}
		res.cookie('userid', doc._id)
		return res.json({code: 0, data: doc})
	})
})

// 注册
Router.post('/register', function(req, res) {
	console.log(req.body)
	const {user, pwd, type} = req.body
	User.findOne({user}, function(err, doc) {
		if (doc) {
			return res.json({code: 1, msg: '用户名重复'})
		}
		const userMod = new User({user, type, pwd: md5Pwd(pwd)})
		userMod.save(function(e, d){
			if (e) {
				return res.json({code: 1, msg: '后端出错了'})
			}
			const {user, type, _id} = d
			res.cookie('userid', _id)
			return res.json({code: 0, data: {user, type, _id}})
		})
	})
})

// 获取用户信息
Router.get('/info', function(req, res){
	const {userid} = req.cookies
	if (!userid) {
		// 用户有没有cookie
		return res.json({code: 1})
	}
	User.findOne({_id: userid}, _filter, function(err, doc) {
		if (err) {
			return res.json({code: 1, msg: '后端出错了'})
		}
		if (doc) {
			return res.json({code: 0, data: doc})
		}
	})

})

// 更新详细信息
Router.post('/update',function(req,res){
	const userid = req.cookies.userid
	if (!userid) {
		return json.dumps({code:1})
	}
	const body = req.body
	User.findByIdAndUpdate(userid,body,function(err,doc){
		const data = Object.assign({},{
			user:doc.user,
			type:doc.type
		},body)
		return res.json({code:0,data})
	})
})

// 加盐加密
function md5Pwd(pwd) {
	const salt = 'imooc_is_g[@$saf809iu8:;-=;z^'
	return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router