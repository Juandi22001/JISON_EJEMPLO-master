%{
    // en esta seccion pueden ir cualquier tipo de importe que se necesite por ejemplo importes de clases para los nodos del ATS

    const {Clase} = require('../clasesArbol/Clase');
    const {Importe} = require('../clasesArbol/Importe');
    const {Tree} = require('../Simbols/Tree');
    const {Print_consola} = require('../clasesArbol/Print_consola');
%}

// AHORA COMENCEMOS A PRIMERO CON EL LEXICO
// se usa esta como palabra reservarda %lex para iniciar
%lex
%options case-sensitive
// para las expresiones regulares va el nombre como un identificador
// y  a la par la expresion regular que les corresponte
// esto es propio de javascript, pueden buscar mas como  notacion de expresiones regulares en javascript
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
// https://www.youtube.com/watch?v=W88riRl1vMw
// https://regex101.com   MUY UTIL PARA HACER PRUEBAS
entero [0-9]+
decimal [0-9]+("."[0-9]+)
id ([a-zA-Z_])[a-zA-Z0-9_]*
cadenaTexto (\"[^"]*\")  // se sale con una comilla doble

%%
// A PARTIR DE LOS %% COMIENZA VIENE CODIGO PARA ANALIZAR LEXICAMENTE
// aca indicamos como reconocer los tokens y va con precedencia lo que va hasta arriba reconoce primero , esto es util para casos como el del +  y el ++ 
\s+ // IGNORA ESPACIOS
"/""/".*              {console.log("comentario de linea reconocido") } // comentario simple línea  EL PUNTO ES PARA DECIR QUE RECIBE CUALQUIER CARACTER
{decimal}             {console.log("decimal reconocido"); return 'decimal'} // primero ve si es un decimal si no es un decimal es un...
{entero}              {console.log("entero reconocido"); return 'entero'} // es un entero
"/"                   {console.log("simbolo de division reconocido");  return '/'}
";"                   {console.log("simbolo punto y coma reconocido"); return ';'}
{cadenaTexto}         return 'textoCadenas'
"--"                  return 'decremento'
"-"                   return '-'
"++"                  return 'incremento' // el nombre que retorno puede variar eso si USO EL NOMBRE QUE ESTOY RETORNANDO EN LA PARTE DE ABAJO DEL SINTACTICO
"+"                   return '+'
"*"                   return '*'
"^"                   return '^'
"%"                   return '%'
"=="                  return '=='
"!="                  return '!='
"||"                  return '||'
"&&"                  return '&&'
"!"                   return '!'
"="                   return '='
"{"                   return '{'
"}"                   return '}'
"("                   return '('
")"                   return ')'
"."                   return '.'
"class"               return 'class'
"double"              return 'double'
"int"                 return 'int'
"String"              return 'String'
"Console"             return 'Console'
"Write"               return 'Write'
"import"              {console.log("palabra reservada Import");  return 'import'} // LAS PALABRAS RESERVADAS SIEMPRE VAN ANTES QUE EL ID
{id}                  return 'id'
<<EOF>>	              return 'EOF'          // ESTE TOKEN ES MUY IMPORTANTE ES EL DE FINALIZACION

.    console.error('ERROR LEXICO: ' + yytext + '  en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
// EL PUNTO INDICA CUALQUIER COSA , COMO ESTA AL FINAL CUALQUIER COSA QUE NO PERTENEZCA AL LENGUAJE ES ERROR
/lex



/*

        COMIENZA EL SINTACTICO
        JISON USA GRAMATICA ASCENDENTE
        PERMITE AMBIGUEDAD PERO NECESITA USAR PRESEDENCIA

*/

// el primer bloque es para manejar las precedencias
%left 'else'
%left '||'
%left '&&'
%left '==', '!='
%left '>=' , '<=' , '<' , '>'
%left '+' '-'
%left '*' '/'
%left '^' '%'
%right '!'

// INDICAMOS EL NOMBRE DE LA PRODUCIONE DE INICIO

%start PRODUCCION_INICIAL


// a partir del %% comienza nuestra gramatica para el analisis sintactico
%%


PRODUCCION_INICIAL: LISTA_IMPORTES LISTA_CLASES  EOF
                  | LISTA_CLASES EOF { $$ = new Tree($1); return $$; }
                  | LISTA_IMPORTES EOF { $$ = new Tree($1); return $$ ;/*ACA USTEDES LE DAN SU FORMATO EN JSON */}
                  | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column); }
                  ;

/*

ANALIZANDO LOS DOLLARS :v
LISTA IMPORTES ES MI $$ : LISTA_IMPORTES ES MI $1  IMPORTE ES MI $2
                         IMPORTE ES MI $1
*/
LISTA_IMPORTES: LISTA_IMPORTES IMPORTE { $1.push($2); $$ = $1; }
      	| IMPORTE    { $$ = [$1]; }
        ;

IMPORTE: 'import' 'id' ';'   { $$ = new Importe ( this._$.first_line , this._$.first_column , $2  ); }
       ;
// $$             $1         $2
LISTA_CLASES: LISTA_CLASES CLASE { $1.push($2); $$ = $1; }
            | CLASE   { $$ = [$1]; }
            ;

//$$     $1    $2    $3
CLASE:'class' 'id'  OPCION_CLASE    { $$  = new Clase( this._$.first_line , this._$.first_column , $2 , $3 );  }
     ;


OPCION_CLASE : '{'   '}' {$$ = []}
             | '{' INTRUCCIONES_BASICAS  '}' {$$ = $2}
             ;

INTRUCCIONES_BASICAS: INTRUCCIONES_BASICAS INS { $1.push($2); $$ = $1; }
                    | INS { $$ = [$1]; }
                    ;

INS: IMPRIME_CONSOLA {$$ = $1}
   ;
// $$              $1     $2     $3     %4   $5      $6    $7
IMPRIME_CONSOLA:'Console' '.'  'Write' '(' EXPRESION ')'   ';' { $$ = new Print_consola(this._$.first_line , this._$.first_column , $5 );}
               ;


EXPRESION : 'decimal'     { $$ = $1 }
          | 'entero'      { $$ = $1 }
          | 'textoCadenas'{ $$ = $1 }
          ;