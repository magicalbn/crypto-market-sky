import 'jsdom-global/register';
import Searchbar from "../components/SearchBar/SearchBar";




import {mount} from 'enzyme'


describe('Searchbar', () => {
 
    it('should render without throwing an error',  () =>{
      const wrap = mount(<Searchbar placeholder='search for crypto . . .'/>)
      expect(wrap.find('form')).toBeTruthy()
    })
   
});