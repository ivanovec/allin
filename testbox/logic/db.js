var mysql = require('mysql'),
	config = require('../config/config');
	
var pool = mysql.createPool({
	host:config.mysql.host,
	user:config.mysql.user,
	password:config.mysql.password,
	database:config.mysql.base
});

module.exports.get = function(q, cb){
	pool.getConnection(function(err, connection){
		if(err) {
			config.log(err);
			cb('unable to get connection to database'); 
		return;}
		connection.query(q, function(err, data){
			if(err) {
				config.log(err); 
				cb('query error'); 
			return;}
			connection.release();
			console.log('no error');
			cb(err, data);
		});
	});
}
	
module.exports.set = function(q, data, cb){
	pool.getConnection(function(err, connection){
		if(err) {throw err; return;}
		connection.query(q, data, function(err, info){
			if(err) {throw err; return;}
			connection.release();
			cb();
		});
	});
}

module.exports.del = function(q, cb){
	pool.getConnection(function(err, connection){
		if(err) {throw err; return;}
		connection.query(q, function(err, results){
			if(err) {throw err; return;}
			connection.release();
			cb();
		});
	});
}
	

