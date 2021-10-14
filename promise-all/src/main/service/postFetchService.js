const log = require('../utils/log/log')
const colors = require('colors')

const analysis = (responses) => {
    const totalResponses = responses.length
        
    log.warn('A total of ' + `${totalResponses}` .red + ' responses have been returned.')
    console.log('\n')
    log.info('Starting individual analysis...')
    console.log('\n')

    albumsAnalysis(responses[0])
    postsAnalysis(responses[1])
    userAnalysis(responses[2])
}

const userAnalysis = (users) => {
    const totalUsers = users?.length
    log.title('users')
    log.info(`Total: ${totalUsers}`)
    log.info(`Last registered: ${users[totalUsers - 1].name}`)
}

const postsAnalysis = (posts) => {
    const totalPosts = posts?.length
    log.title('posts')
    log.info(`Total: ${totalPosts}`)
    log.info(`Last registered: ${posts[totalPosts - 1].title}`)
}

const albumsAnalysis = (albums) => {
    const totalAlbums = albums?.length
    log.title('albums')
    log.info(`Total: ${totalAlbums}`)
    log.info(`Last registered: ${albums[totalAlbums - 1].title}`)
}

module.exports = {
    analysis
}