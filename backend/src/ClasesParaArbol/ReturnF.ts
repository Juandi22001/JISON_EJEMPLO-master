
import {Node} from '../Abstract/Node';
import { Traduccion } from '../ManejoErrores/Traduccion';
export class ReturnF extends Node {
    EXP  :Node;
    Nombre: String;
    cadena:string;
constructor ( linea:Number,columna:Number , Nombre:string,EXP:Node ){
super(linea,columna);
this.Nombre=Nombre;
this.EXP=EXP;
}
execute(){
    this.cadena+= "return"+this.EXP.execute.toString()+";"
    Traduccion.add(this.cadena);
}
Prueba(){

console.log("adentro");
}

}

