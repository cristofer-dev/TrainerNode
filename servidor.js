var servidor = require('http');

function enciendeServidor(entrada,salida){
	salida.writeHead(200,{"Content-Type":"text/html"});
	salida.write("<h1>Servidor Encendido... \o/</h1>")
	salida.end();
}

servidor.createServer(enciendeServidor).listen(8888);
