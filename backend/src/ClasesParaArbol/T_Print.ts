
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';


export class Tprint extends Node {
     TipoPrint:String;
    EXP:Node;

       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,TipoPrint:String){
super(linea,columna);
this.TipoPrint=TipoPrint;

}
execute(){
    
}


}

