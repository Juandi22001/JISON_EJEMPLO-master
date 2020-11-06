
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';


export class Id_Solo extends Node {
  
   Instruccion_Vacias: Node;
    Exp_Case :Node
    Simbolo : String;
   Id_Solo :String;
constructor ( linea:Number,columna:Number ,Id_Solo:String ){
super(linea,columna);
this.Id_Solo=Id_Solo;
}
execute(){


   var T ="";

   T+= this.Id_Solo;
   return T;
    
}


}

