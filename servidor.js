var servidor = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar,manejador){
	function enciendeServidor(entrada,salida){

		var ruta = url.parse(entrada.url).pathname;		

		console.log("Conección establecida");

		var contenido = enrutar(manejador,ruta,salida);

		var registro = fs.createWriteStream('log.txt',{'flags':'a'});	
		registro.write(ruta + '\n');

	}
	servidor.createServer(enciendeServidor).listen(8888);
}

exports.iniciar = iniciar;
