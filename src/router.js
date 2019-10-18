const express = require('express');

const Sonhos = require('./controller/Sonhos');

const routes = express.Router();

// Sonhos
routes.get("/sonhos", Sonhos.buscarTodos);
routes.post("/sonhos", Sonhos.cadastrar);
routes.get("/sonhos/:id", Sonhos.buscarUm);
routes.put("/sonhos/:id", Sonhos.editar);
routes.delete("/sonhos/:id", Sonhos.deletar);

module.exports = routes;
