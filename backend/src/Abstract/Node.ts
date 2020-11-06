
import {Arbol} from "../Simbols/Arbol";
export abstract class Node {
    line: Number;
    column: Number;
    public abstract execute(): any;

    constructor(line: Number, column: Number) {
        this.line = line;
        this.column = column;
    }
    
}