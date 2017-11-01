var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:"123456",
	database:'baby'
})

/* GET home page. */
router.post('/search', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
		var n=req.body.sea
		console.log(n)
	
		pool.query("SELECT * FROM user WHERE name LIKE '%"+n+"%' OR message LIKE '%"+n+"%'",function(e,rows,fields){
			
			res.send(rows)
		
	}) 
		
});
module.exports = router;
