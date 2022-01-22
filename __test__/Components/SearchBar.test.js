import 'jsdom-global/register';
import Searchbar from "../../components/SearchBar/SearchBar";

import { mount } from 'enzyme'


describe('Searchbar Component', () => {

  it('should render without throwing an error', () => {
    const wrap = mount(<Searchbar placeholder='search for crypto . . .' />)

    expect(wrap.find('input').props().placeholder).toBe('search for crypto . . .')
  })

});