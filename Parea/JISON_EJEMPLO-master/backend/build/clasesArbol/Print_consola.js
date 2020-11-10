"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstract/Node");
class Print_consola extends Node_1.Node {
    constructor(line, column, exp) {
        super(line, column);
        this.expresion = exp;
    }
    execute() {
    }
}
exports.Print_consola = Print_consola;
