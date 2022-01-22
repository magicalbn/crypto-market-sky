import { useRouter } from "next/router";
//component
import Searchbar from "./SearchBar/SearchBar";

const Navbar = () => {
  const router = useRouter()
  return (
      <header>
          <div className="navbar container">
                <div className="logo" onClick={()=>{if(router.pathname!='/'){router.push('/')}}}><img src="/svg/bitcoin-cash-bch.svg"></img><h3>Crypto Market</h3></div>
                <Searchbar placeholder={'Search for Crypto . . .'}/>
          </div>
      </header>
  );
}

export default Navbar;
