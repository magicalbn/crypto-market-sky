import { useState } from 'react'
//icons
import { IoIosSearch } from 'react-icons/io';


const Searchbar = ({placeholder}) => {
    const [searchValue, setsearchValue] = useState('')
    return (
        <div className="search-bar">
            <input type='search' value={searchValue} placeholder={placeholder} onChange={(e) => setsearchValue(e.target.value)}></input>
            <button><IoIosSearch /></button>
        </div>
    )
} 

export default Searchbar;