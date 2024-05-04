import SearchBar from "@/app/ui/SearchBar";
import { place_types } from "@/app/lib/DataType";
import HorizontalScroller from "@/app/ui/HorizontalScroller";
const place1 : place_types = {
    name:"restaurant",
    selected:false,
}
const place2 : place_types = {
    name:"restaurant",
    selected:true,
}
const places : place_types[] = [
    place1,place2,place1,place1,place1
]
const Page = () =>{
    return <div className="w-full h-screen md:flex sm:flex-col md:flex-row">
        <div className=" md:w-96 w-full h-screen rounded-md bg-slate-500  ">
            <div className="px-2 py-2 mt-28 flex ">
            <HorizontalScroller places={places}/>
            </div>
        </div>
        <div className="grow">
            <div className="grow mt-8 mx-4">
                <SearchBar placeholder="Search"/>
            </div>
        </div>
    </div>
}
export default Page;