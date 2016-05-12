var servidor = require('http');

function iniciar(){
	function enciendeServidor(entrada,salida){
		console.log("Conección establecida");
		salida.writeHead(200,{"Content-Type":"text/html"});
		salida.write("<h1>Servidor Encendido... \o/</h1>")
		salida.end();
	}
	servidor.createServer(enciendeServidor).listen(8888);
}

exports.iniciar = iniciar;
