var express = require('express');

	//load carregamento de modulos automático
	load = require('express-load');

	//body-parser = Middleware que analisa/transforma os posts antes dos handlers
	bodyParser = require('body-parser');
	
module.exports = function(){
	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(bodyParser.urlencoded({extended: true}) )

	//O load busca a pasta routes em todas as pastas da
	//estrutura do projeto, então para economizar, damos uma
	//dica para o load de onde ele vai procurar os modulos
	//com o parametro seguinte: {cwd:'app'}
	//Atenção na ordem de carregamento/dependências.
	load('routes', {cwd:'app'})
		.then('infra')
		.into(app);

	console.log('modulo config/express sendo carregado...');
	return app;

}