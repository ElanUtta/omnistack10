const { Router } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const routes = Router()

// Tipos de Parâmetros

//Query Params: acesso usando = "request.query" (Filtros, ordenação, paginação, ...) Utilizado no GET, para criar querys
//Route Params: acesso usando = "request.params" (Identificar um rescurso na alteração ou remoção)
//Body: request.body (Criar e passar grandes dados)


routes.post('/devs', async (request, response) => {
    const { github_username, techs, latitude, longitude } = request.body

    const ApiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name = login, avatar_url, bio } = ApiResponse.data

    const techArray = techs.split(',').map(tech => tech.trim())

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    }

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techArray,
        location
    })


    return response.json(dev)
});


module.exports = routes