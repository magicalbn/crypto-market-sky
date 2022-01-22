import { useRouter } from "next/router";
//component
import Searchbar from "./SearchBar/SearchBar";

const Navbar = () => {
  const router = useRouter()
  return (
      <header>
          <div className="navbar container">
                <div className="logo" onClick={()=>{if(router.pathname!='/'){router.push('/')}}}>Cypto Market</div>
                <Searchbar placeholder={'Search for Crypto'}/>
          </div>
      </header>
  );
}

export default Navbar;
