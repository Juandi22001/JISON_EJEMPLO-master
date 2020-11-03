
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class DeclaracionMF extends Node {
  
   Instruccion_Vacias: Node;

   Tipo: String;
    Exp_Case :Node
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,Tipo:String,Instruccion_Vacia :Node,  Exp_Case:Node ){
super(linea,columna);
this.Tipo=Tipo;
this.Instruccion_Vacias=Instruccion_Vacia;
this.Exp_Case=Exp_Case;

}

traduccion(){

  
}
execute(){
    this.cadena+=this.Tipo.toString()+" "+this.Instruccion_Vacias.execute.toString()+"="+this.Exp_Case.execute.toString();
    Traduccion.add(this.cadena)
}


}
