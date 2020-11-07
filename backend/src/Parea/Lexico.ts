import { Token } from "./Token";
import { Estatico } from "./Estatico";

export class Lexico{
  ListaTokens:any= []
  ErroresTokens:any= []

  lexema:string="";
  estado:number;
  constructor(){
   this.lexema="";   
  }
  public Parser(cadena:string){
     let act="";
     this.lexema="";
     this.estado=0
     for (let i = 0; i < cadena.length; i++) {
       act =cadena[i];

         switch(this.estado){

            case 0:
                if (act="\n"){


                    
                } 
            break;
         }
         

     }
        

  }

    




}