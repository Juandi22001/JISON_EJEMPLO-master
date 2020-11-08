import { Token ,Tipo} from "./Token";
import { Estatico } from "./Estatico";

export class Sintactic{
TkActual:Token;
act:number;
ListaToken:any=[];
Traduccion:string;
ListaErrores:any=[];
constructor(Tk:any[]){
    this.act=0;
    this.Traduccion="";
    this.TkActual=this.ListaToken[this.act]
    //  Falta Ignorar Comentarios
    this.Start();


}

private Start():void{

this.SenteciaClasses();
this.ListaClases();

}
ListaClases(){

    if(this.TkActual.getTipo()==Tipo.class_.toString()){
        this.SenteciaClasses();  
        this.ListaClases();
    }
    else{

    }

}
SenteciaClasses(){
    this.Parea(Tipo.class_);
    this.Parea(Tipo.id);
    this.Parea(Tipo.LlavaAbierta);
     this.MenuCLASE();
     this.Parea(Tipo.LlaveCerrada);
}

MenuCLASE(){
if(this.TkActual.getTipo()==Tipo.var_.toString()||this.TkActual.getTipo()==Tipo.function_.toString()){}

this.DeclaracionClase();
this.MenuCLASE();
}

DeclaracionClase(){

    if(this.TkActual.getTipo()==Tipo.var_.toString()){
             this.Parea(Tipo.var_);
             this.ListaIds();
             this.Parea(Tipo.igual)
             this.MenuVar();
      
    }else if(this.TkActual.getTipo()==Tipo.function_.toString()){
         this.Parea(Tipo.function_);
         this.Parea(Tipo.id);
         this.Parea(Tipo.ParentesisAbierto);
         this.Metodo_F();
    }
//EFE
//2018
/**
 * 
 * 
 * lAURA TE ODIOOOOO
 * 
 * 
*/
//............-..................-........-.............

}
Parametros(){
     if(this.TkActual.getTipo()==Tipo.coma.toString()){

        this.Parea(Tipo.coma)
        this.Parea(Tipo.id);
        this.Parametros();
     }
     else{


     }
}
Metodo_F(){


    if(this.TkActual.getTipo()==Tipo.id.toString()){
          this.Parea(Tipo.id);
          this.Parametros();   
          this.Parea(Tipo.ParentesisCerrado)
         
    }else {
        this.Parea(Tipo.ParentesisCerrado)
         
    }

}
ListaIds(){
    if(this.TkActual.getTipo()==Tipo.coma.toString()){
          this.Parea(Tipo.coma);
          this.Parea(Tipo.id)
          this.ListaIds();

 

    }else if(this.TkActual.getTipo()==Tipo.id.toString()){

        this.Parea(Tipo.id);

    }
    else{


        //efe
    }
}
MenuVar(){
if (this.TkActual.getTipo()==Tipo.LlavaAbierta.toString()){

this.ListaInstrucciones()

}

else {
    this.Expresion();

}
    

}

ListaInstrucciones(){

this.Instrucciones();
this.ListaT();

}
ListaT(){
if (this.TkActual.getTipo()==Tipo.if_.toString()){
    this.Instrucciones();
}
else if (this.TkActual.getTipo()==Tipo.while_.toString()){
    this.Instrucciones();
}


else if (this.TkActual.getTipo()==Tipo.do_.toString()){
    this.Instrucciones();
}
else if (this.TkActual.getTipo()==Tipo.console.toString()){
    this.Instrucciones();
}
else if (this.TkActual.getTipo()==Tipo.for_.toString()){
    this.Instrucciones();
}

else if (this.TkActual.getTipo()==Tipo.return_.toString()){
    this.Instrucciones();
}

else if (this.TkActual.getTipo()==Tipo.continue.toString()){
    this.Instrucciones();
}
else if (this.TkActual.getTipo()==Tipo.id.toString()){
    this.Instrucciones()
}
else if (this.TkActual.getTipo()==Tipo.var_.toString()){
  this.Instrucciones()
}


else{

}
}

Block(){

    this.Parea(Tipo.LlavaAbierta)
    this.Instrucciones();
    this.Parea(Tipo.LlaveCerrada)
}
Instrucciones(){
    if (this.TkActual.getTipo()==Tipo.if_.toString()){
        this.IF();
    }
    else if (this.TkActual.getTipo()==Tipo.while_.toString()){
        this.WHILE();
    }
    
    
    else if (this.TkActual.getTipo()==Tipo.do_.toString()){
        this.DOWHILE();
    }
    else if (this.TkActual.getTipo()==Tipo.console.toString()){
        this.CONSOLA();
    }
    else if (this.TkActual.getTipo()==Tipo.for_.toString()){
        this.FOR();
    }
    
    else if (this.TkActual.getTipo()==Tipo.return_.toString()){
        this.Return();
    }
    
    else if (this.TkActual.getTipo()==Tipo.continue.toString()){
       this.Parea(Tipo.continue)
    }
    else if (this.TkActual.getTipo()==Tipo.id.toString()){
        
        this.ListaIds();
        this.Parea(Tipo.igual)
        this.MenuVar();
    
    }
    else if (this.TkActual.getTipo()==Tipo.var_.toString()){
        this.Parea(Tipo.var_);
    this.ListaIds();
    this.Parea(Tipo.igual)
    this.MenuVar();
  
    }
    
    
    else{
    
    }
}
Return(){

    this.Parea(Tipo.return_);
    if(this.TkActual.getTipo()==Tipo.id.toString()){

        this.Expresion()
    }
    
   else if(this.TkActual.getTipo()==Tipo.digitos.toString()){

        this.Expresion()
    }
    
   else if(this.TkActual.getTipo()==Tipo.comillas.toString()){

    this.Expresion()
}
else if(this.TkActual.getTipo()==Tipo.true.toString()){

     this.Expresion()
 }
 else if(this.TkActual.getTipo()==Tipo.false.toString()){

      this.Expresion()
  }
  
  else if(this.TkActual.getTipo()==Tipo.decimeal.toString()){

    this.Expresion()
}else{

}
}
FOR() {

    this.Parea(Tipo.for_);
    this.Parea(Tipo.ParentesisAbierto)
    this.DefFor();
    this.Parea(Tipo.puntoycoma)
   this.Expresion()
    this.Parea(Tipo.puntoycoma)
    this.Increment()
    this.Parea(Tipo.ParentesisCerrado)
}

Increment(){


    if(this.TkActual.getTipo()==Tipo.incremento.toString()){
        this.Parea(Tipo.incremento)
    }
    
    else if(this.TkActual.getTipo()==Tipo.decremento.toString()){
        this.Parea(Tipo.decremento)
    }
}
DefFor(){
    this.Parea(Tipo.id)
    this.Parea(Tipo.igual)
    this.Expresion();
}
CONSOLA(){
    this.Parea(Tipo.console)
    this.Parea(Tipo.log)
    this.Parea(Tipo.log)
    this.Parea(Tipo.ParentesisAbierto)
    this.Expresion
    this.Parea(Tipo.ParentesisCerrado)

}
DOWHILE(){
    this.Parea(Tipo.do_);
    this.Block
    this.Parea(Tipo.while_)
    this.Parea(Tipo.ParentesisAbierto)
    this.Condiciones()
    this.Parea(Tipo.ParentesisCerrado)
   
}
WHILE(){
    this.Parea(Tipo.while_);
    this.Parea(Tipo.ParentesisAbierto)
    this.Condiciones()
    this.Parea(Tipo.ParentesisCerrado)
    this.Block()
}
IF(){
    this.Parea(Tipo.if_);
    this.Parea(Tipo.ParentesisAbierto);
    this.Condiciones();
    this.Parea(Tipo.ParentesisCerrado);
    this.Block();
    this.ELSE();
}
ELSE(){
    if(this.TkActual.getTipo()==Tipo.else_.toString()){
        this.Parea(Tipo.else_)
        this.IFX();
     }else{

     }
}
IFX(){
    if(this.TkActual.getTipo()==Tipo.if_.toString()){
        this.IF()
    }else{

        this.Block();
    }
}

Condiciones(){
    this.Expresion();
    this.Condicionesx();
}
Condicionesx(){
    if(this.TkActual.getTipo()==Tipo.YY.toString()){
        this.Parea(Tipo.YY)
        this.Expresion();
        this.Condicionesx();       
     }
    else if(this.TkActual.getTipo()==Tipo.OR.toString()){
        this.Parea(Tipo.OR)
        this.Expresion();
        this.Condicionesx();       
     }
 
 
}
Expresion(){ this.EX(); this.Symbol();


}
EX(){
this.T(); 
this.EXS();
}

EXS(){
    if(this.TkActual.getTipo()==Tipo.mas.toString()){
       this.Parea(Tipo.mas)
       this.EXS();       
    }
    else if(this.TkActual.getTipo()==Tipo.menos.toString()) {
         this.Parea(Tipo.menos)
         this.EXS();


        }
        
    else{


    }
}
T(){
this.DATOS();
this.TX();

}
TX(){
    if(this.TkActual.getTipo()==Tipo.por.toString()){
        this.Parea(Tipo.por);
        this.DATOS()
        this.TX();      
     }
     else if(this.TkActual.getTipo()==Tipo.Barra.toString()){
        this.Parea(Tipo.Barra)
        this.DATOS()
        this.TX();       
     }
     else{

        //efe
     }

}
DATOS(){
    if(this.TkActual.getTipo()==Tipo.decimeal.toString()){
      this.Parea(Tipo.decimeal)
    }
    
    else if(this.TkActual.getTipo()==Tipo.comillas.toString()){
        this.Parea(Tipo.comillas)
      }

      
    else if(this.TkActual.getTipo()==Tipo.id.toString()){
        this.Parea(Tipo.id)
         this.ExpresionM()  
    }
     
    else if(this.TkActual.getTipo()==Tipo.true.toString()){
        this.Parea(Tipo.true)
      }
     
    else if(this.TkActual.getTipo()==Tipo.false.toString()){
        this.Parea(Tipo.false)
      }
      else if(this.TkActual.getTipo()==Tipo.digitos.toString()){
          this.Parea(Tipo.digitos)
        }
        else if(this.TkActual.getTipo()==Tipo.ParentesisAbierto.toString()){
            this.Parea(Tipo.ParentesisAbierto)
            this.Expresion()
            this.Parea(Tipo.ParentesisCerrado);
          }
       

     

}
ExpresionM(){

     if(this.TkActual.getTipo()==Tipo.ParentesisAbierto.toString()){
        this.Parea(Tipo.ParentesisAbierto)
        this.LlmadaM()
      }
      else{

        //efe
      }
}

LlmadaM(){


     if(this.TkActual.getTipo()==Tipo.ParentesisAbierto.toString()){
      this.ListaE();
      this.Parea(Tipo.ParentesisCerrado)
      }else{

        this.Parea(Tipo.ParentesisCerrado)
      }

}
ListaE(){
    this.Expresion();
    this.ListaEX();
}
ListaEX(){
    if(this.TkActual.getTipo()==Tipo.coma.toString()){
       
        this.Parea(Tipo.coma)
        }else{
  
        }
}
Symbol(){
    if(this.TkActual.getTipo()==Tipo.doble_Igual.toString()){
        this.Parea(Tipo.doble_Igual)
        this.EX()
      }
   
      else if(this.TkActual.getTipo()==Tipo.igual.toString()){
        this.Parea(Tipo.igual)
        this.EX()

    }

    
    else if(this.TkActual.getTipo()==Tipo.mayor.toString()){
        this.Parea(Tipo.mayor)
        this.EX()
      }
      else if(this.TkActual.getTipo()==Tipo.menor.toString()){
        this.Parea(Tipo.menor)
        this.EX()
      }
      
      else if(this.TkActual.getTipo()==Tipo.menor_Igual.toString()){
        this.Parea(Tipo.menor_Igual)
        this.EX()
      }
      else if(this.TkActual.getTipo()==Tipo.mayor_Igual.toString()){
        this.Parea(Tipo.mayor_Igual)
        this.EX()
      }
      else if(this.TkActual.getTipo()==Tipo.diferente.toString()){
        this.Parea(Tipo.menor)
        this.EX()
      }else{

        //epsilon
      }
}
Parea (tip:Tipo):void{
this.Comentarios();
    if (this.TkActual.getTipo()!=tip.toString()){
           console.log("Se encontro un error"+" "+" Se esperaba "+" "+this.GetERROR(tip))
             this.Panico()
    }

    else{
        this.act++;
        this.ListaToken[this.act]      
    }
} 
Comentarios(){
if(this.TkActual.getTipo()==Tipo.ComentarioLinea.toString() || this.TkActual.getTipo()==Tipo.ComentarioMulti.toString())
//traduccion

this.act++;
this.ListaToken[this.act]      
}
Panico(){

    while(this.TkActual.getTipo()!=Tipo.LlaveCerrada.toString()){
           this.act++;
           this.ListaToken[this.act]      
   
    }

}
GetERROR(tipo :Tipo):string{
    switch(tipo){

        case Tipo.class_:
            return "palabra reservada Class";
        
            case Tipo.var_:
                return "palabra reservada var";    

        case Tipo.function_:
            return "palabra reservada Function";
            
        case Tipo.var_:
            return "palabra reservada var";
        case Tipo.Return_:
            return "palabra reservada return";
        
        case Tipo.if_:
            return "palabra reservada if";
       
        case Tipo.else_:
                return "palabra reservada else";
         
        case Tipo.Break_:
            return "palabra reservada Break";
            
        case Tipo.true:
            return "palabra reservada true";
            
        case Tipo.false:
            return "palabra reservada false";
            
        case Tipo.null:
            return "palabra reservada null";
            
        case Tipo.undefined:
            return "palabra reservada undefined";
            
        case Tipo.let:
            return "palabra reservada let";
            
        case Tipo.const:
            return "palara reservada const";
            
        case Tipo.consola:
            return "palabra reservada consola";
            
        case Tipo.LlavaAbierta:
            return "llave abierta";
            
        case Tipo.LlaveCerrada:
            return "LLave Cerrada";
            
        case Tipo.ParentesisAbierto:
            return "Parentesis ABIERTO";
            
        case Tipo.ParentesisCerrado:
            return "Parentesis Cerrado ";
            
        case Tipo.comillas:
            return "Comillas";
            
        case Tipo.digitos:
            return "entero";
            
        case Tipo.por:
            return "POR ";
            
        case Tipo.mas:
            return "MAS";

            
        case Tipo.incremento:
            return "Incremento";
            
        case Tipo.decremento:
            return "Decremento";
            
        case Tipo.coma:
            return "Coma";
            
        case Tipo.puntoycoma:
            return "punto y coma";
            
        case Tipo.igual:
            return "Igual";
            
        case Tipo.doble_Igual:
            return "Doble Igual==";
            
        case Tipo.mayor:
            return "mayor >";
            
        case Tipo.menor:
            return "menor <";
            
        case Tipo.menor_Igual:
            return "menor <=";
            
        case Tipo.mayor_Igual:
            return "mayor igual >=";
            
        case Tipo.YY:
            return "AND";
            
        case Tipo.OR:
            return "OR";
            
        case Tipo.ComentarioLinea:
            return "Comentario Linea";
            
        case Tipo.ComentarioMulti:
            return "Comentario Multilinea0";
        
            case Tipo.diferente:
                return "Diferente para or ";
        
                case Tipo.id:
                    return "identificador ";
                    case Tipo.decimeal:
                        return "decimales .. ";        
  
    }

}
}