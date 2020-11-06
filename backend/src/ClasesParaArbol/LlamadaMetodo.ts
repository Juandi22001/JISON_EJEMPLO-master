
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class LlamadaMetodo extends Node {
  
   ID: String;
  Exp :Node
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,ID :String,Exp:Node ){
super(linea,columna);
this.ID=ID;
this.Exp=Exp;

}
traduccion(){


}
execute(){
  var T=""
  T+=this.ID+"(";

  if(this.Exp!=null){
     T+=this.Exp.toString();
  }

  T+=")";
  Traduccion.add(T)  
}


}

