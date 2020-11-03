
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class Ifs extends Node {
  Instrucciones:Array<Node>;
    Condition:Node;
    Else:Array<Node>
 cadena:string;
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,Condition:Node,Instrucciones:Array<Node>,Else:Array<Node> ){
super(linea,columna);
this.Condition=Condition;
this.Instrucciones=Instrucciones;
this.Else=Else;

}
execute(){
  this.cadena+="if"+"("+this.Condition.execute.toString();")";
  this.cadena+="{";
  for(let i = 0 ; i < this.Instrucciones.length ; i++){
    this.cadena += this.Instrucciones[i].execute.toString();
  }
  if(this.Else.length>1){
  
  
    this.cadena+="else"+"{"
    for(let i = 0 ; i < this.Else.length ; i++){
      this.cadena += this.Else[i].execute.toString();
  this.cadena+="}"
    }
  
  
  }
  
  
  this.cadena+="}"
  
    Traduccion.add(this.cadena);
}
traduccion(){
  

}

}

