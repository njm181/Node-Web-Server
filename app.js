require('dotenv').config();//para importar las variables de entorno en el .env
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs'); //para renderizar algo que use handlebars
hbs.registerPartials(__dirname + '/views/partials');



//Middleware
app.use( express.static('public') );//Express siempre va a buscar dentro de Public un index.html

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Nicolas Molina',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
  //res.sendFile(__dirname + '/public/generic.html')
  res.render('generic')
})

app.get('/elements', (req, res) => {
  //res.sendFile(__dirname + '/public/elements.html')
  res.render('elements')
})


//La carpeta Public tiene prioridad sobre las rutas siguientes, por eso no va a ingresar
/* app.get('/', (req, res) => {
  res.send('Raiz /')
})
 
app.get('/home', (req, res) => {
    res.send('Home Page Perrito Malvado')
  })

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  }) */

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })