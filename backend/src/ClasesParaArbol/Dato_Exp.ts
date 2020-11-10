
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Dato_Exp extends Node {
  
    EXP1: Node;
    Tipo :String;
    valor:Object;
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,Tipo:String,valor:Object ){
super(linea,columna);
this.Tipo = Tipo;
this.valor=valor;

}

execute(){
  var cadenaAux=""
  if (this.Tipo=="String"){

    cadenaAux+="\""+this.valor+"\"";
 

  }else{

    cadenaAux+=this.valor;
  }
 
  cadenaAux+=" "
Traduccion.add(cadenaAux)
return cadenaAux;
}


}

