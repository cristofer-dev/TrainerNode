function enrutar(manejador,ruta){
	console.log("Accediendo a "+ruta);
	return manejador[ruta]();
}

exports.enrutar = enrutar;
