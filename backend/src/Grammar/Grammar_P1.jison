%{
   const {Arbol} = require('../Simbols/Arbol');
   const {Class} =require ('../ClasesParaArbol/Class')
   const {Interface} =require ('../ClasesParaArbol/Class')
   const {FuncionInterface}= require('../ClasesParaArbol/FuncionInterface')
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
  const {Exp_Case}=require('../ClasesParaArbol/Exp_Case') 
   const {Switchs}=require('../ClasesParaArbol/Switch') 
   const {Case}=require('../ClasesParaArbol/Case') 
   const {Default}=require('../ClasesParaArbol/Default') 
    const {Break}=require('../ClasesParaArbol/Break') 
   const {Exp_Case}=require('../ClasesParaArbol/Exp_Case') 
    const {LlamadaMetodo}=require('../ClasesParaArbol/LlamadaMetodo') 
    const {DeclaracionMF}=require('../ClasesParaArbol/DeclaracionMF') 
      const {Parametro}=require('../ClasesParaArbol/Parametro') 
      const {Continues}=require('../ClasesParaArbol/Continue') 
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
"."                   return '.' 
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
"public"              return  'public'
"static"              return 'static'
"main"                return 'main'
"println"             return 'println'
"print"               return 'print'
"out"                 return 'out' 
"System"              return 'System'
"void"                return 'void'
"args"                return  'args'
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
"interface"           return 'interface'
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




INICIO : ListaInterface EOF {$$ = new Arbol($1); return $$;}
       |  ListaClases  EOF{$$ = new Arbol($1); return $$;}
       | EOF {$$ = new Arbol($1); return $$;}
       ;



ListaInterfaces: ListaInterfaces SentenciaInterface { $1.push($2); $$ = $1; }
                 | SentenciaInterface { $$ = [$1]; }
;

SentenciaInterface:'interface' id InicioInterface {$$ new Interface(this._$.first_line,this._$.first_column,$2,$3);}
                ;

InicioInterface : '{' InterfaceMenu '}'  {$$ = $2;}           
                               | '{' '}' 
                                ;

InterfaceMenu: InterfaceMenu DeclaracionInterface 
               | DeclaracionInterface    
                               ;     


DeclaracionInterface:   'public' TIPO id '(' Metodos_FuncionesI   {$$ new FuncionInterface(this._$.first_line,this._$.first_column,$1,$2,$3,$4);}
                        |  TIPO id '(' Metodos_FuncionesI {$$ new FuncionInterface(this._$.first_line,this._$.first_column,"-",$2,$3,$4);}
                        ; 

Metodos_FuncionesI: Parametros_Tipo ')' ';'          {$$ new Metodo_FuncionIN(this._$.first_line,this._$.first_column,$2);}                         
                     |')' ';'     {$$ new Metodo_FuncionIN(this._$.first_line,this._$.first_column,[]);}    
                     ;     




ListaClases: ListaClases SentenciaClase{ $1.push($2); $$ = $1; }
            | SentenciaClase  { $$ = [$1]; }
            ;



                       
SentenciaClase:'class' 'id' InicioClase {$$ new Class(this._$.first_line,this._$.first_column,$2,$3);}
              | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
              ;
               


InicioClase : '{' MenuClase '}' {$$ = $2;}              /* este es para que acepte vacios*/
                               | '{' '}' {$$ = [];}
                               | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
                               ;


MenuClase: MenuClase DeclaracionClase { $1.push($2); $$ = $1; }
                               | DeclaracionClase      { $$ = [$1]; }
                               ;


DeclaracionClase: 'public' 'void' id '(' Metodos_Funciones {$$ new Metodo_C(this._$.first_line,this._$.first_column,$1,$2,$3,$4);}
                        | 'void' id '(' Metodos_Funciones  {$$ new Metodo_C(this._$.first_line,this._$.first_column,".",$2,$3,$4);}
                       | 'public' TIPO id '(' Metodos_Funciones   {$$ new Funcion_C(this._$.first_line,this._$.first_column,$1,$2,$3,$4);}
                         |  TIPO id '(' Metodos_Funciones  {$$ new Metodo_C(this._$.first_line,this._$.first_column,".",$2,$3,$4);} 
                        | 'public' TIPO L_Ids AsignacionV_P {$$ new DeclaracionAfuera(this._$.first_line,this._$.first_column,$1,$2,$3,$4);}
                        | 'public'  'static' 'void' 'main' '(' 'S tring' '[' ']'  'args' ')' BlockInstrucciones {$$ new Main(this._$.first_line,this._$.first_column,$4,$10);}
                        | TIPO L_Ids AsignacionV_P {$$ new DeclaracionAfuera(this._$.first_line,this._$.first_column,".",$2,$3,$4);}
                   
                        | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
                        ; 


Metodo_Funcion: Parametros_Tipo  ')' BlockInstrucciones      {$$ new Metodo_Fc(this._$.first_line,this._$.first_column,$1,$3);}                              
                     |')' BlockInstrucciones     {$$ new Metodo_Fc(this._$.first_line,this._$.first_column,[],$3);} 
                     ;                



Instrucciones : Instrucciones INSTRUCCION { $1.push($2); $$ = $1; }
              | INSTRUCCION               { $$ = [$1]; }
              | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
              ;

INSTRUCCION : SOUT     {$$ = $1;}
            | WHILE                {$$ = $1;}
            | IF                   {$$ = $1;}
            | DOWHILE              {$$ = $1;}
            | FOR       {$$ = $1;}
            | SWITCH      {$$ = $1;}
            | AsignacionV_P_SIMPLE     {$$ = $1;}
            | DeclaracionM_Funciones {$$ = $1;}
            | CONTINUE {$$ = $1; console.log("continue");}
            | Return_F {$$ = $1;}
            | Return_M{$$ = $1;}
            | BREAK {$$ = $1;console.log("break");}
            ;
TIPO : 'int'  {$$ = new Type(types.INT);}
     | 'String' {$$ = new Type(types.STRING);}
     | 'boolean'{$$ = new Type(types.BOOLEAN);}
     | 'double' {$$ = new Type(types.DOUBLE);}
     | 'char'{$$ = new Type(types.CHAR);}
     ;


FOR:'for' '(' Declaracion_f ';' EXPRESION ';' Increment_Decrement ')' BlockInstrucciones  {$$ new For_alv(this._$.first_line,this._$.first_column,$3,$5,$7,$9);} 
             ;

Declaracion_f: TIPO 'id' '=' EXPRESION  {$$ new Declaracion_For(this._$.first_line,this._$.first_column,$1,$2,$4);} 
       | 'id' '=' EXPRESION {$$ new Asignacion(this._$.first_line,this._$.first_column,$1,$3);} 
       ;
Increment_Decrement: 'id' 'incremento'  {$$ new Increment_Decrements(this._$.first_line,this._$.first_column,$1,$2);} 
           | 'id' 'decremento'   {$$ new Increment_Decrements(this._$.first_line,this._$.first_column,$1,$2);} 
           ;


DOWHILE: 'do' BlockInstrucciones  'while' Condicionales ';'{$$ new Do_While(this._$.first_line,this._$.first_column,$1,$2,$4);} 
       ;

SOUT: 'System' '.' 'out' '.'  TipoPrint '(' EXPRESION ')' ';'{$$ new Sout(this._$.first_line,this._$.first_column,$3,$5);
} 
                ;


TipoPrint : 'println' {$$ = $1 ; } 
	       | 'print' {$$ = $1;}
              | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);   }  
              ; 



