import 'jsdom-global/register';
import Crypto from "../../pages/market/[crypto]";


import { mount } from 'enzyme'


describe('Crypto Page', () => {

    it('should render without throwing error', async () => {
        const object = {
            "MarketName": "BTC-ATOM",
            "High": 0.0009746,
            "Low": 0.00080227,
            "Volume": 35190.19269395,
            "Last": 0.00088413,
            "BaseVolume": 30.51812755,
            "TimeStamp": "2022-01-22T13:13:18.63",
            "Bid": 0.00088129,
            "Ask": 0.00088302,
            "OpenBuyOrders": 435,
            "OpenSellOrders": 457,
            "PrevDay": 0.00093918,
            "Created": "2019-04-23T17:44:01.423"
        }
        const wrap = mount(<Crypto cryptoData={object} cryptoQuery={object.MarketName} />)
        expect(wrap.find('.crypto-content').length).toBe(1)
        expect(wrap.find('.details-content p').length).toBe(12)
    })

    it('should render without crashing when empty object is passed', async () => {
        const object = {}
        const wrap = mount(<Crypto cryptoData={object} cryptoQuery="test-input" />)
        expect(wrap.find('.error').text()).toBe("Error: No Market Summary found for 'test-input'.")
    })



});