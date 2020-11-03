

import { Node } from '../Abstract/Node';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Class extends Node {
    id:string;
    Contenido_Clase:Array<Node>;
    
    cadena:string;
    constructor(line: Number, column: Number  , NombreClase :string  , Contenido_Clase: Array<Node> ){
        super(line , column);
        this.id = NombreClase;
        this.Contenido_Clase = Contenido_Clase;

    }

    
   execute(){
   console.log("siu");
    this.cadena="Class "+this.id+"{";

    for(let i = 0 ; i < this.Contenido_Clase.length ; i++){
           this.cadena += this.Contenido_Clase[i].execute.toString();
      }
      this.cadena+="}"

   
    Traduccion.add(this.cadena);
   }
}