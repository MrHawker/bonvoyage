
import Records from '@/app/ui/records';
import '../../globals.css'
import SearchBar from '@/app/ui/SearchBar';
import history_record from '@/app/lib/DataType';
const t1 : history_record ={
        date:"14-02-2004",
        destination:"market",
        city:"bac lieu",
        type:"grocery",
}
const history : history_record[] = [
    t1,t1,t1
]
const Page = () =>{
    return <div className="grow bg-teal-50 h-screen px-4 pt-8 py-4">
        <div className='grow h-full bg-emerald-300 bg-opacity-40 rounded-lg px-4'>
            <h1 className=' text-3xl font-bold pt-6 pl-6 w-fit'>
                Your History
            </h1>
            <SearchBar/>
            <div className="block h-10"></div>
            <table className="table w-full border-separate border-spacing-y-3">
                <thead className='bg-slate-200 hover:bg-slate-400 transition duration-300 hover:cursor-pointer'>
                    <tr>
                        <th scope="col" className=" w-fit px-2 font-bold text-md rounded-l-lg">Date</th>
                        <th scope="col" className=" w-fit px-2 font-bold text-md">Destination</th>
                        <th scope="col" className=" w-fit px-2 font-bold text-md">City</th>
                        <th scope="col" className=" w-fit px-2 font-bold text-md">Type</th>
                        <th scope="col" className=" w-fit px-2 font-bold text-md rounded-r-lg">Action</th>
                    </tr>
                </thead>
                <tbody className="my-2 px-4 w-full">
                    <Records records={history}/>
                </tbody>
            </table>
            
        </div>
    </div>
}
export default Page;