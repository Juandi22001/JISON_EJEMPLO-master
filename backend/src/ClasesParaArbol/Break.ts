
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Break extends Node {
  
   Instruccion_Vacias: Node;
    Exp_Case :Node
    Simbolo : String;
   Break :String;
   cadena:string;
constructor ( linea:Number,columna:Number ,Break:String ){
super(linea,columna);
this.Break=Break;
}

traduccion(){

}
execute(){
   this.cadena+="break;"
  return this.cadena;
}


}

