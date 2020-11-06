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
             
"/""/".*                             //efe
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] //efe


{caracter}         {$$= new Token(yytext,"char ", yylloc.first_column,yylloc.first_line); return 'caracter' }

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
">"                  {$$= new Token(">","mayor ", yylloc.first_column,yylloc.first_line); return ' >' }
"=="                   {$$= new Token("==","doble igual ", yylloc.first_column,yylloc.first_line); return '==' }
"!="                   {$$= new Token("!=","diferente ", yylloc.first_column,yylloc.first_line); return '!=' }

"||"                   {$$= new Token("||","O ", yylloc.first_column,yylloc.first_line); return '||' }
"&&"                   {$$= new Token("&&","Y ", yylloc.first_column,yylloc.first_line); return '&&' }
"!"                    {$$= new Token("!","admiracion ", yylloc.first_column,yylloc.first_line); return '!' }

"="                   {$$= new Token("="," igual ", yylloc.first_column,yylloc.first_line); return '=' }

","                    {$$= new Token(",","coma", yylloc.first_column,yylloc.first_line); return ',' }

"("                    {$$= new Token("(" , "parentesis abierto", yylloc.first_column,yylloc.first_line); return '(' }

")"                     {$$= new Token(")","parentesis cerrado", yylloc.first_column,yylloc.first_line); return ')' }
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
ComienzoA: ComienzoA InstruccionesA   {$1.push($2); $$ = $1}  
                  | InstruccionesA {$$ = [$1]}
;
InstruccionesA : SentenciaClase{$$ = new Arbol($1); $$= $1 ;}
       |   SentenciaInterface   {$$ = new Arbol($1); $$= $1;}
       | EOF {$$ = new Arbol($1); }
       ;


ListaInterfaces: ListaInterfaces SentenciaInterface  { $1.push($2); $$ = $1; }
                 | SentenciaInterface   { $$ = [$1]; }
;

SentenciaInterface:'public' 'interface' 'id' InicioInterface  {$$ =new Interface(this._$.first_line,this._$.first_column,$2,$3);}
                ;

InicioInterface : '{' InterfaceMenu '}'  {$$ = $2;}           
                               | '{' '}' {$$ = [];}
                                ;

InterfaceMenu: InterfaceMenu DeclaracionInterface   { $1.push($2); $$ = $1; }
               | DeclaracionInterface     { $$ = [$1]; } 

                               ;     



DeclaracionInterface:   'public' TIPO 'id' '(' Metodos_FuncionesI   {$$ =new FunctionInterface(this._$.first_line,this._$.first_column,$1,$2,$3,$4);}
                        |  TIPO 'id' '(' Metodos_FuncionesI {$$= new FunctionInterface(this._$.first_line,this._$.first_column,"-",$2,$3,$4);}
                        ; 

Metodos_FuncionesI: Parametros_Tipo ')' ';'          {$$= new Metodo_FuncionIN(this._$.first_line,this._$.first_column,$1);}                         
                     |')' ';'     {$$= new Metodo_FuncionIN(this._$.first_line,this._$.first_column,[]);}    
                     ;     




ListaClases: ListaClases SentenciaClase { $1.push($2); $$ = $1; }
            | SentenciaClase  { $$ = [$1]; }
            ;



                       
SentenciaClase:'public' 'class' 'id' InicioClase {$$ =new Class(this._$.first_line,this._$.first_column,$2,$4); console.log("en una clase") }
               ;
               


InicioClase : '{' MenuClase '}' {$$ = $2;}              /* este es para que acepte vacios*/
                               | '{' '}' {$$ = [];}
                            ;


MenuClase: MenuClase DeclaracionClase { $1.push($2); $$ = $1; }
                               | DeclaracionClase      { $$ = [$1]; }
                               ;


DeclaracionClase: 'public' 'void' 'id' '(' Metodos_Funciones {$$ =new Metodo_C(this._$.first_line,this._$.first_column,$1,$2,$3,$4);}
                        | 'void' 'id' '(' Metodos_Funciones  {$$ =new Metodo_C(this._$.first_line,this._$.first_column,".",$2,$2,$4);}
                       | 'public' TIPO 'id' '(' Metodos_Funciones   {$$ =new Funcion_C(this._$.first_line,this._$.first_column,$1,$2,$3,$5);}
                         |  TIPO 'id' '(' Metodos_Funciones  {$$= new Funcion_C(this._$.first_line,this._$.first_column,".",$1,$2,$4);} 
                        | 'public' TIPO L_ids AsignacionV_P {$$ =new DeclaracionAfuera(this._$.first_line,this._$.first_column,$1,$2,$3,$4);}
                        | 'public'  'static' 'void' 'main' '(' 'String' '[' ']'  'args' ')' BlockInstrucciones {$$= new Main(this._$.first_line,this._$.first_column,$4,$10);}
                        | TIPO L_ids AsignacionV_P {$$ =new DeclaracionAfuera(this._$.first_line,this._$.first_column,".",$1,$2,$3);}
                   
                          ; 


