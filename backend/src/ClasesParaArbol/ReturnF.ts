
import {Node} from '../Abstract/Node';
import { Traduccion } from '../ManejoErrores/Traduccion';
export class ReturnF extends Node {
    EXP  :Node;
    Nombre: String;
    cadena:string;
constructor ( linea:Number,columna:Number , EXP:Node ){
super(linea,columna);

this.EXP=EXP;
}

execute(){
    var T="";
    T+= "return"+" "+this.EXP.execute()
    Traduccion.add(T);
    T+="\n";
   return T;
}
Prueba(){

console.log("adentro");
}

}

