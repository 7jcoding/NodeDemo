var express = require('express');
var router = express.Router();
var items = [
    {"id":"1","userName":"Koi","userPwd":"EST-1"},
    {"id":"2","userName":"Koi","userPwd":"EST-1"},
    {"id":"3","userName":"Koi","userPwd":"EST-1"},
    {"id":"4","userName":"Koi","userPwd":"EST-1"},
    {"id":"5","userName":"Koi","userPwd":"EST-1"},
    {"id":"6","userName":"Koi","userPwd":"EST-1"},
    {"id":"7","userName":"Koi","userPwd":"EST-1"},
    {"id":"8","userName":"Koi","userPwd":"EST-1"}
]

/* 登录 */
router.post('/login',function(req,res){
    returnJson(res, 200)
});
/* 退出 */
router.get('/loginOut/',function(req,res){
    returnJson(res, 200, "您已成功退出");
});
/* 数据列表测试 */
router.get('/grid',function(req, res){
    returnJsonList(res, items.length, items);
});

/* 返回自定义 Json 封装数据 */
function returnJson(res, code, message){
    message = message == null ? "Success" : message;
    res.json({ Code: code, Message: message })
}
/* 返回自定义 Json 列表封装数据 */
function returnJsonList(res, total, items){
    res.json({ "total": total, "rows": items });
}

module.exports = router;
