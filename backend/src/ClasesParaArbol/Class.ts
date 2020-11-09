

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

    
  public execute(){
   console.log("siu");
   var cadenaT=""
   cadenaT+="class "+this.id+"{";

    for(let i = 0 ; i < this.Contenido_Clase.length ; i++){
          cadenaT += this.Contenido_Clase[i].execute();
      }
     cadenaT+="}"

   
    Traduccion.add(this.cadena);
   return cadenaT;
}
}