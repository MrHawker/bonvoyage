'use client'
import { place_types } from "@/app/lib/DataType";
import { BiRestaurant,BiHotel,BiStore } from "react-icons/bi"
import { BsBank } from "react-icons/bs";
import { IoCafe } from "react-icons/io5";
import { CheckCircleIcon,XCircleIcon } from "@heroicons/react/24/solid";
import { useState,useRef } from "react";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
const HorizontalScroller=({places}:{places:Array<place_types>})=>{
    const [state,setState] = useState([...places])
    const [scrollStart,setscrollStart] = useState(0)
    const scroller = useRef<any>();
    const scroll=(offset:number)=>{
        const newscrollStart = scrollStart+offset;
        if(newscrollStart < 0 || newscrollStart >= scroller.current.scrollWidth - 210){
            return
        }
        setscrollStart(newscrollStart)
        scroller.current.scrollLeft = newscrollStart
        
    }
    const onClick = (index:number,name:string,selected:boolean)=>{
        const newState = state.map((e,i)=>{
            if(i === index){
                return {
                    name:e.name,
                    selected:!e.selected
                }
            }else{
                return e
            }
        })
        setState(newState)
        const div = document.getElementById(name);
        if(selected){
            div!.style.display='none'
        }else{
            div!.style.display='block'
        }
    }
    return <div className="flex md:w-full md:mt-0 ">
        <div className="flex flex-col justify-center items-center">
            <IoIosArrowBack onClick={()=>{scroll(-164)}} className=" hover:cursor-pointer w-6 h-6 mr-2 bg-slate-200 rounded-md px-1 py-1 stroke-2 hover:bg-slate-400 transition-all duration-300"/>
        </div>
        <div ref={scroller} className=" py-3 w-full overflow-x-scroll no-scrollbar flex space-x-2 scroll-smooth ">
        {
            state.map((place,index)=>{
                return <div onClick={()=>{onClick(index,place.name,place.selected)}}
                 key={index} className={`hover:cursor-pointer flex rounded-lg px-1 py-1 ${place.selected ? "bg-green-300" : "bg-red-300 " } hover:opacity-80 transition-all duration-300`}>
                    {
                        place.name === "Restaurants" 
                        ? <BiRestaurant className="w-6 h-6"/>:
                        place.name === "Cafes"
                        ?<IoCafe className="w-6 h-6"/>:
                        place.name === "Lodgings"
                        ? <BiHotel className="w-6 h-6"/>:
                        place.name === "Stores"
                        ? <BiStore className="w-6 h-6"/>:
                        <BsBank className="w-6 h-6"/>
                    }   
                    <p className="mx-1">{place.name}</p>
                    {
                        place.selected ? <CheckCircleIcon className={` fill-green-400 w-6 h-6`}/>
                        : <XCircleIcon className=" fill-red-400 w-6 h-6 "/>
                    }
                    
                </div>
            })
        }
        </div>
        <div className="flex flex-col justify-center items-center ">
            <IoIosArrowForward onClick={()=>{scroll(164)}} className=" hover:cursor-pointer w-6 h-6 ml-2 bg-slate-200 rounded-md px-1 py-1 stroke-2 hover:bg-slate-400 transition-all duration-300"/>
        </div> 
    </div>
        
        
    
}
export default HorizontalScroller