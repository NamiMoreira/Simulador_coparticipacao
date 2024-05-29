const https = require('https')
const fs = require('fs')
const bodyParser = require('body-parser');
const options = {key: fs.readFileSync('key.pem'),cert: fs.readFileSync('cert.pem')};
const express = require('express');
const app = express();
const host = ''
const port = '8080';
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use(express.static(__dirname +'/public'));


app.get('/simulaCoparticipacao/',(req,res) =>{
   var beneficiaryCard = req
   var state = fs.readFileSync('./static/estados-cidades.json');
   console.log(beneficiaryCard);
    res.render('index',{state: JSON.parse(state)})

});

app.post('/getCopart',(req,res) =>{
       var procedure = req.body.proced;
       var state = req.body.state;
       var city = req.body.city;
       res.send('passou')
})

app.get('/city',(req,res) => {
  var citySelect = req.headers.stateselect
  var city = fs.readFileSync('./static/estados-cidades.json')
  var data = JSON.parse(city)
 
  for (let i = 0; i < data.estados.length; i++) {
    const element = data.estados[i];
    if (element.sigla ==  citySelect) {
      res.end(JSON.stringify(element.cidades))
    }
  }   
})

const server = https.createServer(options, app);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
});