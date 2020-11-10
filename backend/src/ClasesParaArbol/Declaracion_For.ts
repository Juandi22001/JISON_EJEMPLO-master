
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class Declaracion_For extends Node {
       Declaracion:Node;
       Tipo: String;
       EXP2:Node;
       ID:String;
       cadena:string;
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number , Tipo:String,ID:String,EXP2:Node ){
super(linea,columna);
this.ID=ID;
this.Tipo=Tipo;
this.EXP2=EXP2;
console.log(this.EXP2.execute()+"-------")
}

traduccion(){




}
execute(){

  var T="";
  T+=this.ID

  if ( this.EXP2!=null){

    T+=this.EXP2.execute();
  
  }
  Traduccion.add(T);
  T+=" "
  return T;
  
}


}

