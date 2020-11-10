
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class DeclaracionAfuera extends Node {
       Declaracion:Node;
       public :String;
       Tipo: Node;
       EXP:Array <Node>;
       ID:Node;
       
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,EXP:Array <Node> ){
super(linea,columna);

this.EXP=EXP;

}

Traduccion(){


}
public execute(){
  var cadena=""
  cadena+= "var"+" "
  for(let i=0; i<this.EXP.length;i++){

    cadena+="="
    cadena+=this.EXP[i].execute();
}
  
  cadena+="\n"

cadena+=" "

Traduccion.add(cadena); 
return cadena ;
}


}

