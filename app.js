var	app 		 = require('./config/express')();

//Roteamento das URLs
app.get('/', function(request, response){
	response.send('<html><body><h1>Home</h1></body></html>');
});
///// Fim Roteamento

var porta = process.env.PORT || 4000;
app.listen(porta, function(){
	console.log("servidor rodando");
});
