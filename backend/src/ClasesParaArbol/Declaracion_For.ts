
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class Declaracion_For extends Node {
       Declaracion:Node;
       Tipo: String;
       EXP:Node;
       ID:String;
       cadena:string;
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number , Tipo:String,ID:String,EXP:Node ){
super(linea,columna);
this.ID=ID;
this.Tipo=Tipo;
this.EXP=EXP;

}

traduccion(){




}
execute(){

  var T="";
  T+=this.ID
  T+=this.EXP.execute();
  Traduccion.add(T);
  return T;
  
}


}

