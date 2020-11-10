import { Token ,Tipo} from "./Token";
import { Estatico } from "./Estatico";
import{ErrToken} from "./ErrToken";
let ayudas ="";
let TraduccionT="";
export class Sintactico{
TkActual:Token;
act:number;
ListaToken:any=[];
Traduccion:string;
ListaErrores:any=[];
 ayuda:string;
traduccion:string;
len:number;
var:boolean;

cicloDoWhile:boolean
constructor(Tk:any[]){
    this.act=0;
 
    this.ListaToken=Tk;
   this. len=Tk.length
    this.TkActual=this.ListaToken[this.act]
    //  Falta Ignorar Comentarios
    this.Start();


}

public getTraduccion():String{

    return TraduccionT 
}

private Start():void{
    this.Comentarios();
this.SenteciaClasses();
this.ListaClases();

}
ListaClases(){
    this.Comentarios();
    if(this.TkActual.getTipo()==Tipo.class_){
        this.SenteciaClasses();  
        this.ListaClases();
    }
    else{

    }

}
SenteciaClasses(){
     this.Comentarios()
    this.Parea(Tipo.class_);
  TraduccionT+="class"+" "+this.TkActual.getLexema()+":"+"\n"
    this.Parea(Tipo.id);
    this.Parea(Tipo.LlavaAbierta);
     this.MenuCLASE();
     this.Parea(Tipo.LlaveCerrada);
}

MenuCLASE(){
    this.Comentarios()
if(this.TkActual.getTipo()==Tipo.var_||this.TkActual.getTipo()==Tipo.function_||this.TkActual.getTipo()==Tipo.main|| this.TkActual.getTipo()==Tipo.id){

this.DeclaracionClase();
this.MenuCLASE();}
else{

}
}
Igual(){
if (this.TkActual.getTipo()==Tipo.igual){
    this.Parea(Tipo.igual)
    this.MenuVar();
}
else{
TraduccionT+="var"+"  "+ayudas+"\n"
ayudas=""
}

}
DeclaracionClase(){this.Comentarios()
         TraduccionT+="   "
    if(this.TkActual.getTipo()==Tipo.var_){
        
             this.Parea(Tipo.var_);
             this.ListaIds()
                this.Igual();
             
      
    }else if(this.TkActual.getTipo()==Tipo.function_){
         this.Parea(Tipo.function_);
       TraduccionT+="self"+ " "+this.TkActual.getLexema()+"("
         this.Parea(Tipo.id);
         this.Parea(Tipo.ParentesisAbierto);
         this.Metodo_F();
    }
    else if (this.TkActual.getTipo()==Tipo.id){
        TraduccionT+="           ";
        this.ListaIds2();

        
        this.Parea(Tipo.igual)
        TraduccionT+="="
     this.Expresion();

     TraduccionT+="\n"
    
    }
    else if(this.TkActual.getTipo()==Tipo.main){
  this.Parea(Tipo.main);
TraduccionT+="def main():"+"\n"
  this.Parea(Tipo.ParentesisAbierto)
  this.Parea(Tipo.ParentesisCerrado)
  this.Parea(Tipo.LlavaAbierta)
  
  this.ListaInstrucciones()

  this.Parea(Tipo.LlaveCerrada)


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
     if(this.TkActual.getTipo()==Tipo.coma){
  TraduccionT+=","
        this.Parea(Tipo.coma)
TraduccionT+=this.TkActual.getLexema();
        this.Parea(Tipo.id);
        this.Parametros();
     }
     else{


     }
}
Metodo_F(){


    if(this.TkActual.getTipo()==Tipo.id){
      TraduccionT+=this.TkActual.getLexema();
          this.Parea(Tipo.id);
          this.Parametros();   
          this.Parea(Tipo.ParentesisCerrado)
        TraduccionT+=")"+":"+"\n"
        this.Parea(Tipo.LlavaAbierta)
          this.ListaInstrucciones()
          this.Parea(Tipo.LlaveCerrada)
    
         
    }else {
        this.Parea(Tipo.ParentesisCerrado)
       TraduccionT+=")"+":"+"\n"
         this.Parea(Tipo.LlavaAbierta)
         this.ListaInstrucciones()
         this.Parea(Tipo.LlaveCerrada)
    }

}
ListaIds(){

    if(this.TkActual.getTipo()==Tipo.coma){
        console.log("coma")
        ayudas+=this.TkActual.getLexema()  
        this.Parea(Tipo.coma);
        
          this.ListaIds();

 

    }else if(this.TkActual.getTipo()==Tipo.id){
        console.log(this.TkActual.getLexema()+"---------")
        let a = this.TkActual.getLexema()
          ayudas+=this.TkActual.getLexema();
                  this.Parea(Tipo.id);
    this.ListaIds();
         
    }
    else{


        //efe
    }
}
ListaIds2(){
    
    if(this.TkActual.getTipo()==Tipo.coma){
    
        this.Parea(Tipo.coma);
      TraduccionT+=this.TkActual.getLexema()  
        this.Parea(Tipo.id)
          this.ListaIds2();

 

    }else if(this.TkActual.getTipo()==Tipo.id){
    
    
        
    TraduccionT+=this.TkActual.getLexema();
          this.Parea(Tipo.id);
        this.ListaIds2()
    }
    else{


        //efe
    }
}
MenuVar(){
if (this.TkActual.getTipo()==Tipo.LlavaAbierta){
    console.log(ayudas+"*****")
 TraduccionT+="self ()"+ "  "+ayudas+":"+"\n";
 TraduccionT+="   "
 ayudas="";
 this.Parea(Tipo.LlavaAbierta)
 
this.ListaInstrucciones()
this.Parea(Tipo.LlaveCerrada)

}

else {
  
  
    TraduccionT+="var"+" "+ayudas+"="
  
  this.var=false
    this.Expresion();
    ayudas=""
}
    

}

ListaInstrucciones(){

this.Instrucciones();
this.ListaT();

}
ListaT(){
if (this.TkActual.getTipo()==Tipo.if_){
    this.Instrucciones();
}
else if (this.TkActual.getTipo()==Tipo.while_){
    this.Instrucciones();
}


else if (this.TkActual.getTipo()==Tipo.do_){
    this.Instrucciones();
}
else if (this.TkActual.getTipo()==Tipo.console){
    this.Instrucciones();
}
else if (this.TkActual.getTipo()==Tipo.for_){
    this.Instrucciones();
}

else if (this.TkActual.getTipo()==Tipo.return_){
    this.Instrucciones();
}

else if (this.TkActual.getTipo()==Tipo.continue){
    this.Instrucciones();
}
else if (this.TkActual.getTipo()==Tipo.id){
    this.Instrucciones()
}
else if (this.TkActual.getTipo()==Tipo.var_){
  this.Instrucciones()
}
else if (this.TkActual.getTipo()==Tipo.Break_){
    this.Instrucciones()
  }
  

else{

}
}

Block(){
    TraduccionT+="\n"
    this.Parea(Tipo.LlavaAbierta)
    TraduccionT+="    "
    this.Instrucciones();
    this.Parea(Tipo.LlaveCerrada)
}
Instrucciones(){
    this.Comentarios()
    if (this.TkActual.getTipo()==Tipo.if_){
        TraduccionT+="           "; this.IF();
    }
    else if (this.TkActual.getTipo()==Tipo.while_){
        TraduccionT+="          "; this.WHILE();
    }
    
    
    else if (this.TkActual.getTipo()==Tipo.do_){
        TraduccionT+="            ";  this.DOWHILE();
    }
    else if (this.TkActual.getTipo()==Tipo.console){
        TraduccionT+="             ";  this.CONSOLA(); this.ListaInstrucciones()
    }
    else if (this.TkActual.getTipo()==Tipo.for_){
        TraduccionT+="           ";    this.FOR();
    }
    
    else if (this.TkActual.getTipo()==Tipo.return_){
        TraduccionT+="  "; TraduccionT+="return"
    this.Parea(Tipo.return_);
        this.Return();
        this.ListaInstrucciones()
    }
    else if (this.TkActual.getTipo()==Tipo.Break_){
        this.Parea(Tipo.Break_);
        this.Parea(Tipo.puntoycoma)
        TraduccionT+="break"
        this.ListaInstrucciones()
      }
    else if (this.TkActual.getTipo()==Tipo.continue){
        TraduccionT+="            ";
        TraduccionT+"Continue"
        this.Parea(Tipo.continue)
    }
    else if (this.TkActual.getTipo()==Tipo.id){
        TraduccionT+="           "; 
        this.ListaIds2();

        
     
        this.Igual_Adentro();
     

     TraduccionT+="\n"
     this.ListaInstrucciones()
    
    }
    else if (this.TkActual.getTipo()==Tipo.var_){
        this.var=true;
        
        this.Parea(Tipo.var_);
    this.ListaIds();
    this.Igual()
    this.ListaInstrucciones()
    }
    
    
    else{
    
    }
}

Igual_Adentro(){
    if(this.TkActual.getTipo()==Tipo.igual){
    
        this.Parea(Tipo.igual)
        TraduccionT+="="
      this.Expresion();
    }
    else if( this.TkActual.getTipo()==Tipo.incremento||this.TkActual.getTipo()==Tipo.decremento){
          this.Increments()

    }

}
Return(){

    if(this.TkActual.getTipo()==Tipo.id){

        this.Expresion()
    }
    
    
    
   else if(this.TkActual.getTipo()==Tipo.digitos){

        this.Expresion()
    }
    
   else if(this.TkActual.getTipo()==Tipo.comillas){

    this.Expresion()
}
else if(this.TkActual.getTipo()==Tipo.true){

     this.Expresion()
 }
 else if(this.TkActual.getTipo()==Tipo.false){

      this.Expresion()
  }
  
  else if(this.TkActual.getTipo()==Tipo.decimeal){

    this.Expresion()
}else{

}
}
FOR() {
    TraduccionT+="for "
    this.Parea(Tipo.for_);

    this.Parea(Tipo.ParentesisAbierto)
    this.DefFor();
    this.Parea(Tipo.puntoycoma)
   this.Expresion()
    this.Parea(Tipo.puntoycoma)
    this.Parea(Tipo.id)
    this.Increment();
    this.Parea(Tipo.puntoycoma)
    this.Parea(Tipo.ParentesisCerrado)
    this.Block()
}

Increment(){

    console.log("hola")
    if(this.TkActual.getTipo()==Tipo.incremento){
  
        this.Parea(Tipo.incremento)
    }
    
    else if(this.TkActual.getTipo()==Tipo.decremento){
        this.Parea(Tipo.decremento)
    }
}
Increments(){

    if(this.TkActual.getTipo()==Tipo.incremento){
  
        this.Parea(Tipo.incremento)
         TraduccionT+="++"
           }
    
    else if(this.TkActual.getTipo()==Tipo.decremento){
        this.Parea(Tipo.decremento)
        TraduccionT+="--"
    }
}
DefFor(){
  TraduccionT+=this.TkActual.getLexema()+" in range"+" "
    this.Parea(Tipo.id)
    if(this.TkActual.getTipo()==Tipo.igual){

        this.IgualFor();
    }
    else{


    }

    
}
IgualFor(){
    
    this.Parea(Tipo.igual)
    this.Expresion();
}
CONSOLA(){
    this.Parea(Tipo.console)
    this.Parea(Tipo.punto)
    this.Parea(Tipo.log)
    this.Parea(Tipo.ParentesisAbierto)
  TraduccionT+="print("
    this.Expresion()
    this.Parea(Tipo.ParentesisCerrado)
  TraduccionT+=")"
}
DOWHILE(){
  TraduccionT+="while True:"
    this.Parea(Tipo.do_);
 this.cicloDoWhile=true;
    this.Block()
   
    this.Parea(Tipo.while_)
    this.Parea(Tipo.ParentesisAbierto)
    this.Condiciones()
    this.Parea(Tipo.ParentesisCerrado)
   
}
WHILE(){
    this.Parea(Tipo.while_);

    if(this.cicloDoWhile==true){

      TraduccionT+="if"+":"+" "
    }else{

      TraduccionT+="while"+":"
    }
    
    this.Parea(Tipo.ParentesisAbierto)
    this.Condiciones()
    this.Parea(Tipo.ParentesisCerrado)
    this.Block()
    this.cicloDoWhile=false;
}
IF(){
    this.Parea(Tipo.if_);
    console.log("en un if")
  TraduccionT+="if"+" ";
    this.Parea(Tipo.ParentesisAbierto);
    this.Expresion()
    this.Parea(Tipo.ParentesisCerrado);
  TraduccionT+=":"
    this.Block();
    this.ELSE();
}
ELSE(){
    if(this.TkActual.getTipo()==Tipo.else_){
      TraduccionT+=this.TkActual.getLexema()+":"
        this.Parea(Tipo.else_)

        this.IFX();
     }else{

     }
}
IFX(){
    if(this.TkActual.getTipo()==Tipo.if_){
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
    if(this.TkActual.getTipo()==Tipo.YY){
     TraduccionT+=" "+this.TkActual.getLexema()+" "
        this.Parea(Tipo.YY)
        this.Expresion();
        this.Condicionesx();       
     }
    else if(this.TkActual.getTipo()==Tipo.OR){
        TraduccionT+=" "+this.TkActual.getLexema()+" "
      
        this.Parea(Tipo.OR)
      
        this.Expresion();
        this.Condicionesx();       
     }
     else{

     }
 
 
}
Expresion(){ this.EX(); this.Symbol();


}
EX(){
this.T(); 
this.EXS();
}

EXS(){
    if(this.TkActual.getTipo()==Tipo.mas){
       this.Parea(Tipo.mas)
     TraduccionT+="+"
     
      this.T();   
     this.EXS();       
    }
    else if(this.TkActual.getTipo()==Tipo.menos) {
      TraduccionT+="-"
         
        this.Parea(Tipo.menos)
        
           this.T();  
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
    if(this.TkActual.getTipo()==Tipo.por){
        this.Parea(Tipo.por);
      TraduccionT+="*"
     
        this.DATOS()
        this.TX();      
     }
     else if(this.TkActual.getTipo()==Tipo.Barra){
        this.Parea(Tipo.Barra)
      TraduccionT+="/"
     
        this.DATOS()
        this.TX();       
     }
     else{

        //efe
     }

}
DATOS(){
    if(this.TkActual.getTipo()==Tipo.decimeal){
      TraduccionT+=this.TkActual.getLexema()
     
        this.Parea(Tipo.decimeal)
    }
    
    else if(this.TkActual.getTipo()==Tipo.comillas){
      TraduccionT+=this.TkActual.getLexema()
        this.Parea(Tipo.comillas)
      }

      
    else if(this.TkActual.getTipo()==Tipo.id){
      TraduccionT+=this.TkActual.getLexema()
        this.Parea(Tipo.id)
         this.ExpresionM()  
    }
     
    else if(this.TkActual.getTipo()==Tipo.true){
      TraduccionT+=this.TkActual.getLexema()
        this.Parea(Tipo.true)
      }
     
    else if(this.TkActual.getTipo()==Tipo.false){
      TraduccionT+=this.TkActual.getLexema()
        this.Parea(Tipo.false)
      }
      else if(this.TkActual.getTipo()==Tipo.digitos){
      TraduccionT+=this.TkActual.getLexema() 
        this.Parea(Tipo.digitos)
        }
        else if(this.TkActual.getTipo()==Tipo.ParentesisAbierto){
            this.Parea(Tipo.ParentesisAbierto)
            this.Expresion()
            this.Parea(Tipo.ParentesisCerrado);
          }


          
        else if(this.TkActual.getTipo()==Tipo.diferente){
            this.Parea(Tipo.diferente)
            this.Expresion()
          }
          else {


          }
       

     

}
ExpresionM(){

     if(this.TkActual.getTipo()==Tipo.ParentesisAbierto){
      TraduccionT+=this.TkActual.getLexema()
        this.Parea(Tipo.ParentesisAbierto)
        this.LlmadaM()
      }
      else if(this.TkActual.getTipo()==Tipo.incremento ||this.TkActual.getTipo()==Tipo.decremento ){
         this.Increments()

      }
      else{

        //efe
      }
}

LlmadaM(){


     if(this.TkActual.getTipo()==Tipo.ParentesisCerrado){
      TraduccionT+=this.TkActual.getLexema()
      this.Parea(Tipo.ParentesisCerrado)
      }else{
        this.ListaE();
      TraduccionT+=this.TkActual.getLexema()
        this.Parea(Tipo.ParentesisCerrado)
      }

}
ListaE(){
    this.Expresion();
    this.ListaEX();
}
ListaEX(){
    if(this.TkActual.getTipo()==Tipo.coma){
      TraduccionT+","
        this.Parea(Tipo.coma)
        }else{
  
        }
}
Symbol(){
    if(this.TkActual.getTipo()==Tipo.doble_Igual){
      TraduccionT+=this.TkActual.getLexema()
         this.Parea(Tipo.doble_Igual)
        this.EX()
      }
      if(this.TkActual.getTipo()==Tipo.OR){
        TraduccionT+=this.TkActual.getLexema()
          
          this.Parea(Tipo.OR)
          this.EX()
        }
        if(this.TkActual.getTipo()==Tipo.YY){
            TraduccionT+=this.TkActual.getLexema()
              
              this.Parea(Tipo.YY)
              this.EX()
            }
      else if(this.TkActual.getTipo()==Tipo.igual){
      TraduccionT+="="

        this.Parea(Tipo.igual)
        this.EX()

    }

    
    else if(this.TkActual.getTipo()==Tipo.mayor){
      TraduccionT+=">"

        this.Parea(Tipo.mayor)
        this.EX()
      }
      else if(this.TkActual.getTipo()==Tipo.menor){
      TraduccionT+="<"
console.log("simbooolo")
        this.Parea(Tipo.menor)
        this.EX()
      }
      
      else if(this.TkActual.getTipo()==Tipo.menor_Igual){
      TraduccionT+="<="

        this.Parea(Tipo.menor_Igual)
        this.EX()
      }
      else if(this.TkActual.getTipo()==Tipo.mayor_Igual){
      TraduccionT+=">="

        this.Parea(Tipo.mayor_Igual)
        this.EX()
      }
      else if(this.TkActual.getTipo()==Tipo.diferente){
      TraduccionT+="!="

        this.Parea(Tipo.diferente)
        this.EX()
      }else{

        //epsilon
      }
}
Parea (tip:Tipo):void{

    console.log(this.TkActual.getLexema())

    if (this.TkActual.getTipo()!=tip){
        
           console.log(this.TkActual.getLexema()+" "+"Se encontro un error"+" "+" Se esperaba "+" "+this.GetERROR(tip))
           this.ListaErrores.push(new ErrToken("sintactico",this.TkActual.getLexema()+" "+"Se encontro un error"+" "+" Se esperaba "+" "+this.GetERROR(tip)))
           this.Panico()
    }

    else{
            
       if(this.act<this.len-1){
        this.act++;
  
       }

        
     this.TkActual=   this.ListaToken[this.act]      
    }
} 
Comentarios():void{
    console.log("en comentarios")
if(this.TkActual.getTipo()==Tipo.ComentarioLinea ){


this.act++;
TraduccionT+="#"+this.TkActual.getLexema();
this.TkActual=this.ListaToken[this.act]      
}
else if(this.TkActual.getTipo()==Tipo.ComentarioMulti){


  
TraduccionT+="'''"+"  "+this.TkActual.getLexema()+"''''"+"\n"
this.act++;
this.TkActual=this.ListaToken[this.act]
}
}
Panico(){

    while(this.TkActual.getTipo()!=Tipo.LlaveCerrada){
           this.act++;
           this.TkActual=this.ListaToken[this.act]      
   
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
                
    for(const aux of this.ListaErrores){
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

}