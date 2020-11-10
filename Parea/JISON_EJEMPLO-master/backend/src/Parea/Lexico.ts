import { Token ,Tipo} from "./Token";
import { Estatico } from "./Estatico";
import{ErrToken} from "./ErrToken";

export class Lexico{
  ListaTokens:any= []
  ErroresTokens:any= []

  lexema:string;
  estado:number;
  constructor(){
   this.lexema="";   
 
}
 Parser(cadena:string):void{
     let c:string="";
    
     this.lexema="";
     this.estado=0
     for (let i = 0; i < cadena.length; i++) {
       c =cadena[i];
         
         switch(this.estado){
        
            case 0:
            
                if (c=="\n"){


                    Estatico.COLUMNAS=0;
                    Estatico.FILAS++;
                }
                
                else if (c==" "){

                    Estatico.COLUMNAS++;
                }

                else if ( c=="\r"){




                }
                else if( c=="\t"){

                }

                else if ( this.esDigito(c)){
                      this.lexema+=c;
                    this.estado=2;
                }
                 
                else if ( this.esLetra(c)){
                    this.lexema+=c;
                    console.log("SIIIII")
                  this.estado=1;
              }
                else if (c=="{"){ 
                     this.lexema+=c;
                     Estatico.COLUMNAS++;
                     this.agregar(Tipo.LlavaAbierta);
                    
                    
                }

                else if (c=="}"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.agregar(Tipo.LlaveCerrada);
                    
                
                }


                
                else if (c=="("){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.agregar(Tipo.ParentesisAbierto);
                    
                
                }
                else if (c=="*"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.agregar(Tipo.por);
                    
                
                }
                else if (c=="."){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.agregar(Tipo.punto);
                    
                
                }
                else if (c==")"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.agregar(Tipo.ParentesisCerrado);
                    
                
                }
                else if (c=="+"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                  this.estado=5;
                }
                else if (c=="-"){
                    this.lexema+=c;
                    console.log("esto es un menos")
                    Estatico.COLUMNAS++;
                    this.estado=6;
                
                }
                else if (c==";"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    console.log("efe?")
                    this.agregar(Tipo.puntoycoma);
                    
                
                }
                else if (c==","){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.agregar(Tipo.coma);
                    
                
                }
                else if (c=="!"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.agregar(Tipo.diferente);
                    
                
                }
                else if (c=="="){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.estado=7;       
                
                }
                else if (c=="<"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                   this.estado=8;
                
                }
                else if (c=="\""){
                    Estatico.COLUMNAS++;
                   this.estado=4;
                
                }



                else if (c==">"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                   this.estado=9;
                
                }
                else if (c=="/"){
                    this.lexema+=c
                   console.log("barraaaaaaa")
                    this.estado=10;
                    
                } else if (c=="|"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.estado=14;
                    
                
                } else if (c=="&"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                   this.estado=15;
                    
                
                }

                else{
                    this.lexema+=c
                    this.agregarE(this.lexema)

                }
            break;

           case 1:
           if (this.esLetra(c)||this.esDigito(c)||c=="_"){
             
              this.lexema+=c;
              this.estado=1;
            Estatico.COLUMNAS++;


           }else if(this.lexema=="class"){
             console.log("fe")
            this.agregar(Tipo.class_);
              i--;
           }
           else if(this.lexema=="var"){

            this.agregar(Tipo.var_);
            i--;
           }
          
           else if(this.lexema=="continue"){

            this.agregar(Tipo.continue);
            i--;
           } 
           else if(this.lexema=="function"){

            this.agregar(Tipo.function_);
            i--;
           }
           else if(this.lexema=="return"){

            this.agregar(Tipo.return_);
            i--;
           }
           else if(this.lexema=="if"){

            this.agregar(Tipo.if_);
            i--;
           }
           else if(this.lexema=="while"){

            this.agregar(Tipo.while_);
            i--;
           }
           else if(this.lexema=="Do"){

            this.agregar(Tipo.do_);
            i--;
           }
           else if(this.lexema=="for"){

            this.agregar(Tipo.for_);
            i--;
           }
           else if(this.lexema=="else"){

            this.agregar(Tipo.else_);
            i--;
           }
           else if(this.lexema=="break"){

            this.agregar(Tipo.Break_);
            i--;
           }
           else if(this.lexema=="true"){

            this.agregar(Tipo.true);
            i--;
           }
           else if(this.lexema=="false"){

            this.agregar(Tipo.false);
            i--;
           }
else if(this.lexema=="null"){

            this.agregar(Tipo.null);
            i--;
           }
           else if(this.lexema=="undefined"){

            this.agregar(Tipo.undefined);
            i--;
           }
           else if(this.lexema=="main"){

            this.agregar(Tipo.main);
            i--;
           }
          else if(this.lexema=="let"){

            this.agregar(Tipo.let);
            i--;
           }
           else if(this.lexema=="const"){

            this.agregar(Tipo.const);
            i--;
           }
           else if(this.lexema=="console"){
            this.agregar(Tipo.console);
            i--;
           }
           else if(this.lexema=="log"){

            this.agregar(Tipo.log);
            i--;
           }
       
           else{

            this.agregar(Tipo.id)
            console.log("guardando id")
            i--;
           }

         

               break;
           case 2:

           if ( this.esDigito(c)){

            this.lexema+=c;
            Estatico.COLUMNAS++;
            this.estado=2;
           }
           else if ( c=="."){

             this.lexema+=c;
             this.estado=3;
           }

           else{

            this.agregar(Tipo.digitos);
            i--;
           }
               break;
              
            case 3:
            if ( this.esDigito(c)){
               this.estado=3;
               this.lexema+=c;
               Estatico.COLUMNAS++;


            } else{

                this.agregar(Tipo.decimeal)

                i--;


            }   
            
            
            break;

            case 4:
                 if (c=="\""){
                     this.agregar(Tipo.comillas)
                }
                else if(c==" "){
                    Estatico.COLUMNAS++;
                    this.estado=4;
                    this.lexema+=c
                 
                }    
                else{
                    Estatico.COLUMNAS++;
                    this.estado=4;
                    this.lexema+=c
                 
                 


                }
            break;
               case 5:

           if ( c=="+"){
                 this.lexema+=c;
                 
                 this.agregar(Tipo.incremento);
                    
                

            
           } else {
                
                 
            this.agregar(Tipo.mas);
                    i--;


           }
            break;



          case 6:
         if( c=="-"){

           this.lexema+=c;

           
           this.agregar(Tipo.decremento);
                    



         }else {
            
            this.agregar(Tipo.menos);
                    i--;



         }


              break;


        case 7: 
             if ( c=="="){

                 this.lexema+=c;
                 this.agregar(Tipo.doble_Igual)
                 
                
             }

             else {

                this.agregar(Tipo.igual);
                i--;
             }
           
         
        break;

            case 8:

                if ( c=="="){

                    this.lexema+=c;
                    this.agregar(Tipo.menor_Igual)
                    
                   
                }
   
                else {
   
                   this.agregar(Tipo.menor);
                   i--;
                }
            break;

            case 9:

                if ( c=="="){

                    this.lexema+=c;
                    this.agregar(Tipo.mayor_Igual)
                    
                   
                }
   
                else {
   
                   this.agregar(Tipo.mayor);
                   i--;
                }
            break;


            case 10:
                
             if (c=="/"){
                 this.estado=11;
                 Estatico.COLUMNAS++;
             }
              else if(c=="*"){
              
                this.estado=12;
              }
              else{
                  console.log("esto es una barra")
                this.agregar(Tipo.Barra); i--;
                
              }
            
            break;

            case 11:
              if (c=="\n"){
                 
               this.agregar(Tipo.ComentarioLinea);



              }else{


                this.lexema+=c;
                Estatico.COLUMNAS++;
              }


            break;

             case 12:
                if ( c=="*"){

                    this.estado=13
                }else{

                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                }
             break;
            case 13:
                if( c=="/"){
                    console.log("agregue un comentario multi")

                    this.agregar(Tipo.ComentarioMulti);
                } 
                else{
                    this.estado=12;
                    this.lexema+=c
                }  
                 

                break;
            case 14:

            if( c=="|"){

                this.lexema+=c;
                this.agregar(Tipo.OR)
                console.log("agregando or")
            }

                break;

             case 15:

             if( c=="&"){

                this.lexema+=c;
                this.agregar(Tipo.YY)
            }


         }
         

     }
        

  }

  
  public agregar(tipoToken: Tipo){
    this.ListaTokens.push(new Token(tipoToken, this.lexema));
    console.log(this.lexema+"---")
    this.lexema = "";
    this.estado = 0;
};
public Grafo():string{
    var  grafo=""
    grafo+="<html ><head><title>Reporte </title>    </head>" 
    grafo+="<body class=\"MIfondo\">\n";
        grafo+="<div align=\"center\"  class=\"MIfondo\"> \n";
            grafo+="<h1 class = \"tituloTb\">Reporte de Tokens </h1>\n";
            grafo+="<table border=\"2\" align=\"center\" class=\"tabl\">\n";
                grafo+="<tr>\n";
                    grafo+="<th>Token</th>  <th>Lexema</th><th>Fila</th>\n";
                grafo+="</tr>\n";
                
    for(const aux of this.ListaTokens){
     grafo+="<td>\n";
         grafo+=aux.getToken()+"</td><td>"+
             "  "+aux.getLexema()+"  </td><td>"+
             aux. getlinea()+"</td>\n";
     grafo+="</tr>\n";
     }
   
            grafo+="</table>\n";
        grafo+="</div>\n";
    grafo+="</body>\n";
    grafo+="</html>\n";
  return grafo 

    
}
public GrafoE():string{
    var  grafo=""
    grafo+="<html ><head><title>Reporte </title>    </head>" 
    grafo+="<body class=\"MIfondo\">\n";
        grafo+="<div align=\"center\"  class=\"MIfondo\"> \n";
            grafo+="<h1 class = \"tituloTb\">Reporte de Errores </h1>\n";
            grafo+="<table border=\"2\" align=\"center\" class=\"tabl\">\n";
                grafo+="<tr>\n";
                    grafo+="<th>Tipo</th>  <th>Error</th><th>Fila</th>\n";
                grafo+="</tr>\n";
                
    for(const aux of this.ErroresTokens){
     grafo+="<td>\n";
         grafo+="lexico</td><td>"+
             "  "+aux. getdescripcion()+"  </td><td>"+
             aux. getlinea()+"</td>\n";
     grafo+="</tr>\n";
     }
   
            grafo+="</table>\n";
        grafo+="</div>\n";
    grafo+="</body>\n";
    grafo+="</html>\n";
  return grafo 

    
}
      public agregarE(err:string){
           this.ErroresTokens.push(new ErrToken("lexico","simbolo no reconocido por el sistema"+this.lexema))
        this.lexema = "";
    this.estado = 0;
};


esDigito (carcer:any){
    let ascii = carcer.charCodeAt(0);
    return ascii > 47 && ascii < 58;
}
esLetra(carcer:any){
    let ascii = carcer.toUpperCase().charCodeAt(0);
    return ascii > 64 && ascii < 91;
}


getLista():any[]{
    return this.ListaTokens;
}




}