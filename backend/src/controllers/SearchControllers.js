const mongoose = require('mongoose')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(request, response) {
        // Buscar todos os devs num raio de 10 km
        const { latitude, longitude, techs } = request.query


        const techArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })


        return response.json({ dev: devs })

    }
}