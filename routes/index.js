var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// var sequelize = require('../domain/table.define').sequelize;
// var Sequelize = require('../domain/table.define').Sequelize;
// var model = require('../domain/table.define').model;



router.use(bodyParser.json('/send-msg'))
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.json({ epid: '123456' });
});
router.post('/send-msg', function (req, res, next) {
	console.log('===>')
	console.log(req.body)

	res.send(req.body);
	// t_account.create({
	// 	phone: req.body,
	// 	epid: epid
	// })
})
router.get('/login', function(req, res, next) {
	// var params = urllib.parse(req.url, true);
 //    var query2 = params.query;
    // 打印get请求中的接口参数
    // console.log(query2);
    res.end('success');
})
module.exports = router;
