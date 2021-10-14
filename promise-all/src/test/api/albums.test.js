const axios = require('axios')
const albumsApi = require('../../main/api/albums')

jest.mock('axios')

describe('Albums api', () => {

    beforeAll(() => {
        axios.get = jest.fn(() => getMockReponse())
    })

    test('Endpoint is successfully fetched', () => {
        expect(albumsApi.getAlbums).not.toThrow()
    })

    test('Endpoint sends the expected response', async () => {
        let spy = jest.spyOn(axios, 'get')
        let res = await albumsApi.getAlbums()

        expect(res).toEqual(getMockReponse().data)
        expect(spy).toHaveBeenCalled()
    })
})

const getMockReponse = () => {
    return { data: [{ title: 'Test' }] }
}