import 'jsdom-global/register';
import Footer from "../../components/Footer";

import { mount } from 'enzyme'


describe('Footer Component', () => {

    it('should render without throwing an error', () => {
        const wrap = mount(<Footer />)

        expect(wrap.find('.logo').text()).toBe('Crypto Market')
        expect(wrap.find('button').text()).toBe('Back to top  ')
    })

});