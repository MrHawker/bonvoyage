'use client'
import { BiSearch } from "react-icons/bi"

const SearchBar = ()=>{
    return <div className="grow px-4 mt-8">
        <div className=" w-full bg-white px-4 flex rounded-sm focus-within:outline focus-within:bg-slate-300">
            <BiSearch className="h-5 w-5 mt-2 mr-2"/>
            <input
            placeholder="Search History"
            className="w-full h-8 rounded-xl focus:outline-none focus-within:bg-slate-300 placeholder:text-gray-500"
            >
            </input>
        </div>
        
    </div>
}
export default SearchBar