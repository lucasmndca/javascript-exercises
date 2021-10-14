const axios = require('axios')
const usersApi = require('../../main/api/users')

jest.mock('axios')

describe('Users api', () => {

    beforeAll(() => {
        axios.get = jest.fn(() => getMockReponse())
    })

    test('Endpoint is successfully fetched', () => {
        expect(usersApi.getUsers).not.toThrow()
    })

    test('Endpoint sends the expected response', async () => {
        let spy = jest.spyOn(axios, 'get')
        let res = await usersApi.getUsers()

        expect(res).toEqual(getMockReponse().data)
        expect(spy).toHaveBeenCalled()
    })
})

const getMockReponse = () => {
    return { data: [{ name: 'Test User 1' }] }
}