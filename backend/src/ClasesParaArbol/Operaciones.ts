
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';

export class Operaciones extends Node {
  
    EXP1: Node;
    EXP2 :Node
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,EXP1 :Node,Simbolo:String,  EXP2:Node ){
super(linea,columna);
this.Simbolo=Simbolo;
this.EXP1=EXP1;
this.EXP2=EXP2;

}

traduccion(){



}
execute(){ 
    
    var T="";
    if(this.EXP1!=null){
    T+=this.EXP1.execute()
}
    T+=" "+this.Simbolo+this.EXP2.execute();
Traduccion.add(T);

return T;
    
}


}

