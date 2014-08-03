var express = require('express'),
	config = require('../config/config');
var router = express.Router();

router.get(config.url.visibility, function(req, res){
	if (req.query.user_id == 'admin'){
		res.writeHead(200, {"Content-Type": "application/json"});
		res.write(JSON.stringify({'shouldDisplay':'true'}));
		res.end(); 
	} else {
		res.writeHead(200, {"Content-Type": "application/json"});
		res.write(JSON.stringify({'shouldDisplay':'false'}));
		res.end();
	}
});

module.exports = router;