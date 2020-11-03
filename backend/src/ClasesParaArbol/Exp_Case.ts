
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class Exp_Case extends Node {
  
   Instruccion_Vacias: Node;
    Exp_Case :Node
    Simbolo : String;
    void :String;
    cadena:string;
    EXP:Node;
constructor ( linea:Number,columna:Number ,EXP:Node,Instruccion_Vacia :Node,  Exp_Case:Node ){
super(linea,columna);
this.Instruccion_Vacias=Instruccion_Vacia;
this.EXP=EXP;
this.Exp_Case=Exp_Case;

}

traduccion(){
 

}
execute(){
    this.cadena+="case"+this.EXP.execute.toString()+":"+this.Instruccion_Vacias.execute.toString();
    this.cadena+=Exp_Case.toString();
    Traduccion.add(this.cadena) 
}


}

