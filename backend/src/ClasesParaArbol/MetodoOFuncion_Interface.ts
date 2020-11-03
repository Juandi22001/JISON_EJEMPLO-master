
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';

import { Traduccion } from '../ManejoErrores/Traduccion';

export class Metodo_FuncionIN extends Node {
       Parametros:any;
     
  constructor ( linea:Number,columna:Number ,Parametros:any ){
super(linea,columna);
this.Parametros=Parametros;
}
execute(){
    
}


}

