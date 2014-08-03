var config = {};
config.mysql = {};
config.tables = {};
config.query = {};
config.url ={};

config.log = function(data){
	console.log(data);
}

config.mysql.host = '127.0.0.1';
config.mysql.user = 'root';
config.mysql.password = 'root';
config.mysql.base = 'testbox';

config.tables.cases = 'cases';


config.query.selectCases = 'SELECT * FROM ' + config.tables.cases;
config.query.addCasesQ = 'INSERT INTO ' + config.tables.cases + ' SET ?';
config.query.delCases = 'DELETE FROM ' + config.tables.cases + ' WHERE id IN ';

config.url.index = '/:tab?';
//config.url.indexCases = '/start/tabs-example-second';
//config.url.caseForm = '/add';
//config.url.addCase = '/save';
//config.url.delCases = '/del';
config.url.visibility = '/visibility';

module.exports = config;