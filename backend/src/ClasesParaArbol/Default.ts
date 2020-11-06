
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class Default extends Node {
  
   Instruccion_Vacias: Node;
    Exp_Case :Node
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,Instruccion_Vacia :Node,  Exp_Case:Node ){
super(linea,columna);
this.Instruccion_Vacias=Instruccion_Vacia;
this.Exp_Case=Exp_Case;

}

traduccion(){
    }
execute(){
    this.cadena+="default"+":"
    this.cadena+=this.Instruccion_Vacias.execute.toString();
    this.Exp_Case.execute.toString;

    

}


}

