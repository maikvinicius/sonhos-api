const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://teste:maik123@cluster0-jf8xl.mongodb.net/sonhos?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then( response => console.log('Conectado com sucesso!'))
.catch( error => console.log('Não foi possível conectar: ', error.message));

mongoose.set('useFindAndModify', false);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./router"));

app.use(function(req, res, next) {
    res.status(404).send('Desculpe, não encontramos!');
});

app.use(function(err, req, res, next) {
    res.status(500).send('Aconteceu algum erro no servido! Error: ',err.stack);
});

server.listen(process.env.PORT || 3333);