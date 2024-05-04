import Records from "./Records"
import {history_record} from '@/app/lib/DataType';
const t1 : history_record ={
    date:"14-02-2004",
    destination:"market",
    city:"bac lieu",
    type:"grocery",
}
const history : history_record[] = [
t1,t1,t1
]
const Histories=({query,currentPage}:{query:string,currentPage:Number})=>{
    // const history = fetchHistories()
    return <table className="table w-full border-separate border-spacing-y-3">
        <thead className='bg-slate-200 hover:bg-slate-400 transition duration-300 hover:cursor-pointer'>
            <tr>
                <th scope="col" className="px-1 font-bold text-md rounded-l-lg">Date</th>
                <th scope="col" className="px-1 font-bold text-md">Destination</th>
                <th scope="col" className="px-1 font-bold text-md">City</th>
                <th scope="col" className="px-1 font-bold text-md">Type</th>
                <th scope="col" className="px-1 font-bold text-md rounded-r-lg">Action</th>
            </tr>
        </thead>
        <tbody className="my-2 px-4 w-full">
            <Records records={history}/>
        </tbody>
    </table>
}
export default Histories