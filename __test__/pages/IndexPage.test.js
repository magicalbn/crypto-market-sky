import 'jsdom-global/register';
import Index from "../../pages/index";


import { mount } from 'enzyme'


describe('Header Component', () => {

    it('should render without throwing error', async () => {
        const object = [
            {
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
            },
            {
                "MarketName": "BTC-NIO",
                "High": 0.00073034,
                "Low": 0.00073034,
                "Volume": 1532.97759255,
                "Last": 0.00073034,
                "BaseVolume": 1.11959474,
                "TimeStamp": "2022-01-22T13:13:18.63",
                "Bid": 0.00075099,
                "Ask": 0.00077646,
                "OpenBuyOrders": 7,
                "OpenSellOrders": 2,
                "PrevDay": 0.00073034,
                "Created": "2021-04-26T21:32:43.387"
            }
        ]
        const wrap = mount(<Index marketData={object} />)
        expect(wrap.find('.pagination').length).toBe(2)
        expect(wrap.find('.card').length).toBe(2)
    })

    it('should render without crashing when empty array is passed', async () => {
        const object = []
        const wrap = mount(<Index marketData={object} />)
        expect(wrap.find('.error').text()).toBe("Error: Some Error occured while retrieving Mart Summaries. Try again later.")
    })



});