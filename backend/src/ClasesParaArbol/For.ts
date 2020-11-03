
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class For_alv extends Node {
       Declaracion:Node;
       EXP:Node;
       cadena:string
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,Declaracion:Node, EXP:Node, Increment_Decrement:Node, Instruccion:Array<Node>){
super(linea,columna);
this.Declaracion=Declaracion;
this.EXP=EXP;
this.Increment_Decrement=Increment_Decrement;
this.Instruccion=Instruccion;
}

traduccion(){

}
execute(){
  this.cadena+="for" +"("+this.Declaracion.execute.toString();+";";
  this.cadena+=this.EXP.execute.toString();+";"
  this.cadena+=this.Increment_Decrement.execute.toString()+";";+")"+" {"
  for(let i = 0 ; i < this.Instruccion.length ; i++){
    this.cadena += this.Instruccion[i].execute.toString();
  }
  this.cadena+="}"
  Traduccion.add(this.cadena);
  
      
}


}

