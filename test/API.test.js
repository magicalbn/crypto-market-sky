import {getAllCrypto,getCryptoDetails} from '../axios/lib/cryptoAPICalls'

describe('Api Calls', () => {
    test("Fetch Market Summaries",async () => {
        const data = await getAllCrypto()
        expect(data.length>0).toBeTruthy()
        
    })

    test("Fetch Summary for specific Crypto",async () => {
        const data = await getCryptoDetails('btc-ltc')
        
        expect(data.MarketName).toBeTruthy()
        expect(data.BaseVolume).toBeTruthy()
        expect(data.Ask).toBeTruthy()
        expect(data.Bid).toBeTruthy()
        expect(data.Created).toBeTruthy()
        expect(data.PrevDay).toBeTruthy()
    })

})
