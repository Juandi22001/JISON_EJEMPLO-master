
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class Metodo_C extends Node {
  
    Nombre: String;
    M_I :Node
    Public : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,Public :String,Void:String,  Nombre:string,M_I:Node ){
super(linea,columna);
this.Nombre=Nombre;
this.Public=Public;
this.void=Void;

this.M_I=M_I;

}

traduccion(){

}
execute():any{
    this.cadena="var";

    this.cadena+=this.Nombre+"= "+" "+"{";
    this.cadena+=this.M_I.execute.toString();
    Traduccion.add(this.cadena); 
}


}

