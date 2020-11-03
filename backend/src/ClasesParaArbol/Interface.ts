
import { Node } from '../Abstract/Node';

export class Interface extends Node {
    id:string;
    Contenido_Interface:Array<Node>;
    constructor(line: Number, column: Number  , NombreInterface :string  , Contenido_Interface: Array<Node> ){
        super(line , column);
        this.id = NombreInterface;
        this.Contenido_Interface = Contenido_Interface;
    }
   execute(){
   }
}