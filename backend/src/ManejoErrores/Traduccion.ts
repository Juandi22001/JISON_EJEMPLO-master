import {Node} from '../Abstract/Node';



class Traduccion{
    public static cadena:string = "";
    constructor(){
    }

  

    public static clear(){
        Traduccion.cadena = ""; 
    }

    public static getCadena():string{ 

        return Traduccion.cadena;
    }

    public static add(cadena:string):any{
        Traduccion.cadena+= cadena; 
    }



}
export{Traduccion};