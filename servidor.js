var servidor = require('http');
var url = require('url');


function iniciar(enrutar,manejador){
	function enciendeServidor(entrada,salida){

		var ruta = url.parse(entrada.url).pathname;		

		console.log("Conección establecida");

		var contenido = enrutar(manejador,ruta);
	
		salida.writeHead(200,{"Content-Type":"text/html"});
		salida.write(contenido);
		salida.end();
	}
	servidor.createServer(enciendeServidor).listen(8888);
}

exports.iniciar = iniciar;
