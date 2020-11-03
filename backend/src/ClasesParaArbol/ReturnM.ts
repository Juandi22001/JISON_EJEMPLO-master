
import {Node} from '../Abstract/Node';
import { Traduccion } from '../ManejoErrores/Traduccion';
export class ReturnM extends Node {

     Nombre: String;
      
    constructor ( linea:Number,columna:Number , Nombre:string ){
super(linea,columna);
this.Nombre=Nombre;
}
execute(){
Traduccion.add("return;")

    
}
Prueba(){

console.log("adentro");
}

}

