
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Do_While extends Node {
       Declaracion:Node;
       Tipo: Type;
       EXP:Node;
       DO:String;
       Condition:Node;
       Instrucction:Array<Node>;
       Increment_Decrement :Node;
       cadena:string;
  constructor ( linea:Number,columna:Number ,DO:String,Instruction:Array<Node>,Condition:Node ){
super(linea,columna);
this.DO=DO;
this.Instrucction=Instruction;
this.Condition=Condition

}
traduccion(){

}
execute(){
  var T =""
  T+="Do" +"{"
  for(let i = 0 ; i < this.Instrucction.length ; i++){
    T += this.Instrucction[i].execute();
}
T+="}"
T+="while "+"("+this.Condition.execute()+")"+";"
Traduccion.add(T); 
return T;  
}


}

