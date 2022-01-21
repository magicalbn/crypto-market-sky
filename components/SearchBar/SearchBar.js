import { useState } from 'react'
import { useRouter } from 'next/router'
//icons
import { IoIosSearch } from 'react-icons/io';


const Searchbar = ({placeholder}) => {
    const [searchValue, setsearchValue] = useState('')
    const router = useRouter()
    return (
        <div className="search-bar">
            <input type='search' value={searchValue} placeholder={placeholder} onChange={(e) => setsearchValue(e.target.value)}></input>
            <button onClick={()=>router.push(`/market/${searchValue}`)}><IoIosSearch /></button>
        </div>
    )
} 

export default Searchbar;