import 'jsdom-global/register';
import Card from "../../components/Cards";

import { mount } from 'enzyme'


describe('Card Component', () => {

    it('should render without throwing an error', () => {

        const Object = {
            "MarketName": "BTC-LTC",
            "High": 0.0135,
            "Low": 0.012,
            "Volume": 3833.97619253,
            "Last": 0.01349998,
            "BaseVolume": 47.03987026,
            "TimeStamp": "2014-07-09T07:22:16.72",
            "Bid": 0.01271001,
            "Ask": 0.012911,
            "OpenBuyOrders": 45,
            "OpenSellOrders": 45,
            "PrevDay": 0.01229501,
            "Created": "2014-02-13T00:00:00",
            "DisplayMarketName": "string"
        }

        const wrap = mount(<Card cryptoDetails={Object} />)

        expect(wrap.find('.value').length).toBe(4)
        expect(wrap.find('.details-name .value').text()).toBe('BTC-LTC')
        expect(wrap.find('.details-current .value').text()).toBe('0.012911')
        expect(wrap.find('.details-volume .value').text()).toBe('3833.98')
        expect(wrap.find('.details-prev .value').text()).toBe('0.01229501')
        expect(wrap.find('button').text()).toBe('More Details')
    })

});