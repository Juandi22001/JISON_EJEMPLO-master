
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class LlamadaMetodo extends Node {
  
   ID: String;
  Exp :Array<Node>
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,ID :String,Exp:Array<Node> ){
super(linea,columna);
this.ID=ID;
this.Exp=Exp;

}
traduccion(){


}
execute(){
  var T=""
  T+=this.ID+"(";

  for(let i = 0 ; i < this.Exp.length ; i++){
    T += this.Exp[i].execute();
}

  T+=")";
  Traduccion.add(T)  
}


}

