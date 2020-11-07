export class Estatico{
    nickname?:string;
     rol?:any;
constructor(nickname?:string, nombre?:string,carnet?:any,correo?:string, pass?:String , rol?:any){

}

public static FILAS:number = 1;
public static COLUMNAS:number = 0;// ejemplo de commo importar algo estatico 


public static lista_mostrar_tokens:any = [];
public static lista_mostrar_errores_lexicos:any = [];
public static lista_mostrar_errores_sintacticos:any=[];
public static listaTXT:any = [];
public static guarda_entrada:any = ""; 
public static lista_mostrar_tabla_simbolos:any = [];

public static guarda_traduccion:string = ""; 
public static guarda_cadena_html:string = ""; 
public static guarda_cadena_json:string = ""; 

}