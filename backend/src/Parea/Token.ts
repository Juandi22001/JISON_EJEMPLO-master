  
import { Estatico} from './Estatico';// lo importo

export enum Tipo{

class_,var_,function_,return_,if_,while_,do_,for_,else_,Break_ ,Return_,true,false,null,undefined,let,const,console,consola,log,ParentesisAbierto,ParentesisCerrado
,LlaveCerrada,LlavaAbierta,comillas,digitos,por,mas,incremento,decremento,menos,puntoycoma,coma,punto,dosPuntos,igual,doble_Igual,menor,menor_Igual,mayor,mayor_Igual,diferente,YY
,OR,Admiracion,Barra,ComentarioMulti,ComentarioLinea, decimeal,id,continue,main

}
export class Token {
    public static No:Number;
    private Tokens:string;
    private Lexema:string;
    private linea:number;
   private columna:number;
   ListaTokens:any
   private TipoToken :Tipo
   
    constructor(Tipo:Tipo,Lexema:string){
       this.TipoToken=Tipo;
        this.Lexema=Lexema;
        this.linea=Estatico.FILAS;
        this.columna=Estatico.COLUMNAS;
           
    }
public  getTipo():string{

    switch(this.TipoToken){

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
            case Tipo.main:
                return "palabra reservada main";
               
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
            case Tipo.continue:
                return "palabra reservada continue";
                    
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
 
    public static getGrafo():string{
var cadena ="";


/*
for(var i=0; i<this.ListaTokens.length;i++){
 cadena+=this.ListaTokens[0].getToken();


}*/
return cadena;


    }
    public getToken():string{
        return this.Tokens;
    }

    public getLexema():string{
        return this.Lexema;
    }

    public getlinea():number{
        return this.linea;
    }
    public getcolumna():number{
        return this.columna;
    }

 
}