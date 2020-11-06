
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

  var T=""
  T+="if"+"("+this.Condition.execute()+")";
  T+="{";
  for(let i = 0 ; i < this.Instrucciones.length ; i++){
    T += this.Instrucciones[i].execute();
  }
  if(this.Else.length>1){
  
  
    T+="else"+"{"
    for(let i = 0 ; i < this.Else.length ; i++){
      T += this.Else[i].execute();
  T+="}"
    }
  
  
  }
  
  
  T+="}"
  
    Traduccion.add(T);
    return T;
}
traduccion(){
  

}

}

