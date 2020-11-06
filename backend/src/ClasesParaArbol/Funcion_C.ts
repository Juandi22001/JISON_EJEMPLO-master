
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class Funcion_C extends Node {
       Tipo:String;
    Nombre: String;
    M_I :Node
    Public : String;
    cadena:string;
constructor ( linea:Number,columna:Number ,Public :String, Tipo:String, Nombre:string,M_I:Node ){
super(linea,columna);
this.Nombre=Nombre;
this.Public=Public;
this.Tipo=Tipo;
this.M_I=M_I;

}

traduccion(){

}
execute(){
var cadenaT="";
    cadenaT+="function"+"  "+this.Nombre+"  ";
    cadenaT+=this.M_I.execute();
    cadenaT+="{"
    Traduccion.add(cadenaT) 
    
    return cadenaT;
}


}

