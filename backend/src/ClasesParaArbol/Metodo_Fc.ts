
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


execute(){
 var cadenaT=""

 if (this.Parametros!=null){
   
 cadenaT+="("
for(let aux  of this.Parametros){
  cadenaT += aux.ID;

}
 cadenaT+=")"

 
}cadenaT+="{"
  for(let i = 0 ; i < this.Contenido.length ; i++){
   cadenaT += this.Contenido[i].execute();
  }
 cadenaT+="}";
  
  Traduccion.add(cadenaT);
  return cadenaT;
  
    
}


}

