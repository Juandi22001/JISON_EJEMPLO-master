
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';


export class FunctionInterface extends Node {
       Tipo:String;
    Nombre: String;
    M_I :Node
    Public : String;
constructor ( linea:Number,columna:Number ,Public :String, Tipo:String, Nombre:string,M_I:Node ){
super(linea,columna);
this.Nombre=Nombre;
this.Public=Public;
this.Tipo=Tipo;
this.M_I=M_I;

}
execute(){
    
}


}

