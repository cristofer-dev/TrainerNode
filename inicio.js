var servidor = require("./servidor");
var controlador = require("./controlador");
var peticiones = require("./peticiones");

var manejador = {}
manejador["/"] = peticiones.inicio;
manejador["/pagina1"] = peticiones.pagina1;
manejador["/pagina2"] = peticiones.pagina2;


servidor.iniciar(controlador.enrutar, manejador);
