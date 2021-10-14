const axios = require('axios')
const { base, posts } = require('../config/endpoints.json')

const getPosts = async () => {
    let res = await axios.get(`${base}${posts}`)
    return res.data
}

module.exports = {
    getPosts
}