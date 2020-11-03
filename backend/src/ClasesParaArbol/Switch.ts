
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Switchs extends Node {
  
    EXP1: Node;
    Case :Node
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,EXP1 :Node,  Case:Node ){
super(linea,columna);
this.EXP1=EXP1;
this.Case=Case;

}

traduccion(){

    this.cadena+="switch"+"("+this.EXP1.execute.toString()+")"+ this.Case.execute.toString();

    Traduccion.add(this.cadena);
}
execute(){
    
}


}

