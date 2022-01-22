import { useState } from 'react'
import { useRouter } from 'next/router'
//icons
import { IoIosSearch } from 'react-icons/io';


const Searchbar = ({placeholder}) => {
    const [searchValue, setsearchValue] = useState('')
    const router = useRouter()
    const onSearch = (e) =>{
        e.preventDefault()
        router.push(`/market/${searchValue}`)
    }
    return (
        <form className="search-bar" onSubmit={onSearch}>
            <input type='search' value={searchValue} placeholder={placeholder} onChange={(e) => setsearchValue(e.target.value)}></input>
            <button type='submit'><IoIosSearch /></button>
        </form>
    )
} 

export default Searchbar;