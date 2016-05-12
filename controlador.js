function enrutar(manejador,ruta){
	console.log("Accediendo a "+ruta);

	if(typeof manejador[ruta]==='function'){
		return manejador[ruta]();
	}else{
		console.log("No Existe una funcion para esa ruta");
	}
}

exports.enrutar = enrutar;
