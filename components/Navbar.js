//component
import Searchbar from "./SearchBar/SearchBar";

const Navbar = () => {
  return (
      <header>
          <div className="navbar container">
                <div className="logo">Cypto Market</div>
                <Searchbar placeholder={'Search for Crypto'}/>
          </div>
      </header>
  );
}

export default Navbar;
