var express = require('express');
var router = express.Router();

var config = require('../config/config'),
	db = require('../logic/db');


/* Home page */
router.get(config.url.index, function(req, res) {
	db.get(config.query.selectCases, function(err, results){
		if(err) {
			res.render('error', { 
									message: err,
									error: 'please refresh page'}); 
		return;};
		res.render('index', { title: 'TestBox' });
		//res.render('start', {results: results, tab: req.params.tab});
	});
});

module.exports = router;
