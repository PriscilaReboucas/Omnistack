const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');


// Mapeamento para a base de dados
const DevSchema = new mongoose.Schema ({
   name:String,
   github_username: String,
   bio: String,
   avatar_url: String,
   techs: [String],
   location:{
      type:PointSchema,
      index:'2dsphere' // indice para geolocalização
   }
});

//Exportar o modulo
module.exports = mongoose.model('Dev',DevSchema);
