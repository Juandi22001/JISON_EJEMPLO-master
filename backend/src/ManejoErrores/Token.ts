import { createQualifiedName } from "typescript";
import { NodoToken } from "./NodoToken";
import fs = require('fs'); 
import { Tooltip } from "../public/js/bootstrap";
import { groupCollapsed } from "console";
export class Token{
 Lista: any=[]
 help:string
 public static aux:string="";
constructor(Tokens:string,Lexema:string,linea:number,columna:number){
  this.agregar(Tokens,Lexema,linea,columna);
 
}
public  grafo(ayuda:string):string{

    var cadena=ayuda;
    Token.aux+=ayuda;
     this.help=ayuda;
return cadena;
}

public  agregar(Tokens:string,Lexema:string,linea:number,columna:number){
    var cadena="";
    
    this.Lista.push(new NodoToken(Tokens,Lexema,linea,columna));

   
    for(const aux of this.Lista){
        Token.aux+="<td>\n";
            Token.aux+=aux.getToken()+"</td><td>"+
             "  "+aux.getLexema()+"  </td><td>"+
             aux. getlinea()+"</td>\n";
        Token.aux+="</tr>\n";
     }
   
   
   
   
   
    this.grafo(cadena)
   
    return cadena;
   
}
public static REPORTE():string{
 var  grafo=""
    grafo+="<html ><head><title>Reporte </title>    </head>" 
    grafo+="<body class=\"MIfondo\">\n";
        grafo+="<div align=\"center\"  class=\"MIfondo\"> \n";
            grafo+="<h1 class = \"tituloTb\">Reporte de Tokens </h1>\n";
            grafo+="<table border=\"2\" align=\"center\" class=\"tabl\">\n";
                grafo+="<tr>\n";
                    grafo+="<th>Token</th>  <th>Lexema</th><th>Fila</th>\n";
                grafo+="</tr>\n";
             grafo+=Token.aux
            grafo+="</table>\n";
        grafo+="</div>\n";
    grafo+="</body>\n";
    grafo+="</html>\n";
  return grafo 


}
}    
