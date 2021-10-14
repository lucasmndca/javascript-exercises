const axios = require('axios')
const { base, users } = require('../config/endpoints.json')

const getUsers = async () => {
    let res = await axios.get(`${base}${users}`)
    return res.data
}

module.exports = {
    getUsers
}