Metodos_Funciones: Parametros_Tipo  ')' BlockInstrucciones      {$$= new Metodo_Fc(this._$.first_line,this._$.first_column,$1,$3);}                              
                     |')' BlockInstrucciones     {$$ =new Metodo_Fc(this._$.first_line,this._$.first_column,null,$3);} 
                     ;                



Instrucciones : Instrucciones INSTRUCCION { $1.push($2); $$ = $1; }
              | INSTRUCCION               { $$ = [$1]; }
                ;

INSTRUCCION : SOUT     {$$ = $1;}
            | WHILE                {$$ = $1;}
            | IF                   {$$ = $1;}
            | DOWHILE              {$$ = $1;}
            | FOR       {$$ = $1;}
            | AsignacionV_P_SIMPLE     {$$ = $1;}
            | DeclaracionM_Funciones {$$ = $1;}
            | CONTINUE {$$ = $1; console.log("continue");}
            | Return_F {$$ = $1;}
            | Return_M{$$ = $1;}
            | BREAK {$$ = $1;console.log("break");}
            ;
TIPO : 'int'  {$$ = new TipoV($1);}
     | 'String' {$$ = new TipoV($1);}
     | 'boolean'{$$ = new TipoV($1);}
     | 'double' {$$ = new TipoV($1);}
     | 'char'{$$ = new TipoV($1);}
     ;


FOR:'for' '(' Declaracion_f ';' EXPRESION ';' Increment_Decrement ')' BlockInstrucciones  {$$= new For_alv(this._$.first_line,this._$.first_column,$3,$5,$7,$9);} 
             ;

Declaracion_f: TIPO 'id' '=' EXPRESION  {$$ =new Declaracion_For(this._$.first_line,this._$.first_column,$1,$2,$4);} 
       | 'id' '=' EXPRESION {$$ =new Asignacion(this._$.first_line,this._$.first_column,$1,$3);} 
       ;
Increment_Decrement: 'id' 'incremento'  {$$ =new Increment_Decrements(this._$.first_line,this._$.first_column,$1,$2);} 
           | 'id' 'decremento'   {$$ =new Increment_Decrements(this._$.first_line,this._$.first_column,$1,$2);} 
           ;


DOWHILE: 'do' BlockInstrucciones  'while' Condicionales ';'{$$ =new Do_While(this._$.first_line,this._$.first_column,$1,$2,$4);} 
       ;

SOUT: 'System' '.' 'out' '.'  TipoPrint '(' EXPRESION ')' ';'{$$= new Sout(this._$.first_line,this._$.first_column,$3,$5);
} 
                ;


TipoPrint : 'println' {$$ = $1 ; } 
	       | 'print' {$$ = $1;}
              ; 



WHILE : 'while' Condicionales BlockInstrucciones  {$$= new Whiles(this._$.first_line,this._$.first_column,$2,$3);} 
      ;

IF : 'if' Condicionales BlockInstrucciones   {$$ =new Ifs(this._$.first_line,this._$.first_column,$2,$3,[]);} 
   | 'if' Condicionales BlockInstrucciones  'else' BlockInstrucciones    {$$= new Ifs(this._$.first_line,this._$.first_column,$2,$3,$4);} 
   | 'if' Condicionales BlockInstrucciones  'else' IF   {$$=new Ifs(this._$.first_line,this._$.first_column,$2,$3,[$4]);} 
   ;



Condicionales: '(' EXPRESION ')' {$$ = $2;}
          ;




BlockInstrucciones  : '{' Instrucciones '}' {$$ = $2;}              /* este es para que acepte vacios*/
                     | '{' '}'    {$$ = [];}
                     ;
      
