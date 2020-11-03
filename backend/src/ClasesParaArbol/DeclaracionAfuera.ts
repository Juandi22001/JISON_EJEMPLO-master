
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class DeclaracionAfuera extends Node {
       Declaracion:Node;
       public :String;
       Tipo: String;
       EXP:Node;
       ID:String;
       cadena:string;
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number , publics:String,Tipo:String,ID:String,EXP:Node ){
super(linea,columna);
this.ID=ID;
this.public=publics;
this.Tipo=Tipo;
this.EXP=EXP;

}

Traduccion(){


}
execute(){
  this.cadena+= "var"+" "+this.ID+" =";
this.cadena+=this.EXP.execute.toString();

Traduccion.add(this.cadena);  
}


}

