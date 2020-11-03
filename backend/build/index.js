"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//----------- TRAYENDO MI JISON PARSER :3  ------------
const analizador_jison = require('./Grammar/desde_cero.js');
//----------------------------------------
var bodyParser = require("body-parser");
const cors = require('cors');
const app = express_1.default();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express_1.default.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use(bodyParser.json());
app.listen(port, err => {
    return console.log(`server is listening on ${port}  GO TO LINK: http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.render('views/index', {

        
        entrada: '',
        consola: [],
        errores: []
    });
}).get('/', (req, res) => {
    res.render('views/index', {
        entrada: '',
        consola: [],
        errores: []
    });
});
// LLAMADA DE EJEMPLO
app.post('/ejemplo', (req, res) => {
    console.log("REALIZANDO LA PETICION DESDE EL FORMULARIO QUE SE ENCUENTRA EN la carpeta VIEWS por medio de un Form \n\n\n");
    const entrada = req.body.entrada;
    const tree = analizador_jison.parse("class prueba {  Console.Write(4548894); }");
    console.log("-------------INICIA EL ARBOL----------------");
    console.log(tree.instructions);
    console.log("-------------¿QUE TIENE PRINT CONSOLA?------");
    console.log(tree.instructions[0].contenido);
    console.log("--------------------------------------------");
    console.log("ok");
});
