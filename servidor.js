var servidor = require('http');
var url = require('url');


function iniciar(enrutar,manejador){
	function enciendeServidor(entrada,salida){

		var ruta = url.parse(entrada.url).pathname;		

		console.log("Conección establecida");

		enrutar(manejador,ruta);

		salida.writeHead(200,{"Content-Type":"text/html"});
		salida.write("<h1>Servidor Encendido... \o/</h1>")
		salida.end();
	}
	servidor.createServer(enciendeServidor).listen(8888);
}

exports.iniciar = iniciar;
