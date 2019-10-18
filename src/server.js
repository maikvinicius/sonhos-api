const express = require('express');
const app = express();
const server = require('http').Server(app);
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://teste:maik123@cluster0-jf8xl.mongodb.net/sonhos?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then( response => console.log('Conectado com sucesso!'))
.catch( error => console.log('Não foi possível conectar: ', error.message));
mongoose.set('useFindAndModify', false);

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