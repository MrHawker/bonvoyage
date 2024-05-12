'use client'
import Records from "./Records"
import {history_record} from '@/app/lib/DataType';
import { getHistories } from "../lib/SaveAndGetHistory";
import { useEffect, useState } from "react";
const Histories=({query,currentPage}:{query:string,currentPage:Number})=>{
    const [history,setHistory] = useState<Array<history_record>>([]);
    useEffect(()=>{
        const getRecords = async()=>{
            const result = await getHistories();
            setHistory(result);
        }
        getRecords()
    },[])
    
    return <table className="table w-full border-separate border-spacing-y-3">
        <thead className='bg-slate-200 hover:bg-slate-400 transition duration-300 hover:cursor-pointer'>
            <tr>
                <th scope="col" className="px-1 font-bold text-md rounded-l-lg">Date</th>
                <th scope="col" className="px-1 font-bold text-md">Destination</th>
                <th scope="col" className="px-1 font-bold text-md">Address</th>
                <th scope="col" className="px-1 font-bold text-md">Type</th>
                <th scope="col" className="px-1 font-bold text-md rounded-r-lg">Action</th>
            </tr>
        </thead>
        <tbody className="my-2 px-4 w-full">
            <Records setHistory={setHistory} records={history}/>
        </tbody>
    </table>
}
export default Histories