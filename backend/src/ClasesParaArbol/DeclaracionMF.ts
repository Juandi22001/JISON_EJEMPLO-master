
import {Node} from '../Abstract/Node';
import {Type,types } from './Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class DeclaracionMF extends Node {
  
   Instruccion_Vacia: Array<Node>;

   Tipo: String;
    Exp_Case :Node
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,Tipo:String,Instruccion_Vacia :Array<Node>,  Exp_Case:Node ){
super(linea,columna);
this.Tipo=Tipo;
this.Instruccion_Vacia=Instruccion_Vacia;
this.Exp_Case=Exp_Case;
}

execute(){

    var cadenaT=""
    cadenaT+="var"+" ";

    for(let i = 0 ; i < this.Instruccion_Vacia.length ; i++){
        cadenaT += this.Instruccion_Vacia[0];
       }
    if (this.Exp_Case!=null){
        
       cadenaT+="="
        cadenaT+= this.Exp_Case.execute();
    }

     cadenaT+=" ";
     cadenaT+="\n" 
    Traduccion.add(cadenaT)
    return cadenaT;
} 


}
