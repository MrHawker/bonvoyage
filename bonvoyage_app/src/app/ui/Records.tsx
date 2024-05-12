'use client'
import { BiDotsVerticalRounded } from "react-icons/bi"
import {history_record} from "../lib/DataType"
import { useState } from "react"
import { deleteRecordById } from "../lib/SaveAndGetHistory"

const Record = ({record,deleteRecord}:{record:history_record,deleteRecord:any})=>{
    const [displayAction,setdisplayAction] = useState(false)
    const [location,setLocation] = useState({
        x:0,
        y:0
    })
    const onClick=(e:any) =>{
        setdisplayAction(true)
        setLocation({
            x:e.clientX,
            y:e.clientY
        })
    }
    
    return <tr
    className=" hover:cursor-pointer w-full hover:shadow-2xl justify-between  bg-slate-50 hover:bg-slate-100 transition duration-300 ">
            <td className=" py-3 px-2 text-center rounded-l-lg">
                <p className="text-semibold">{record.date}</p>
            </td>
            <td className=" py-3 px-2 text-center">
                <p className="text-semibold">{record.destination} </p>
            </td>
            <td className=" py-3 px-2 text-center">
                <p className="text-semibold">{record.address}</p>
            </td>
            <td className=" py-3 px-2 text-center ">
                <p className="text-semibold">{record.type}</p>
            </td>
            <td className=" py-3 px-2 rounded-r-lg">
                <div 
                 className=" h-full w-full flex justify-center items-center ">
                    <BiDotsVerticalRounded onClick={onClick}
                 className="h-8 w-8 rounded-full hover:bg-slate-300 transition duration-300 px-1 py-1"/>
                </div>
                {
                    displayAction && <div onMouseLeave={()=>setdisplayAction(false)} className=" rounded-md bg-slate-200  " style={{position:'absolute', top:location.y-15,left:location.x-30}}>
                        <p onClick={() => deleteRecord(record)} className=" text-red-600 px-4 py-2  hover:bg-slate-400 transition duration-300">Delete</p>
                        <p className="px-4 py-2 hover:bg-slate-400 transition duration-300">Copy link</p>
                    </div>
                }
            </td>
    </tr>
}
const Records = ({records,setHistory}:{records:Array<history_record>,setHistory:any}) =>{
    const deleteRecord=(record:history_record)=>{
        setHistory((records:Array<history_record>) => 
            records.filter((differentRecord:history_record) => differentRecord !== record))
        deleteRecordById(record._id)
    }
    return <>
        {
            records.map((record,index) =>{
                return <Record deleteRecord={deleteRecord} key={index} record={record} />
            })
        }
    </>
}
export default Records