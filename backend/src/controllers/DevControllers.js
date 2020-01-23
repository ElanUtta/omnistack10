const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {


    async delete(request, response) {
        const { github_username } = request.body

        const dev = await Dev.findOneAndDelete({
            github_username: github_username
        })

        return response.json({
            menssege: "Dev Deletado",
            Dev: dev
        })
    },


    async update(request, response) {

        const { github_username, techs, bio, name, avatar_url } = request.body

        const dev = await Dev.findOneAndUpdate({
            github_username: github_username
        }, {
            techs: techs,
            bio: bio,
            name: name,
            avatar_url, avatar_url
        })

        return response.json({
            message: "Atualizado",
            "dev": dev
        })
    },


    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },


    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        const ApiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

        let dev = await Dev.findOne({ github_username })

        if (!dev) {

            const { name = login, avatar_url, bio } = ApiResponse.data

            const techArray = parseStringAsArray(techs)

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
        }


    }
}