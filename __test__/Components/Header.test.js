import 'jsdom-global/register';
import Navbar from "../../components/Navbar";

import { mount } from 'enzyme'


describe('Header Component', () => {

    it('should render without throwing an error', () => {
        const wrap = mount(<Navbar />)

        expect(wrap.find('.logo').text()).toBe('Crypto Market')
    })

});