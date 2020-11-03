
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Case extends Node {
  
    Lst_Cases: Node;
    Default :Node
    Simbolo : String;
    void :String;

    cadena:string;
constructor ( linea:Number,columna:Number ,Lst_Cases :Node,  Default:Node ){
super(linea,columna);
this.Lst_Cases=Lst_Cases;
this.Default=Default;

}

traduccion(){

      this.cadena+="{";
    this.cadena+=this.Lst_Cases.execute.toString();
     if(this.Default!=null){
               this.cadena+=this.Default.execute.toString();

     }
      this.cadena+"{";

      Traduccion.add(this.cadena)

}
execute(){
    
}


}

