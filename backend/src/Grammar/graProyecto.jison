
%left UMENOS

%start INICIO

%%




INICIO :ComienzoA  EOF 
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
                        | DECLARACION 
                        | 'public'  'static' 'void' 'main' '(' 'String' '[' ']'  'args' ')' BlockInstrucciones 
                        | TIPO L_ids AsignacionV_P 
                        |EXPRESION_METODO ';'
                        |COMENTARIOS 
                        |'id' '=' EXPRESION ';' 
                        |error{ $$ = new Error("Sintactico","No se esperaba el caracter: "+yytext, this._$.first_column, this._$.first_line);  console.error('Este es un error léxico: ' + yytext + '  en la linea: ' + this.first_line + ', en la columna: ' + this.first_column);}
  
                        
                       

                          ; 

DECLARACION:'public' TIPO ListaDeclaracion
  ;

AsignacionV_P:'id' '=' EXPRESION  
          | 'id '
          | id 'incremento' 
          |id 'decremento' 
          
          ;


ListaDeclaracion :ListaDeclaracion ','  AsignacionV_P | AsignacionV_P ;
Metodos_Funciones:   Parametros_Tipo  ')' BlockInstrucciones                                    
                     | Parametros_Tipo ')' ';'
                     |')' BlockInstrucciones     
                     |')' ';'      
                    

                     ;                



Instrucciones : Instrucciones INSTRUCCION 
              | INSTRUCCION  
              |error   { $$ = new Error("Sintactico","No se esperaba el caracter: "+yytext, this._$.first_column, this._$.first_line);  console.error('Este es un error sintactico: ' + yytext + '  en la linea: ' + this.first_line + ', en la columna: ' +this.first_column);}
  
                                   
                ;

INSTRUCCION : SOUT     
            |COMENTARIOS 
            | WHILE                
            | IF                   
            | DOWHILE              
            | FOR       
            |EXPRESION_METODO

            | AsignacionV_P_SIMPLE   
            | DECLARACION
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
       | id
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
                  | 'id' '+=' EXPRESION ';'    
                  |'id' '-=' EXPRESION ';'   
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


