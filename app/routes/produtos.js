module.exports = function (app){
	app.get('/produtos', function(request, response){
		
		//express-load premite a invocação do modulo através do caminho dele
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(err, results){
			if(err){
				console.log(err);
			} else {
				//console.log(results);
				response.render('produtos/lista', {lista:results});	
			}
		});

		console.log('query ok!');

		connection.end();
		//consulta
		//response.render('produtos/lista');
	});

	app.get('/produtos/form', function(request, response){
		response.render('produtos/form');	
	});

	//Estavamos chamando aqui a url /produtos/salva
	//vamos fazer uso dos verbos (get/post) http, alterando a url para /produtos
	// e o action do form para action="/produtos"
	// tendo assim uma rota para /produtos com get e outra com post
	app.post('/produtos', function(request, response){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		//módulo req.body recebe o conteúdo enviado no form;
		var produto = request.body;	

		produtosDAO.salva(produto, function(req,res){
			response.redirect('/produtos');	
		});	
	});



	app.get('/produtos/remove', function(request, response){
		var connection = app.infra.connectionFactory();
		var produtosBanco = app.infra.produtosBanco(connection);
		var produto = produtosBanco.carrega(id, callback);
		if(produto){
			produtosBanco.remove(produto,callback)
		}
		connection.end();
		//consulta
		//response.render('produtos/lista');
	});
}