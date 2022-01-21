//components
import Searchbar from "./SearchBar/SearchBar";

const Navbar = () => {
  return (
      <header>
          <div className="navbar container">
                <div className="logo">Cypto Market</div>
                <Searchbar placeholder='Search for crypto currency'/>
          </div>
      </header>
  )
}

export default Navbar;
