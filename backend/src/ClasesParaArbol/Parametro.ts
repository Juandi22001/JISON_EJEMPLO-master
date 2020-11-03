
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Parametro extends Node {
  
    EXP1: Node;
    Tipo :String;
   ID:Node;
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,Tipo:String,valor:Node ){
super(linea,columna);
this.Tipo = Tipo;
this.ID=valor;

}


execute(){
    this.cadena+=this.Tipo.toString()+" "+this.ID.execute.toString();
    Traduccion.add(this.cadena)
}


}

