const time = require('../../../main/utils/time/time')

describe('Time utils', () => {
    
    test('Time taken works properly', async () => {
        const now = time.getTimestamp()
        const asyncReq = async () => {
            return new Promise(async resolve => {
                setTimeout(() => resolve(time.getTimeTaken(now)), 1500)
            }) 
        }
        
        let diff = await asyncReq()
        let formatted = diff.toString().slice(0,3)
        expect(formatted).toEqual('1.5')
    })

})