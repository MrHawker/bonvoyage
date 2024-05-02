import { BiDotsVerticalRounded } from "react-icons/bi"
import history_record from "../lib/DataType"

const Record = ({record}:{record:history_record})=>{
    return <tr
    className=" w-full hover:shadow-2xl justify-between  bg-slate-50 hover:bg-slate-100 transition duration-300 ">
            <td className=" py-3 px-2 text-center rounded-l-lg">
                <p className="text-semibold">{record.date}</p>
            </td>
            <td className=" py-3 px-2 text-center">
                <p className="text-semibold">{record.destination} </p>
            </td>
            <td className=" py-3 px-2 text-center">
                <p className="text-semibold">{record.city}</p>
            </td>
            <td className=" py-3 px-2 text-center ">
                <p className="text-semibold">{record.type}</p>
            </td>
            <td className=" py-3 px-2 rounded-r-lg">
                <div className=" h-full w-full flex justify-center items-center ">
                    <BiDotsVerticalRounded className="h-8"/>
                </div>
            </td>
    </tr>
}
const Records = ({records}:{records:Array<history_record>}) =>{
    return <>
        {
            records.map((record,index) =>{
                return <Record key={index} record={record} />
            })
        }
    </>
}
export default Records