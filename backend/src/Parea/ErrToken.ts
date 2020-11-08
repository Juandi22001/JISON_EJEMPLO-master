  
import { Estatico} from './Estatico';// lo importo

export class ErrToken {

    private tipo:string;
    private descripcion:string;
    private linea:number;
    private columna:number
    constructor(tipo:string,descripcion:string){
        this.tipo=tipo;
        this.descripcion=descripcion;
        this.columna=Estatico.COLUMNAS;
        this.linea=Estatico.FILAS;
    
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