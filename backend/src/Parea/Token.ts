
export class Token {

    private Tokens:string;
    private Lexema:string;
    private linea:number;
   private columna:number;
   ListaTokens:any
   
    constructor(Tokens:string,Lexema:string,linea:number,columna:number){
        this.Tokens=Tokens;
        this.Lexema=Lexema;
        this.linea=(linea);
        this.columna=columna;
           
    }
public  agregar(){
   
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