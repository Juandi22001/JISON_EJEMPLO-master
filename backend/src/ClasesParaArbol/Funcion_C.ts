
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class Function_C extends Node {
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

    this.cadena+="function"+"  "+this.Nombre+"(";
    this.cadena+=this.M_I.execute.toString();

    Traduccion.add(this.cadena)    
}


}

