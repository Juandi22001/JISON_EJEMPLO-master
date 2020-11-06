
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

  var T="";
  T+="for" +"("+this.Declaracion.execute();+";";
  T+=this.EXP.execute();+";"
  T+=this.Increment_Decrement.execute()+";";+")"+" {"
  for(let i = 0 ; i < this.Instruccion.length ; i++){
    T += this.Instruccion[i].execute();
  }
  T+="}"
  Traduccion.add(T);
  return T;
  
      
}


}

