  
const mongoose = require("mongoose");

const Sonhos = mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
}, {
    timestamps: true
  });

module.exports = mongoose.model('Sonhos', Sonhos);