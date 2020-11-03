%{
const {Class}= require('../ClasesParaArbol/Class');

const {interface}= require('../ClasesParaArbol/Interface');
const {Tree}= 
%}


%lex
%options case-sensitive
no  ([\"]*)
digito [0-9]+
decimal {digito}("."{digito})?
stringliteral (\"[^"]*\")
identifier ([a-zA-Z_])[a-zA-Z0-9_]*
caracter (\'[^☼]\')

%%
\s+ 
[ \t\r\n\f] 
\n                  
"/""/".*                             
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] 


{caracter}            return 'caracter'

{decimal}             return 'decimal'
{entero}              return 'entero' 
{stringliteral}       {console.log("STRING QUEMADO ");return 'STRING_LITERAL'}
{comentarioBloque}    {console.log("comentario Bloque reconocido");return 'comentarioBloque'}
{comentarioLinea}     {console.log("comLinea reconocido"); return 'comentarioLinea'}
":"                   return ':'
"/"                   return '/'
";"                   return ';'
"--"                  return 'decremento'
"-"                   return '-'
"++"                  return 'incremento'
"+"                   return '+'
"*"                   return '*'
"^"                   return '^'
"%"                   return '%'
"."                   return '.' // punto pero TOKEN

"<="                  return '<='
">="                  return '>=' ;
"<"                   return '<'
">"                   return '>'

"=="                  return '=='
"!="                  return '!='
"||"                  return '||'
"&&"                  return '&&'
"!"                   return '!'
"="                   return '='


","                   return ','
"("                   return '('
")"                   return ')'

"{"                   return '{'
"}"                   return '}'

"main"                return 'main'
"println"             return 'println'
"print"               return 'print'
"out"                 return 'out' 
"System"              return 'System'
"void"                return 'void'
"return"              return 'return'
"if"                  return 'if'
"else"                return 'else'
"switch"              return 'switch'
"case"                return 'case'
"default"             return 'default' 
"break"               return 'break'
"continue"            return 'continue'
"while"               return 'while'
"do"                  return 'do'
"for"                 return 'for'
"false"               return 'false'
"true"                return 'true'
"class"               return 'class'
"import"              return 'import'
"char"                return 'char'
"double"              return 'double'  
"int"                 return 'int'
"String"              return 'String'
"boolean"             return 'boolean'
{id}                  return 'id'
<<EOF>>	          return 'EOF'

//.        {  console.error('Este es un error léxico: ' + yytext + '  en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
.          { console.error('Este es un error léxico: ' + yytext + '  en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}

/lex


%left 'else'
%left '||'
%left '&&'
%left '==', '!='
%left '>=' , '<=' , '<' , '>'
%left '+' '-'
%left '*' '/'
%left '^' '%'
%right '!'
%left UMENOS

%start INICIO

%%




INICIO : ListaInterface EOF { return $$;}
       |  ListaClases  EOF{ return $$;}
       | EOF { return $$;}
       ;



ListaInterfaces: ListaInterfaces SentenciaInterface
                 | SentenciaInterface { $$ = [$1]; }
;

SentenciaInterface:'interface' 'id' InicioInterface
                ;

InicioInterface : '{' InterfaceMenu '}'  {$$ = $2;}           
                               | '{' '}' 
                                ;

InterfaceMenu: InterfaceMenu DeclaracionInterface 
               | DeclaracionInterface    
                               ;     


DeclaracionInterface:   'public' TIPO id '(' Metodos_FuncionesI 
                        |  TIPO id '(' Metodos_FuncionesI 
                        ; 

Metodos_FuncionesI: Parametros_Tipo ')'                                  
                     |')'    
                     ;     




ListaClases: ListaClases SentenciaClase{ $1.push($2); $$ = $1; }
            | SentenciaClase  { $$ = [$1]; }
            ;



                       
SentenciaClase:'class' 'id' InicioClase }
              | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
              ;
               


InicioClase : '{' MenuClase '}' {$$ = $2;}              /* este es para que acepte vacios*/
                               | '{' '}' {$$ = [];}
                               | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
                               ;


MenuClase: MenuClase DeclaracionClase { $1.push($2); $$ = $1; }
                               | DeclaracionClase      { $$ = [$1]; }
                               ;


DeclaracionClase: 'public' 'void' id '(' Metodos_Funciones
                        | 'void' id '(' Metodos_Funciones 
                       | 'public' TIPO id '(' Metodos_Funciones 
                         |  TIPO id '(' Metodos_Funciones 
                        | 'public' TIPO L_Ids AsignacionV_P
                        | 'public'  'static' 'void' 'main' '(' 'String' '[' ']'  'args' ')' BlockInstrucciones
                        | TIPO L_Ids AsignacionV_P 
                   
                        | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
                        ; 


Metodo_Funcion: Parametros_Tipo  ')' BlockInstrucciones                                    
                     |')' BlockInstrucciones    
                     ;                



INSTRUCCIONES : INSTRUCCIONES INSTRUCCION { $1.push($2); $$ = $1; }
              | INSTRUCCION               { $$ = [$1]; }
              | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
              ;

INSTRUCCION : SENTENCIAIMPRIME     {$$ = $1;}
            | WHILE                {$$ = $1;}
            | IF                   {$$ = $1;}
            | DOWHILE              {$$ = $1;}
            | SENTENCIA_FOR        {$$ = $1;}
            | SENTENCIA_SWITCH      {$$ = $1;}
            | AsignacionV_P_SIMPLE     {$$ = $1;}
            | DECLARACION_ADENTRO_DE_METODOS_FUNCIONES {$$ = $1;}
            | SENTENCIA_CONTINUE {$$ = $1; console.log("continue");}
            | SENTENCIA_RETURN_FUNCION {$$ = $1;}
            | SENTENCIA_RETURN_METODO{$$ = $1;}
            | SENTENCIA_BREAK {$$ = $1;console.log("break");}
            ;
TIPO : 'int' 
     | 'String' 
     | 'boolean'
     | 'double' 
     | 'char'
     ;


SENTENCIA_FOR:'for' '(' DEC_for ';' EXPRESION ';' INCRE_DECRE ')' BlockInstrucciones  
             ;

DEC_for: TIPO 'id' '=' EXPRESION 
       | 'id' '=' EXPRESION 
       ;
INCRE_DECRE: 'id' 'incremento' 
           | 'id' 'decremento' 
           ;


DOWHILE: 'do' BlockInstrucciones  'while' CONDICION ';'
       ;

SENTENCIAIMPRIME: 'System' '.' 'out' '.'  OPCIONIMPRIME '(' EXPRESION ')' ';'
                ;


OPCIONIMPRIME : 'println' {$$ = $1 ; }
	       | 'print' {$$ = $1;}
              | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);   }  
              ; 



WHILE : 'while' CONDICION BlockInstrucciones  
      ;

IF : 'if' CONDICION BlockInstrucciones  
   | 'if' CONDICION BlockInstrucciones  'else' BlockInstrucciones  
   | 'if' CONDICION BlockInstrucciones  'else' IF 
   ;



CONDICION : '(' EXPRESION ')' {$$ = $2;}
          ;




BlockInstrucciones  : '{' INSTRUCCIONES '}' {$$ = $2;}              /* este es para que acepte vacios*/
                     | '{' '}'    {$$ = [];}
                     ;
      
EXPRESION : '-' EXPRESION %prec UMENOS	   
          | '!' EXPRESION	                 
          | EXPRESION '+' EXPRESION          
          | EXPRESION '-' EXPRESION          
          | EXPRESION '*' EXPRESION          
          | EXPRESION '/' EXPRESION	   
          | EXPRESION '%' EXPRESION	   
          | EXPRESION '^' EXPRESION	   
          | EXPRESION '<' EXPRESION	   
          | EXPRESION '>' EXPRESION          
          | EXPRESION '>=' EXPRESION	   
          | EXPRESION '<=' EXPRESION	    
          | EXPRESION '==' EXPRESION	   
          | EXPRESION '!=' EXPRESION    
          | EXPRESION '||' EXPRESION	   
          | EXPRESION '&&' EXPRESION	   
          | 'decimal'		           
          | 'true'				    
          | 'false'				  
          | STRING_LITERAL			   
          | EXPRESION_METODO		    { $$ = $1}
          | caracter                          
          | entero                           
          | '(' EXPRESION ')'		    { $$ = $2; }
          ;


SENTENCIA_SWITCH: 'switch' '(' EXPRESION ')' BLOQUE_CASES {$$ = new Sentencia_switch($3,$5,this._$.first_line, this._$.first_column)}
                ;
              
BLOQUE_CASES:  '{' LISTACASES OPCIONDEFAULT '}' 
            | '{' '}'    {$$ = [];}
            ;
        
OPCIONDEFAULT:'default' ':' BLOQUEINST_CON_OPCION_VACIA  SENTENCIA_BREAK 
             | {$$ = [];} 
             ;



LISTACASES: LISTACASES CASES_P  { $1.push($2); $$ = $1; }
          | CASES_P  { $$ = [$1]; }
          ;
CASES_P :'case' EXPRESION ':' BLOQUEINST_CON_OPCION_VACIA SENTENCIA_BREAK 
        ;

SENTENCIA_BREAK: 'break' ';' 
               ;

BLOQUEINST_CON_OPCION_VACIA:  INSTRUCCIONESWITCH {$$=$1;}
                            | {$$=[];}
                            ;


INSTRUCCIONESWITCH : INSTRUCCIONESWITCH INSTRUCCIONSWITCH { $1.push($2); $$ = $1; }
              | INSTRUCCIONSWITCH               { $$ = [$1]; }
              | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
              ;
// LO MISMO PERO NO TIENE EL BREAK para que no se encicle 
INSTRUCCIONSWITCH : SENTENCIAIMPRIME     {$$ = $1;}
            | WHILE                {$$ = $1;}
            | IF                   {$$ = $1;}
            | DOWHILE              {$$ = $1;}
            | SENTENCIA_FOR        {$$ = $1;}
            | SENTENCIA_SWITCH      {$$ = $1;}
            | AsignacionV_P_SIMPLE     {$$ = $1;}
            | DECLARACION_ADENTRO_DE_METODOS_FUNCIONES    {$$ = $1;}
            | SENTENCIA_CONTINUE {$$ = $1;}
            | SENTENCIA_RETURN_FUNCION {$$ = $1;}
            | SENTENCIA_RETURN_METODO{$$ = $1;}
            ;

















/* PUEDE SER UNA AsignacionV_P O PUEDE SER UNA LLAMADA DE METODO */
AsignacionV_P_SIMPLE: id '=' EXPRESION ';'  
                  |id '(' LISTA_EXPRESIONES_LLAMADA_METODO ')' ';'  
                  |id '(' ')' ';'   
                 ;


EXPRESION_METODO: id '(' LISTA_EXPRESIONES_LLAMADA_METODO ')' 
                | id '(' ')'    
                | id  
                ;


LISTA_EXPRESIONES_LLAMADA_METODO: LISTA_EXPRESIONES_LLAMADA_METODO ',' EXPRESION  
                                | EXPRESION { $$ = [$1]; }
                                ;



DECLARACION_ADENTRO_DE_METODOS_FUNCIONES: TIPO L_Ids AsignacionV_P 
                                        ;


L_Ids: L_Ids ',' id  
         | id  { $$ = [$1]; }
         ; 




AsignacionV_P: '=' EXPRESION ';' {$$ = $2}
          | ';' {$$ = [];}
          ;





                                                                      
Parametros_Tipo  :Parametros_Tipo   ','  TIPO 'id'     
			   | TIPO 'id'
                        ;







SENTENCIA_CONTINUE: 'continue' ';' 
                  ;
SENTENCIA_RETURN_METODO: 'return' ';'
                        ;
SENTENCIA_RETURN_FUNCION: 'return' EXPRESION ';' 
                         ;
SENTENCIA_BREAK_CON_CICLO: 'break' ';' 
                         ; 


