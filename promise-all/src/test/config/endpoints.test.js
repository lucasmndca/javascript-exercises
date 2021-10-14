const endpoints = require('../../main/config/endpoints.json')

describe('Endpoints config file', () => {

    test('Base endpoint exists, is available and readable', () => {
        let typeofBase = typeof endpoints.base
        expect(endpoints.base).not.toEqual(undefined)
        expect(endpoints.base).not.toEqual(null)
        expect(typeofBase).toEqual('string')
    })

    test('Users endpoint exists, is available and readable', () => {
        let typeOfUsers = typeof endpoints.users
        expect(endpoints.users).not.toEqual(undefined)
        expect(endpoints.users).not.toEqual(null)
        expect(typeOfUsers).toEqual('string')
    })

    test('Posts endpoint exists, is available and readable', () => {
        let typeOfPosts = typeof endpoints.posts
        expect(endpoints.posts).not.toEqual(undefined)
        expect(endpoints.posts).not.toEqual(null)
        expect(typeOfPosts).toEqual('string')
    })

    test('Albums endpoint exists, is available and readable', () => {
        let typeOfAlbums = typeof endpoints.albums
        expect(endpoints.albums).not.toEqual(undefined)
        expect(endpoints.albums).not.toEqual(null)
        expect(typeOfAlbums).toEqual('string')
    })

})