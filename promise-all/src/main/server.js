const log = require('./utils/log/log')
const time = require('./utils/time/time')

const albumsApi = require('./api/albums')
const postsApi = require('./api/posts')
const usersApi = require('./api/users')

const postFetch = require('./service/postFetchService')

async function main() {
    const startingTime = time.getTimestamp()
    log.warn(`Starting promise.all script at ${time.getFormattedDate()}`)

    try {
        let responses = await Promise.all([
            albumsApi.getAlbums(),
            postsApi.getPosts(),
            usersApi.getUsers()
        ])

        const timeTaken = time.getTimeTaken(startingTime)
        log.info(`Endpoints have successfully been fetched in ${timeTaken} seconds.`)

        postFetch.analysis(responses)
    } catch (error) {
        log.error(error)
    }
}

// Execution
main()