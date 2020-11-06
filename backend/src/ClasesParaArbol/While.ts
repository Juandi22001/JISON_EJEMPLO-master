
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Whiles extends Node {
  Instrucciones:Array<Node>;
    Condition:Node;

       Increment_Decrement :Node;
       Instruccion:Array<Node>;
       cadena:string;
       constructor ( linea:Number,columna:Number ,Condition:Node,Instrucciones:Array<Node> ){
super(linea,columna);
this.Condition=Condition;
this.Instrucciones=Instrucciones;

}

traduccion(){


}
execute(){
  var   T=""
  T+="while"+"("+this.Condition.execute()+")"+"{"
for(let i = 0 ; i < this.Instrucciones.length ; i++){
  T += this.Instrucciones[i].execute();
}
"}"
Traduccion.add(T)
return T;
    
}


}

