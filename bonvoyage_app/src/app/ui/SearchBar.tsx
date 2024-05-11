'use client'
import { BiSearch } from "react-icons/bi"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";
interface Prop{
    placeholder?:string,
    onFocus?:any
}
const defaultProp: Prop={
    placeholder:"Search",
    onFocus:()=>{}
}
const SearchBar:React.FC<Prop> = ({
    placeholder=defaultProp.placeholder,
    onFocus=defaultProp.onFocus})=>{
    const pathname = usePathname()
    const params = useSearchParams()
    const {replace} =  useRouter()
    const search = useDebouncedCallback((query:string) =>{
        const new_params = new URLSearchParams(params)
        query ? new_params.set("query",query) : new_params.delete("query")
        replace(`${pathname}?${new_params.toString()}`);
    },300)
    return <div className="w-full ">
        <div className=" w-full bg-white px-4 flex rounded-3xl focus-within:outline focus-within:bg-slate-300">
            <BiSearch className="h-6 w-6 mt-2 mr-2"/>
            <input 
            onFocus={onFocus}
            placeholder={placeholder}
            className="w-full h-10 rounded-xl focus:outline-none focus-within:bg-slate-300 placeholder:text-gray-500"
            onChange={e=>{search(e.target.value)}}
            defaultValue={params.get('query')?.toString()}
            >
            </input>
        </div>
        
    </div>
}
export default SearchBar