
export class Metodos {
    constructor() {
    }
    public static getSig(i: number, cadenajson: string): string {
        let k: number = 0;
        let sig: string = cadenajson[i + 1];
        while (sig == " " || sig == "\n" || sig == "\t" || sig == "\r") {
            k++;
            sig = cadenajson[i + k];
        }
        return sig;
    }


    public static json_ats(json:string){
        let cadenita_arbol_html= "";
        var palabras:any = json.split(" ");
        console.log(palabras);
        for(let i = 0 ; i <palabras.length; i++ ){
          if(palabras[i][palabras[i].length-1] ==":") {
            console.log("crear carpeta");
            // ACA TENGO EL ID :v , TIENE QUE SER ALGO RECURSIVO PARA QUE CUANDO CIERRE YA TENGA LAS ETIQUETAS METIDAS
            let id_node = "";for(let itera = 0 ; itera < palabras[i].length-1 ; itera++){
              id_node+= palabras[i][itera];
            }
            cadenita_arbol_html += "<h1>"+id_node+"\n";
            // LLAMAR AKA XD
            Metodos.metodoRecursivo_json(""); // tener en cuenta que deben de pasar por aca todas las cadenas principales
            cadenita_arbol_html+="</h1>\n"
            break;
            i = palabras.length;
          }
        }
        console.log(cadenita_arbol_html);
    }
    public static metodoRecursivo_json(cadena:string):void{
    }


}

