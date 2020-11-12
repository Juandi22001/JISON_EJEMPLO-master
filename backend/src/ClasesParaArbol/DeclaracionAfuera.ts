
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class DeclaracionAfuera extends Node {
       Declaracion:null;
       public :String;
       Tipo: Node;
       EXP2:Array<Node>;
       ID:Node;
       
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,EXP:Array<Node> ){
super(linea,columna);

this.EXP2=EXP;
console.log(this.EXP2[0].execute()+"SIIIIIIIIIIIIIIIIIIIIIIIIIII")
}

Traduccion(){


}
public execute(){
  var cadena=""
  cadena+= "var"+" "

for (let index = 0; index < this.EXP2.length; index++) {
  cadena+= this.EXP2[index].execute();
  
}
  cadena+="\n"

cadena+=" "

Traduccion.add(cadena); 
return cadena ;
}


}

