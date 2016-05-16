function enrutar(manejador,ruta,respuesta){
	console.log("Accediendo a "+ruta);

	if(typeof manejador[ruta]==='function'){
		manejador[ruta](respuesta);
	}else{
		console.log("No Existe una funcion para esa ruta");
	}
}

exports.enrutar = enrutar;
