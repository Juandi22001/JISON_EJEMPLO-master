
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class For_alv extends Node {
       Declaracion:Node;
       EXP22:Node;
       cadena:string
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,Declaracion:Node, EXP22:Node, Increment_Decrement:Node, Instruccion:Array<Node>){
super(linea,columna);
this.Declaracion=Declaracion;
this.EXP22=EXP22;
console.log(this.EXP22.execute())
this.Increment_Decrement=Increment_Decrement;
this.Instruccion=Instruccion;
}

traduccion(){

}
execute(){

  var T="    ";
  T+="for" +"("+this.Declaracion.execute()+";";
  T+=this.EXP22.execute()+";";
  T+=this.Increment_Decrement.execute()+";"+")" +"\n"+"{"
  for(let i = 0 ; i < this.Instruccion.length ; i++){
    T += this.Instruccion[i].execute();
  }
  T+="}"
  T+="\n"

  Traduccion.add(T);
  return T;
  
      
}


}

