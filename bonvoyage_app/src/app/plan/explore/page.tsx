'use client'
import SearchBar from "@/app/ui/SearchBar";
import { place_types } from "@/app/lib/DataType";
import HorizontalScroller from "@/app/ui/HorizontalScroller";
import { IoIosArrowDropupCircle,IoIosArrowDropdownCircle } from "react-icons/io";
import { useState,useEffect } from "react";
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
    const [expanded,setExpanded] = useState(false)
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const resize = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth)
        };
        resize()
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);
    return <div className="w-full h-screen md:flex sm:flex-col md:flex-row  ">
        
        <div className=" z-40 w-full grow md:mt-8  md:order-last md:static absolute top-24 px-4 ">
            <SearchBar placeholder="Search"/>
        </div>
        <div className=" md:w-96 w-full h-screen rounded-md bg-slate-500  flex flex-col justify-end relative ">
            <div className="px-2 py-2 md:mt-28 md:static absolute top-32 w-full ">
                <HorizontalScroller places={places}/>
            </div>
            <div className={`bg-blue-200 py-2 overflow-y-scroll md:h-full z-40 transition-all duration-300 `} 
            style={{ height: (expanded || width >=768) ? height-64 : 192}}>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div> 
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
                <div className="h-32  bg-red-700 my-2"></div>
            </div>
            <div className={` pointer-events-none w-full  fixed bg-gradient-to-t from-white/30 to-transparent h-20 z-40 transition-all duration-300 `}>
            </div>
            <div className={`md:hidden w-8 h-8 absolute rounded-full left-1/2 flex transition-all duration-300 `} style={{ top: expanded ? 60 : height-208}}>
                {
                    !expanded ? <IoIosArrowDropupCircle onClick={()=>{setExpanded(true)}} className=" z-50 md:hidden w-8 h-8 absolute  fill-white bg-black rounded-full right-1/2 "/>
                    : <IoIosArrowDropdownCircle onClick={()=>{setExpanded(false)}} className=" z-50 md:hidden w-8 h-8 absolute  fill-white bg-black rounded-full right-1/2"/>
                }
                
            </div>
            
        </div>
    </div>
}
export default Page;