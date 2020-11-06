import { createQualifiedName } from "typescript";
import { NodoError } from "./NodoError";
import fs = require('fs'); 
import { Tooltip } from "../public/js/bootstrap";
export class Errores{
 Lista: any=[]
 help:string
 public static aux:string="";
constructor(err:string,Lexema:string,linea:number,columna:number){
  this.agregar(err,Lexema,linea,columna);
 
}
public  grafo(ayuda:string):string{

    var cadena=ayuda;
   Errores.aux+=ayuda;
     this.help=ayuda;
return cadena;
}

public  agregar(err:string,Lexema:string,linea:number,columna:number){
    var cadena="";
    
    this.Lista.push(new NodoError(err,Lexema,linea,columna));

   
    for(const aux of this.Lista){
      Errores.aux+="<td>\n";
          Errores.aux+=aux.getdescripcion()+"</td><td>"+
            "  "+aux.gettipo()+"  </td><td>"+
            aux. getlinea()+"</td>\n";
      Errores.aux+="</tr>\n";
    }
   
   
   
   

   
    return cadena;
   
}
public static REPORTE():string{

  var grafo=""

grafo+="<html ><head><title>Reporte de Errores Lexicos /Sintacticos </title>    </head>" 
grafo+="<body class=\"MIfondo\">\n";
    grafo+="<div align=\"center\"  class=\"MIfondo\"> \n";
        grafo+="<h1 class = \"tituloTb\">Reporte deErroress </h1>\n";
        grafo+="<table border=\"2\" align=\"center\" class=\"tabl\">\n";
            grafo+="<tr>\n";
                grafo+="<th>Error</th>  <th>Tipo</th><th>Fila</th>\n";
            grafo+="</tr>\n";
               grafo+=Errores.aux
        grafo+="</table>\n";
    grafo+="</div>\n";
grafo+="</body>\n";
grafo+="</html>\n";

  return grafo;
  
}
}    
