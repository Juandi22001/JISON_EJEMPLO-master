
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Sout extends Node {
     TipoPrint:Node;
    EXP:Node;
      cadena:string;
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,TipoPrint:Node,EXP:Node ){
super(linea,columna);
this.TipoPrint=TipoPrint;
this.EXP=EXP;

}


execute(){
  var T ="";
  T+="console.log("+this.EXP.execute();+");"
Traduccion.add(T)
return T;
    
}


}

