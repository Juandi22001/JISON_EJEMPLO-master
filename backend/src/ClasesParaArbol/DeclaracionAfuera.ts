
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class DeclaracionAfuera extends Node {
       Declaracion:Node;
       public :String;
       Tipo: Node;
       EXP:Node;
       ID:Node;
       
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number , publics:String,Tipo:Node,ID:Node,EXP:Node ){
super(linea,columna);
this.ID=ID;
this.public=publics;
this.Tipo=Tipo;
this.EXP=EXP;

}

Traduccion(){


}
public execute(){
  var cadena=""
  cadena+= "var"+" "+this.ID;

  if( this.EXP!=null){

    cadena+="="
    cadena+=this.EXP.execute();

  }

cadena+=" "
Traduccion.add(cadena); 
return cadena ;
}


}

