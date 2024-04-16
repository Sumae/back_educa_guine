const mongoose = require('mongoose');

const DiscSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    tipo: String,
    conteudo: String,
    autor: String,
    autorNome:String
  
},
    {timestamps: true}
);

module.exports = mongoose.model("Disc", DiscSchema);