WHILE : 'while' Condicionales BlockInstrucciones  {$$ new Whiles(this._$.first_line,this._$.first_column,$2,$3);} 
      ;

IF : 'if' Condicionales BlockInstrucciones   {$$ new Ifs(this._$.first_line,this._$.first_column,$2,$3,[]);} 
   | 'if' Condicionales BlockInstrucciones  'else' BlockInstrucciones    {$$ new Ifs(this._$.first_line,this._$.first_column,$2,$3,$4);} 
   | 'if' Condicionales BlockInstrucciones  'else' IF   {$$ new Ifs(this._$.first_line,this._$.first_column,$2,$3,[$4]);} 
   ;



Condicionales: '(' EXPRESION ')' {$$ = $2;}
          ;




BlockInstrucciones  : '{' Instrucciones '}' {$$ = $2;}              /* este es para que acepte vacios*/
                     | '{' '}'    {$$ = [];}
                     ;
      
EXPRESION : '-' EXPRESION %prec UMENOS	   {$$ new Operaciones(this._$.first_line,this._$.first_column,null,$1,$2);}
          | '!' EXPRESION	                 {$$ new Operaciones(this._$.first_line,this._$.first_column,null,$1,$2);}
          | EXPRESION '+' EXPRESION          {$$ new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '-' EXPRESION          {$$ new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '*' EXPRESION          {$$ new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '/' EXPRESION	   {$$ new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '%' EXPRESION	   {$$ new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '^' EXPRESION	   {$$ new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '<' EXPRESION	   {$$ new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '>' EXPRESION          {$$ new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '>=' EXPRESION	    {$$ new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '<=' EXPRESION	   {$$ new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);  }
          | EXPRESION '==' EXPRESION	   {$$ new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3); }
          | EXPRESION '!=' EXPRESION	   {$$ new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3); } 
          | EXPRESION '||' EXPRESION	    {$$ new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '&&' EXPRESION	    {$$ new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
           | 'decimal'		           { $$ = new Dato_Exp(this._$.first_line, this._$.first_column, new Type(types.DOUBLE), Number($1)); }
          | 'true'				    { $$ = new Dato_Exp( this._$.first_line, this._$.first_column,new Type(types.BOOLEAN), true); }
          | 'false'				    {  $$ = new Dato_Exp(this._$.first_line, this._$.first_column,new Type(types.BOOLEAN), false); }
          | STRING_LITERAL			    {  $$ = new Dato_Exp(this._$.first_line, this._$.first_column,new Type(types.STRING), $1.replace(/\"/g,"")); }
          | EXPRESION_METODO		    { $$ = $1}
          | caracter                          { $$ = new Dato_Exp( this._$.first_line, this._$.first_column,new Type(types.CHAR), $1.replace(/\'/g,"")); }
          | entero                            { $$ = new Dato_Exp( this._$.first_line, this._$.first_column,new Type(types.INT), Number($1) ); }
          | '(' EXPRESION ')'		    { $$ = $2; }
          ;


SWITCH: 'switch' '(' EXPRESION ')' Cases {$$ new Switchs(this._$.first_line,this._$.first_column,$3,$5);} 
                ;
              
Cases:  '{' List_Cases Default '}' {$$ new Case(this._$.first_line,this._$.first_column,$2,$3);} 
            | '{' '}'    {$$ = [];}
            ;
        
Default:'default' ':' Ins_Vacia  BREAK  {$$ new Default(this._$.first_line,this._$.first_column,$3,$4);}
             | {$$ = [];} 
             ;



List_Cases: List_Cases Cases_Exp  { $1.push($2); $$ = $1; } 
          | Cases_Exp  { $$ = [$1]; }
          ;
Cases_Exp :'case' EXPRESION ':' Ins_Vacia BREAK  {$$ new Exp_Case(this._$.first_line,this._$.first_column,$2,$4);}
        ;

BREAK: 'break' ';' {$$ new Break(this._$.first_line,this._$.first_column,$1);}
        ;
               ;

Ins_Vacia:  Inst_Sw {$$=$1;}
                            | {$$=[];}
                            ;


Inst_Sw : Inst_Sw Instruccion_Switch{ $1.push($2); $$ = $1; }
              | Instruccion_Switch              { $$ = [$1]; }
              | error {  console.error('Este es un error sintáctico: [' + yytext + ']  en la linea: ' +  this._$.first_line + ', en la columna: ' + this._$.first_column);  }  
              ;
// LO MISMO PERO NO TIENE EL BREAK para que no se encicle 
Instruccion_Switch: SOUT     {$$ = $1;}
            | WHILE                {$$ = $1;}
            | IF                   {$$ = $1;}
            | DOWHILE              {$$ = $1;}
            | FOR       {$$ = $1;}
            | SWITCH      {$$ = $1;}
            | AsignacionV_P_SIMPLE     {$$ = $1;}
            | DeclaracionM_Funciones    {$$ = $1;}
            | CONTINUE {$$ = $1;}
            | Return_F {$$ = $1;}
            | Return_M{$$ = $1;}
            ;
















AsignacionV_P_SIMPLE: id '=' EXPRESION ';'  {$$ new Asignacion(this._$.first_line,this._$.first_column,$1,$3);} 
                  |id '(' Llamar_Metodo_Exp ')' ';'  {$$ new LlamadaMetodo(this._$.first_line,this._$.first_column,$1,$3);} 
                  |id '(' ')' ';'   {$$ new LlamadaMetodo(this._$.first_line,this._$.first_column,$1,[]);} 
                 ;


EXPRESION_METODO: id '(' Llamar_Metodo_Exp ')' {$$ new LlamadaMetodo(this._$.first_line,this._$.first_column,$1,$3);} 
                | id '(' ')'    {$$ new LlamadaMetodo(this._$.first_line,this._$.first_column,$1,[]);} 
                | id   {$$ new Id_Solo(this._$.first_line,this._$.first_column,$1);} 
                ;


Llamar_Metodo_Exp: Llamar_Metodo_Exp ',' EXPRESION  { $1.push($3); $$ = $1; }
                                | EXPRESION { $$ = [$1]; }
                                ;



DeclaracionM_Funciones: TIPO L_Ids AsignacionV_P {$$ new DeclaracionMF(this._$.first_line,this._$.first_column,$1,$2,$3);} 
                                        ;


L_Ids: L_Ids ',' id  { $1.push($3); $$ = $1; }
         | id  { $$ = [$1]; }
         ; 




AsignacionV_P: '=' EXPRESION ';' {$$ = $2}
          | ';' {$$ = [];}
          ;





                                                                      
Parametros_Tipo  :Parametros_Tipo   ','  TIPO 'id'     { $1.push(new Parametro($3 , $4 ,this._$.first_line , this._$.first_column)); $$ = $1; }
			   | TIPO 'id'{ $$ = [new Parametro($1 , $2 ,this._$.first_line , this._$.first_column)]; }
                        ;







CONTINUE: 'continue' ';'  {$$ = new Continues( $1, this._$.first_line, this._$.first_column);}
                  ;
Return_M: 'return' ';'{$$ = new ReturnM($1, this._$.first_line , this._$.first_column);}
                        ;
Return_F: 'return' EXPRESION ';' {$$ = new ReturnF($1, this._$.first_line , this._$.first_column);}
                         ;
Break_Ciclo: 'break' ';' {$$ new Break(this._$.first_line,this._$.first_column,$1);}
                         ; 


