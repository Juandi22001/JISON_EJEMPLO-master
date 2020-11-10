
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';
export class Ifs extends Node {
  Instrucciones:Array<Node>;
    Condition:Node;
    Else:Array<Node>
 cadena:string;
 valor:Number
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,valor:Number,Condition:Node,Instrucciones:Array<Node>,Else:Array<Node> ){
super(linea,columna);
this.Condition=Condition;
this.Instrucciones=Instrucciones;
this.Else=Else;
this.valor=valor
console.log(Else)
}
execute(){

  var T=""
  if (this.valor==0){
    T+="else if"+"("+this.Condition.execute()+")";
  
  }
  else {
    T+=" if"+"("+this.Condition.execute()+")";
  

  }
  T+="{"+"\n";
  T+="      "
  for(let i = 0 ; i < this.Instrucciones.length ; i++){
    T += this.Instrucciones[i].execute();
  }
  
  if(this.Else.length>0){
  
  if(this.valor==0){
    T+="else"+"{"+" \n"+ "   "
 
  }
    for(let i = 0 ; i < this.Else.length ; i++){
      T += this.Else[i].execute();
  
    }
    T+="}"
  
  }
  
  
  T+="}"
  T+="   \n"
    Traduccion.add(T);
    return T;
}
traduccion(){
  

}

}

