
import {Node} from '../Abstract/Node';
import { Traduccion } from '../ManejoErrores/Traduccion';
export class Comentarios extends Node {

    Comentario: String;
    cadena:string;
constructor ( linea:Number,columna:Number , Comentario:string ){
super(linea,columna);
this.Comentario=Comentario;
}
execute(){

    var T="";
T+=this.Comentario;
console.log(this.Comentario+"----")
Traduccion.add(T) 
return T;   
}
Prueba(){

console.log("adentro");
}

}
