const { Router } = require('express');
const DevController = require('./DevController');
const parseStringAsArray = require('../utils/parseStringAsArray');
const Dev = require('../models/Dev');

module.exports = {

    async index(request, response) {
        //Buscar todos devs no raio de 10km
        //Filtrar por tecnologias

        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);

        console.log(techsArray);
        //rotina consulta com base filtros passados.
        const devs = await Dev.find({
            techs: {
                $in: techsArray, // operador logico dentro do mongo
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, // 10km
                },
            },
        });

        return response.json({ devs });
    }
}