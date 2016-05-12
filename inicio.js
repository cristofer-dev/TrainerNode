var servidor = require("./servidor");
var controlador = require("./controlador");

servidor.iniciar(controlador.enrutar);
