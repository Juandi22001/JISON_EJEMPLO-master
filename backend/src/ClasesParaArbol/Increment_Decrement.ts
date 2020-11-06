
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Increment_Decrements extends Node {
     Simbolo:String;
       ID:String;
        cadena:string
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,ID:String,Simbolo:String ){
super(linea,columna);
this.ID=ID;
this.Simbolo=Simbolo;

}
traduccion(){

  
}
execute(){
  
  
  var T="";
  T+=this.ID+""+this.Simbolo;

Traduccion.add(T);
return T;
    
}


}

