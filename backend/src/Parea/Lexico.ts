import { Token ,Tipo} from "./Token";
import { Estatico } from "./Estatico";
import {ErrToken} from "./ErrToken"

export class Lexico{
  ListaTokens:any= []
  ErroresTokens:any= []

  lexema:string="";
  estado:number;
  constructor(){
   this.lexema="";   
  }
  public Parser(cadena:string){
     let c="";
     this.lexema="";
     this.estado=0
     for (let i = 0; i < cadena.length; i++) {
       c =cadena[i];

         switch(this.estado){

            case 0:
                if (c="\n"){


                    Estatico.COLUMNAS=0;
                    Estatico.FILAS++;
                }
                
                else if (c=" "){

                    Estatico.COLUMNAS++;
                }

                else if ( c="\r"){




                }
                else if( c=="\t"){

                }

                else if ( this.esDigito(c)){
                      this.lexema+=c;
                    this.estado=2;
                }
                 
                else if ( this.esLetra(c)){
                    this.lexema+=c;
                  this.estado=1;
              }
                else if (c="{"){ 
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
                    Estatico.COLUMNAS++;
                    this.estado=6;
                
                }
                else if (c==";"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.agregar(Tipo.puntoycoma);
                    
                
                }
                else if (c==","){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    this.agregar(Tipo.coma);
                    
                
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
                else if (c=="\" "){
                    Estatico.COLUMNAS++;
                   this.estado=4;
                
                }



                else if (c==">"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                   this.estado=9;
                
                }
                else if (c=="/"){
                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                    
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



                }
            break;

           case 1:
           if (this.esLetra(c)){

              this.lexema+=c;
              this.estado=1;
            Estatico.COLUMNAS++;


           }else if(this.lexema=="class"){

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

            this.agregar(Tipo.class_);
            i--;
           }
           else if(this.lexema=="while"){

            this.agregar(Tipo.while_);
            i--;
           }
           else if(this.lexema=="do"){

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
           else if(this.lexema=="Break"){

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
                 if (c=="\" "){
                     this.agregar(Tipo.comillas)
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
                this.agregar(Tipo.Barra);
                i--;
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

                    this.estado=12
                }else{

                    this.lexema+=c;
                    Estatico.COLUMNAS++;
                }
             break;
            case 13:
                if( c=="/"){


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
    this.lexema = "";// LIMPIA LE ACUMULADOR
    this.estado = 0;
};

      public agregarE(errr:string){
           this.ErroresTokens.push(new ErrToken(this.lexema,"simbolo no reconocido por el sistema"))
        this.lexema = "";// LIMPIA LE ACUMULADOR
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




}