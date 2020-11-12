import express from 'express';
import fs from 'fs';
import {Lexico} from './Parea/Lexico';
import {Estatico} from './Parea/Estatico'
import {Sintactico} from './Parea/Sintactico'
var bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 4006;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
let Traducir="";
let Entrada="";
// 
let aux:any

//let Sintactic:Sintactico=new Sintactico(aux);
let Lexicos:Lexico= new Lexico()

app.set('views', __dirname);
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.json());

app.listen(port, err => {



return console.log(` anda al puerto http://localhost:${port} `);
});

app.get('/', (req, res) => {
  res.render('views/index', {
    entrada: '',
    consola: [],
    errores: []
  });
})

app.post('/Python', (req, res) => {
  const entrada = req.body.Cadena;
  
  


  Lexicos.Parser(entrada)
  let Sintacticos:Sintactico= new Sintactico(Lexicos.getLista())
  
  fs.appendFile('ReporteJS.html',Lexicos.Grafo(),(error)=>{
    if (error){
      console.log("ee0e")
     }else {
    /*   
  */
     
    
     }
  })
  
  fs.appendFile('ReporteEJS.html',Lexicos.GrafoE(),(error)=>{
    if (error){
      console.log("ee0e")
     }else {
    /*   
  */
     
    
     }
  })
Traducir+=Sintacticos.getTraduccion();

fs.appendFile('ReporteEJS.html',Sintacticos.GrafoE(),(error)=>{
  if (error){
    console.log("ee0e")
   }else {
  /*   
*/
   
  
   }
})
  res.send(Sintacticos.getTraduccion() )
})

app.get('/efe', (req, res) => {
  const entrada = req.body.entrada;

   res.send(Traducir)
   Traducir=""

});

















































