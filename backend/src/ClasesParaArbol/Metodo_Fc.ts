
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';

export class Metodo_Fc extends Node {
       Parametros:any;
    Contenido: Array<Node>
    cadena:string;
  constructor ( linea:Number,columna:Number ,Parametros:any, Contenido:Array<Node> ){
super(linea,columna);
this.Parametros=Parametros;
this.Contenido=Contenido;
}

traduccion(){
}
execute(){

  this.cadena+=this.Parametros.toString();
  this.cadena+=")";
  this.cadena+="{"
  for(let i = 0 ; i < this.Contenido.length ; i++){
    this.cadena += this.Contenido[i].execute.toString();
  }
  this.cadena+="}";
  
  Traduccion.add(this.cadena);
  
    
}


}

