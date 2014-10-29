var express = require('express');
var utility = require('utility');
var router = express.Router();
/* 系统登录页 */
router.get('/login', function(req, res){
    res.render('login', { title:'欢迎使用本系统'});
});
/* 系统首页 */
router.get('/', function(req, res) {
  res.render('index', { title: 'MVC权限管理系统',content: 'This is WebSite Content.' });
});
/* 用户列表页 */
router.get('/power/users', function(req, res){
    res.render("power/users", { user: utility.md5("lin")});  //md5加密
});
module.exports = router;
