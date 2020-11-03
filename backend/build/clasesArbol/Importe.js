"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

 ESTA CLASE ES UN NODO DE LA GRAMATICA (del ATS)
 Y EXTIENDE DE NODE QUE VIENE DE LA CARPETA ABSTRACT

*/
const Node_1 = require("../Abstract/Node");
class Importe extends Node_1.Node {
    constructor(line, column, id_) {
        super(line, column);
        this.id = id_;
    }
    execute() {
    }
}
exports.Importe = Importe;
