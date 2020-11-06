
export class NodoError {

    private tipo:string;
    private descripcion:string;
    private linea:number;
    private columna:number
    constructor(tipo:string,descripcion:string,linea:number,columna:number){
        this.tipo=tipo;
        this.descripcion=descripcion;
        this.linea=(linea);
         this.columna=columna
    
    }

    public gettipo():string{
        return this.tipo;
    }

    public getdescripcion():string{
        return this.descripcion;
    }

    public getlinea():number{
        return this.linea;
    }

 
}