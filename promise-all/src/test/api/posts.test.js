const axios = require('axios')
const postsApi = require('../../main/api/posts')

jest.mock('axios')

describe('Post api', () => {

    beforeAll(() => {
        axios.get = jest.fn(() => getMockReponse())
    })

    test('Endpoint is successfully fetched', () => {
        expect(postsApi.getPosts).not.toThrow()
    })

    test('Endpoint sends the expected response', async () => {
        let spy = jest.spyOn(axios, 'get')
        let res = await postsApi.getPosts()

        expect(res).toEqual(getMockReponse().data)
        expect(spy).toHaveBeenCalled()
    })
})

const getMockReponse = () => {
    return { data: [{ title: 'I\m a post!!' }] }
}