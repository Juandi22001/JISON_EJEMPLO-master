%{
  const {Arbol} = require('../Simbols/Arbol');
   const {Class} =require ('../ClasesParaArbol/Class')
   const {Interface} =require ('../ClasesParaArbol/Interface')
   const {FunctionInterface}= require('../ClasesParaArbol/FuncionInterface')
   const {Metodo_FuncionIN} =require('../ClasesParaArbol/MetodoOFuncion_Interface')
   const {Metodo_C} =require('../ClasesParaArbol/Metodo_C')
   const {Funcion_C} =require('../ClasesParaArbol/Funcion_C')
   const {DeclaracionAfuera} =require('../ClasesParaArbol/DeclaracionAfuera')
   const {Main} =require('../ClasesParaArbol/Main')
   const {Metodo_Fc} =require('../ClasesParaArbol/Metodo_Fc')
   const {For_alv}=require('../ClasesParaArbol/For')
   const {Declaracion_For}=require('../ClasesParaArbol/Declaracion_For')
   
   const {Asignacion}=require('../ClasesParaArbol/Asignacion')
   const {Do_While}=require('../ClasesParaArbol/Do_While')
    const {Comentarios}=require('../ClasesParaArbol/Comentarios')
 
   const {Increment_Decrements}=require('../ClasesParaArbol/Increment_Decrement')
   const {Sout}=require('../ClasesParaArbol/Sout')
   const {Whiles}=require('../ClasesParaArbol/While')
   const {Ifs}=require('../ClasesParaArbol/IF')
   const {Operaciones}=require('../ClasesParaArbol/Operaciones')
    const {Id_Solo}=require('../ClasesParaArbol/Id_Solo')
    const {ReturnM}=require('../ClasesParaArbol/ReturnM')
  const {ReturnF}=require('../ClasesParaArbol/ReturnF')
  
   const {Condicionales}=require('../ClasesParaArbol/Condicionales') 
   const {Dato_Exp}=require('../ClasesParaArbol/Dato_Exp') 

   const {Switchs}=require('../ClasesParaArbol/Switch') 
   const {Case}=require('../ClasesParaArbol/Case') 
   const {Default}=require('../ClasesParaArbol/Default') 
    const {Break}=require('../ClasesParaArbol/Break') 
   const {Exp_Case}=require('../ClasesParaArbol/Exp_Case') 
    const {LlamadaMetodo}=require('../ClasesParaArbol/LlamadaMetodo') 
    const {DeclaracionMF}=require('../ClasesParaArbol/DeclaracionMF') 
      const {Parametro}=require('../ClasesParaArbol/Parametro') 
      const {Continues}=require('../ClasesParaArbol/Continue') 
      const {TipoV}=require('../ClasesParaArbol/TipoV') 
         let CErrores=require('../ManejoErrores/Errores');
    let CNodoError=require('../ManejoErrores/NodoError');
    
         const{Errores} =require('../ManejoErrores/Errores');

         const{Token} =require('../ManejoErrores/Token');

%}

