function inicio(){
	console.log("Has entrado en la página de inicio");

	var ahora = new Date().getTime();
	while(new Date().getTime() < ahora + 10000);

	return "Inicio";
}

function pagina1(){ 
        console.log("Has entrado en la página 1");
        return "Pagina 1";
}

function pagina2(){ 
        console.log("Has entrado en la página 2");
        return "Pagina 2";
}

function favicon(){
	console.log("Se ha pedido el favicon");
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;
