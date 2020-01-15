const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async store(request, response) { 

        const {github_username, techs, latitude, longitude } = request.body;
        
        //verfifica se ja existe um dev com o username passado na base de dados.
        let dev = await Dev.findOne({github_username});

        if (!dev){
        // realiza a consulta na api do github
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
         const {name = login, avatar_url, bio} = apiResponse.data;    
        //Para cada tecnologia, remove os espaçoes em branco.
        const techsArray = techs.split(',').map(tech=> tech.trim());    
        const location = {
          type: 'Point',
          coordinates:[longitude, latitude],
        }
         dev =  await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs : techsArray,
            location,
            })
        }  
          return response.json(dev);
        }
};