%lex
%options case-sensitive
no  ([\"]*)
entero [0-9]+
decimal {entero}("."{entero})?
stringliteral (\"[^"]*\")
id ([a-zA-Z_])[a-zA-Z0-9_]*
caracter (\'[^☼]\')

%%
\s+ // cualquier cosa xd
             
"/""/".*                      {$$= new Token(yytext,"comentario de Linea ", yylloc.first_column,yylloc.first_line); return 'ComentarioLinea' }
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]  {$$= new Token(yytext,"comentarioMulti ", yylloc.first_column,yylloc.first_line); return 'ComentarioMulti' }



{caracter}         {$$= new Token(yytext,"char ", yylloc.first_column,yylloc.first_line); return 'caracter' }
{stringliteral}      {$$= new Token(yytext,"cadena ", yylloc.first_column,yylloc.first_line); return 'cadena' }
{decimal}             {$$= new Token(yytext,"decimal ", yylloc.first_column,yylloc.first_line); return 'decimal' }
{entero}           {$$= new Token(yytext,"entero ", yylloc.first_column,yylloc.first_line); return 'entero' }
":"                    {$$= new Token(":","dos puntos ", yylloc.first_column,yylloc.first_line); return ':' }
"/"                {$$= new Token("/","barra ", yylloc.first_column,yylloc.first_line); return '/' }
";"                  {$$= new Token(";","punto y coma ", yylloc.first_column,yylloc.first_line); return ';' }
"--"                   {$$= new Token("--","decremento ", yylloc.first_column,yylloc.first_line); return 'decremento' }
"-"                   {$$= new Token("-","menos", yylloc.first_column,yylloc.first_line); return '-' }
"++"                {$$= new Token("++","plus plus ", yylloc.first_column,yylloc.first_line); return 'incremento' }
"+"                 {$$= new Token("+","mas  ", yylloc.first_column,yylloc.first_line); return '+' }
"*"                   {$$= new Token("*","asterisco ", yylloc.first_column,yylloc.first_line); return '*' }
"^"                    {$$= new Token("^","elevado ", yylloc.first_column,yylloc.first_line); return '^' }
"%"                   {$$= new Token("%","porcentaje ", yylloc.first_column,yylloc.first_line); return '%' }
"."                    {$$= new Token(".","punto", yylloc.first_column,yylloc.first_line); return '.' }
"<="                   {$$= new Token("<=","menor igual ", yylloc.first_column,yylloc.first_line); return '<=' }
">="                 {$$= new Token(">=","mayor igual ", yylloc.first_column,yylloc.first_line); return '>=' }
"<"                    {$$= new Token("<","menor ", yylloc.first_column,yylloc.first_line); return '<' }
">"                  {$$= new Token(">","mayor ", yylloc.first_column,yylloc.first_line); return '>' }
"=="                   {$$= new Token("==","doble igual ", yylloc.first_column,yylloc.first_line); return '==' }
"!="                   {$$= new Token("!=","diferente ", yylloc.first_column,yylloc.first_line); return '!=' }

"||"                   {$$= new Token("||","O ", yylloc.first_column,yylloc.first_line); return '||' }
"&&"                   {$$= new Token("&&","Y ", yylloc.first_column,yylloc.first_line); return '&&' }
"!"                    {$$= new Token("!","admiracion ", yylloc.first_column,yylloc.first_line); return '!' }

"="                   {$$= new Token("="," igual ", yylloc.first_column,yylloc.first_line); return '=' }

","                    {$$= new Token(",","coma", yylloc.first_column,yylloc.first_line); return ',' }

"("                    {$$= new Token("(" , "parentesis abierto", yylloc.first_column,yylloc.first_line); return '(' }

")"                     {$$= new Token(")","parentesis cerrado", yylloc.first_column,yylloc.first_line); return ')' }

"["                    {$$= new Token("[" , "CORCHETE abierto", yylloc.first_column,yylloc.first_line); return '[' }

"]"                     {$$= new Token("]","Corchete cerrado", yylloc.first_column,yylloc.first_line); return ']' }

"{"                     {$$= new Token("{","Llave abierta", yylloc.first_column,yylloc.first_line); return '{' }
"}"                     {$$= new Token("}",  "llave cerrada", yylloc.first_column,yylloc.first_line); return '}' }
"public"                {$$= new Token("public","palabra reservada public", yylloc.first_column,yylloc.first_line); return 'public' }
"static"             {$$= new Token("static","palabra reservada static", yylloc.first_column,yylloc.first_line); return 'static' }
"main"                   {$$= new Token("main","palabra reservada main", yylloc.first_column,yylloc.first_line); return 'main' }
"println"              {$$= new Token("println","palabra reservada println", yylloc.first_column,yylloc.first_line); return 'println' }
"print"               {$$= new Token("print","palabra reservada print", yylloc.first_column,yylloc.first_line); return 'print' }
"out"               {$$= new Token("out","palabra reservada out", yylloc.first_column,yylloc.first_line); return 'out' } 
"System"              {$$= new Token("System","palabra reservada System", yylloc.first_column,yylloc.first_line); return 'System' }
"void"                {$$= new Token("void","palabra reservada void", yylloc.first_column,yylloc.first_line); return 'void' }
"args"              {$$= new Token("args","palabra reservada args", yylloc.first_column,yylloc.first_line); return 'args' }
"return"            {$$= new Token("return","palabra reservada return", yylloc.first_column,yylloc.first_line); return 'return' }
"if"                 {$$= new Token("if","palabra reservada if", yylloc.first_column,yylloc.first_line); return 'if' }
"else"               {$$= new Token("else","palabra reservada else", yylloc.first_column,yylloc.first_line); return 'else' }
"switch"              return 'switch'
"case"                return 'case'
"default"             return 'default' 
"break"              {$$= new Token("break","palabra reservada break", yylloc.first_column,yylloc.first_line); return 'break' }
"continue"            {$$= new Token("continue","palabra reservada continue", yylloc.first_column,yylloc.first_line); return 'continue' }
"while"             {$$= new Token("while","palabra reservada while", yylloc.first_column,yylloc.first_line); return 'while' }
"do"                {$$= new Token("do","palabra reservada do", yylloc.first_column,yylloc.first_line); return 'do' }
"for"             {$$= new Token("for","palabra reservada for", yylloc.first_column,yylloc.first_line); return 'for' }
"false"             {$$= new Token("false","palabra reservada false", yylloc.first_column,yylloc.first_line); return 'false' }
"true"              {$$= new Token("true","palabra reservada true", yylloc.first_column,yylloc.first_line); return 'true' }
"class"                 {$$= new Token("Class","Palabra Reservada clase: ", yylloc.first_column,yylloc.first_line); return 'class' }
"interface"        {$$= new Token("interface","palabra reservada interface", yylloc.first_column,yylloc.first_line); return 'interface' }

"char"                {$$= new Token("char","palabra reservada char", yylloc.first_column,yylloc.first_line); return 'char' }
"double"              {$$= new Token("double","palabra reservada double", yylloc.first_column,yylloc.first_line); return 'double' }
"int"                 {$$= new Token("int","palabra reservada int", yylloc.first_column,yylloc.first_line); return 'int' }
"String"           {$$= new Token("String","palabra reservada String", yylloc.first_column,yylloc.first_line); return 'String' }
"boolean"            {$$= new Token("boolean","palabra reservada boolean", yylloc.first_column,yylloc.first_line); return 'boolean' }
{id}                  {$$= new Token(yytext,"id", yylloc.first_column,yylloc.first_line); return 'id' }
<<EOF>>	          return 'EOF'

      { $$ = new Error("LEXICO","No se esperaba el caracter: "+yytext,yylloc.first_column,yylloc.first_line);  console.error('Este es un error léxico: ' + yytext + '  en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}

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




INICIO :ComienzoA  EOF {return $$}
         | 
       ;
ComienzoA: ComienzoA InstruccionesA     
                  | InstruccionesA 
;
InstruccionesA : SentenciaClase
       |   SentenciaInterface  
        |COMENTARIOS 
       | EOF 
       ;

COMENTARIOS:'ComentarioLinea' 
|'ComentarioMulti' 
;
ListaInterfaces: ListaInterfaces SentenciaInterface  
                 | SentenciaInterface   
;

SentenciaInterface:'public' 'interface' 'id' InicioInterface  {$$ =new Interface(this._$.first_line,this._$.first_column,$2,$3);}
                ;

InicioInterface : '{' InterfaceMenu '}'  {$$ = $2;}           
                               | '{' '}' 
                                ;

InterfaceMenu: InterfaceMenu DeclaracionInterface   
               | DeclaracionInterface      

                               ;     



DeclaracionInterface:   'public' TIPO 'id' '(' Metodos_FuncionesI   
                        |  TIPO 'id' '(' Metodos_FuncionesI 
                        |'public' 'void' 'id' '(' Metodos_FuncionesI 
                        |COMENTARIOS ;

Metodos_FuncionesI: Parametros_Tipo ')' ';'                                 
                     |')' ';'         
                     ;     




ListaClases: ListaClases SentenciaClase 
            | SentenciaClase  
            ;



                       
SentenciaClase:'public' 'class' 'id' InicioClase 
               ;
               


InicioClase : '{' MenuClase '}'          
                               | '{' '}' 
                            ;


MenuClase: MenuClase DeclaracionClase 
                               | DeclaracionClase      
                               ;


DeclaracionClase: 'public' 'void' 'id' '(' Metodos_Funciones 
                        | 'void' 'id' '(' Metodos_Funciones  
                       | 'public' TIPO 'id' '(' Metodos_Funciones   
                         |  TIPO 'id' '(' Metodos_Funciones   
                        | DECLARACION {$$=$1}
                        | 'public'  'static' 'void' 'main' '(' 'String' '[' ']'  'args' ')' BlockInstrucciones 
                        | TIPO L_ids AsignacionV_P 
                        |EXPRESION_METODO ';'
                        |COMENTARIOS 
                        |'id' '=' EXPRESION ';'   
                        
                       

                          ; 

DECLARACION:'public' TIPO L_ids AsignacionV_P ;


Metodos_Funciones:   Parametros_Tipo  ')' BlockInstrucciones                                    
                     | Parametros_Tipo ')' ';'
                     |')' BlockInstrucciones     
                     |')' ';'      
                    

                     ;                



Instrucciones : Instrucciones INSTRUCCION 
              | INSTRUCCION               
                ;

INSTRUCCION : SOUT     
            |COMENTARIOS 
            | WHILE                
            | IF                   
            | DOWHILE              
            | FOR       
            |EXPRESION_METODO

            | AsignacionV_P_SIMPLE   
            | DeclaracionM_Funciones 
            | CONTINUE 
            | Return_F 
            | Return_M
            | BREAK 
            |Increment_Decrement2 
         
            ;
TIPO : 'int'  
     | 'String' 
     | 'boolean'
     | 'double' 
     | 'char' ;


FOR:'for' '(' Declaracion_f ';' EXPRESION ';' Increment_Decrement ')' BlockInstrucciones   
             ;
Declaracion_f: TIPO 'id' '=' EXPRESION   
       | 'id' '=' EXPRESION  
       | TIPO 'id'  
       ;
Increment_Decrement: 'id' 'incremento'   
           | 'id' 'decremento'    
           ;

Increment_Decrement2: 'id' 'incremento'  ';'  
           | 'id' 'decremento'   ';'   
           ;

DOWHILE: 'do' BlockInstrucciones  'while' Condicionales ';' 
       ;

SOUT: 'System' '.' 'out' '.'  TipoPrint '(' EXPRESION ')' ';'
} 
                ;


TipoPrint : 'println'  
	       | 'print'
              ; 



WHILE : 'while' Condicionales BlockInstrucciones   
      ;

IF : 'if' Condicionales BlockInstrucciones    
   | 'if' Condicionales BlockInstrucciones  'else' BlockInstrucciones     
   | 'if' Condicionales BlockInstrucciones  'else' IF    
   ;



Condicionales: '(' EXPRESION ')' 
          ;




BlockInstrucciones  : '{' Instrucciones '}'               /* este es para que acepte vacios*/
                     | '{' '}'    
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
          | 'cadena'			    
          | EXPRESION_METODO		    
          | caracter                          
          | entero                          
          | '(' EXPRESION ')'		    
          |Increment_Decrement 
          ;






AsignacionV_P_SIMPLE: 'id' '=' EXPRESION ';'   
                  |'id' '(' Llamar_Metodo_Exp ')' ';'   
                  |'id' '(' ')' ';'    
                 ;


EXPRESION_METODO: 'id' '(' Llamar_Metodo_Exp ')'  
                | 'id' '(' ')'     
                | 'id'    
                ;


Llamar_Metodo_Exp: Llamar_Metodo_Exp ',' EXPRESION  
                                | EXPRESION 
                                ;



DeclaracionM_Funciones: TIPO L_ids AsignacionV_P  
                                        ;


L_ids: L_ids ',' 'id'  
         | 'id'  
         ; 




AsignacionV_P: '=' EXPRESION ';' 
          | ';' 
          |'incremento' ';' 
          |'decremento' ';'
          
          ;





                                                                      
Parametros_Tipo  :Parametros_Tipo   ','  TIPO 'id'     
			   | TIPO 'id'
         | EXPRESION
         
                        ;







CONTINUE: 'continue' ';'  
                  ;
Return_M: 'return' ';'
                        ;
Return_F: 'return' EXPRESION ';' 
                         ;
BREAK: 'break' ';'
                         ; 


