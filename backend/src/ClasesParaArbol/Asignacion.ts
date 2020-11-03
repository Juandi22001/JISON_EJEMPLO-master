
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Asignacion extends Node {
       Declaracion:Node;
       Tipo: Type;
       EXP:Node;
       ID:String;
       cadena:string;
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,ID:String,EXP:Node ){
super(linea,columna);
this.ID=ID;

this.EXP=EXP;

}
traductor(){
this.cadena+=this.ID+" "+"="+this.EXP.execute.toString();
Traduccion.add(this.cadena);
}
execute(){
    
}


}