EXPRESION : '-' EXPRESION %prec UMENOS	   {$$= new Operaciones(this._$.first_line,this._$.first_column,null,$1,$2);}
          | '!' EXPRESION	                 {$$ =new Operaciones(this._$.first_line,this._$.first_column,null,$1,$2);}
          | EXPRESION '+' EXPRESION          {$$ =new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '-' EXPRESION          {$$ =new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '*' EXPRESION          {$$ =new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '/' EXPRESION	   {$$ =new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '%' EXPRESION	   {$$= new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '^' EXPRESION	   {$$= new Operaciones(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '<' EXPRESION	   {$$ =new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '>' EXPRESION          {$$ = new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '>=' EXPRESION	    {$$= new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '<=' EXPRESION	   {$$ =new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);  }
          | EXPRESION '==' EXPRESION	   {$$ =new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3); }
          | EXPRESION '!=' EXPRESION	   {$$ =new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3); } 
          | EXPRESION '||' EXPRESION	    {$$= new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
          | EXPRESION '&&' EXPRESION	    {$$= new Condicionales(this._$.first_line,this._$.first_column,$1,$2,$3);}
           | 'decimal'		           { $$ = new Dato_Exp(this._$.first_line, this._$.first_column,"Double", Number($1)); }
          | 'true'				    { $$ = new Dato_Exp( this._$.first_line, this._$.first_column,"Boolean", true); }
          | 'false'				    {  $$ = new Dato_Exp(this._$.first_line, this._$.first_column,"Boolean", false); }
          | STRING_LITERAL			    {  $$ = new Dato_Exp(this._$.first_line, this._$.first_column,"String", $1.replace(/\"/g,"")); }
          | EXPRESION_METODO		    { $$ = $1}
          | caracter                          { $$ = new Dato_Exp( this._$.first_line, this._$.first_column,"char", $1.replace(/\'/g,"")); }
          | entero                            { $$ = new Dato_Exp( this._$.first_line, this._$.first_column,"int",Number($1) );console.log("probando un") }
          | '(' EXPRESION ')'		    { $$ = $2; }
          ;






AsignacionV_P_SIMPLE: 'id' '=' EXPRESION ';'  {$$= new Asignacion(this._$.first_line,this._$.first_column,$1,$3);} 
                  |'id' '(' Llamar_Metodo_Exp ')' ';'  {$$ =new LlamadaMetodo(this._$.first_line,this._$.first_column,$1,$3);} 
                  |'id' '(' ')' ';'   {$$= new LlamadaMetodo(this._$.first_line,this._$.first_column,$1,[]);} 
                 ;


EXPRESION_METODO: 'id' '(' Llamar_Metodo_Exp ')' {$$= new LlamadaMetodo(this._$.first_line,this._$.first_column,$1,$3);} 
                | 'id' '(' ')'    {$$= new LlamadaMetodo(this._$.first_line,this._$.first_column,$1,[]);} 
                | 'id'   {$$ =new Id_Solo(this._$.first_line,this._$.first_column,$1);} 
                ;


Llamar_Metodo_Exp: Llamar_Metodo_Exp ',' EXPRESION  { $1.push($3); $$ = $1; }
                                | EXPRESION { $$ = [$1]; }
                                ;



DeclaracionM_Funciones: TIPO L_ids AsignacionV_P {$$= new DeclaracionMF(this._$.first_line,this._$.first_column,$1,$2,$3);} 
                                        ;


L_ids: L_ids ',' 'id'  { $1.push( $3); $$ = $1; }
         | 'id'  { $$ = [$1]; }
         ; 




AsignacionV_P: '=' EXPRESION ';' {$$ = $2 }
          | ';' {$$ = null;}
          ;





                                                                      
Parametros_Tipo  :Parametros_Tipo   ','  TIPO 'id'     { $1.push(new Parametro(this._$.first_line , this._$.first_column,$3,$4)); $$ = $1; }
			   | TIPO 'id'{ $$ = [new Parametro( this._$.first_line , this._$.first_column,$1 , $2)]; }
                        ;







CONTINUE: 'continue' ';'  {$$ = new Continues( $1, this._$.first_line, this._$.first_column);}
                  ;
Return_M: 'return' ';'{$$ = new ReturnM($1, this._$.first_line , this._$.first_column);}
                        ;
Return_F: 'return' EXPRESION ';' {$$ = new ReturnF($1, this._$.first_line , this._$.first_column);}
                         ;
Break_Ciclo: 'break' ';' {$$=new Break(this._$.first_line,this._$.first_column,$1);}
                         ; 


