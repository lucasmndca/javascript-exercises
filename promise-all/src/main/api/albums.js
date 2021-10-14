const axios = require('axios')
const { base, albums } = require('../config/endpoints.json')

const getAlbums = async () => {
    let res = await axios.get(`${base}${albums}`)
    return res.data
}

module.exports = {
    getAlbums
}