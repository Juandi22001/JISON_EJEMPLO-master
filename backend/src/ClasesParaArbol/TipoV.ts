
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class TipoV extends Node{
    Tipo:String;
    EXP:String;
      cadena:string;
       Increment_Decrement :String;
       Instruccion:Array<String>;
  constructor ( linea:Number,columna:Number ,Tipo:String ){
super(linea,columna);
this.Tipo=Tipo;

}

traduccion(){
}
execute(){
  this.cadena+=this.Tipo;
Traduccion.add(this.cadena)
    
}


}

