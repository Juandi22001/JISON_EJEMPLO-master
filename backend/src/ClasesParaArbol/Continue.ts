
import {Node} from '../Abstract/Node';
import { Traduccion } from '../ManejoErrores/Traduccion';
export class Continues extends Node {

    Nombre: String;
    cadena:string;
constructor ( linea:Number,columna:Number , Nombre:string ){
super(linea,columna);
this.Nombre=Nombre;
}
execute(){
this.cadena+="continue ;";

Traduccion.add(this.cadena) 
return this.cadena;   
}
Prueba(){

console.log("adentro");
}

}
