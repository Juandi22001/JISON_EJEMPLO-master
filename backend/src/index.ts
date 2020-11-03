import express from 'express';
 import fs = require('fs'); 
import {Errores} from './ManejoErrores/Errores'
import { Traduccion } from './ManejoErrores/Traduccion';
const analizador_jison = require('./Grammar/GramaticaPrueba');

var bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 4001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');



app.set('views', __dirname);
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.json());

fs.appendFile('efe.html',Errores.geterror(),(error)=>{
  if (error){
    console.log("ee")
   }else {
   
  
   }
})
app.listen(port, err => {
 /* fs.readFile('efe.txt','utf-8',(error,datos)=>{

    if (error){
     console.log("efe")
    }else {
      const efe= analizador_jison.parse(datos)
       
      console.log(Traduccion.getCadena()+"efeeeeeee");
    }
    
    })*/
    const efe= analizador_jison.parse("class efe{ void a(int a){ if a==1){                      }  }}")
       
    console.log(Traduccion.getCadena()+"efeeeeeee");
    Errores.clear()
    console.log(Traduccion.getCadena())
  return console.log(` anda al puerto http://localhost:${port} `);
    
  

});






/*
app.get('/', (req, res) => {
  res.render('views/index', {
    entrada: '',
    consola: [],
    errores: []
  });
})


// LLAMADA DE EJEMPLO             ACA LLAMAS MAJE LGP :) JAJAJA
/*
app.post('/ejemplo', (req, res) => {
  console.log("REALIZANDO LA PETICION DESDE EL FORMULARIO QUE SE ENCUENTRA EN la carpeta VIEWS por medio de un Form \n\n\n");
  const entrada = req.body.entrada;
  const ARBOL_LGP= analizador_jison.parse(entrada);
  console.log("-------------INICIA EL ARBOL----------------");
  console.log(ARBOL_LGP);
  const efe = JSON.stringify(ARBOL_LGP);
  console.log(efe);
});




*/














































