
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Coma extends Node {
       Declaracion:Node;
       Tipo: Type;
       EXP:Node;
       Coma:String;
       cadena:string;
       Increment_Decrement :Node;
       Instruccion:Array<Node>;
  constructor ( linea:Number,columna:Number ,Coma:String,EXP:Node ){
super(linea,columna);
this.Coma=Coma;

this.EXP=EXP;

}
traductor(){
  
}
execute(){
  var cadenaT=""

  console.log(this.Coma+"---")
  cadenaT+=this.Coma+" "
  
  

    cadenaT+=this.EXP.execute()
  
Traduccion.add(cadenaT);
cadenaT+=" "
return cadenaT;  
}


}

