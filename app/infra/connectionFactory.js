var mysql = require('mysql');

var connectionMySQL = function(){
	return mysql.createConnection({
				host : 'xdbs5.dailyrazor.com',
				user : 'dominioe_estudos',
				password : '250806AfR$',
				database : 'dominioe_estudos'
		   });
	console.log('connectou no banco...');
}

//wrapper - dessa forma a conexão só será executada ao ser de fato invocada, 
//e não no carregamento do módulo, isso é que chamamos de embrulhar uma função, wrapper;
module.exports = function(){ 			
	return connectionMySQL;
}