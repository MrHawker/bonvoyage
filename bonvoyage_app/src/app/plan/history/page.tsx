import Histories from '@/app/ui/Histories';
import '../../globals.css'
import SearchBar from '@/app/ui/SearchBar';
import PageNav from '@/app/ui/PageNav';

const Page = ({searchParams}: {searchParams: {query:string,page: string}}) =>{
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    return <div className="bg-teal-50 h-screen px-4 pt-8 py-4 ">
        <div className=' h-full bg-emerald-300 bg-opacity-40 rounded-lg px-4 flex-col flex'>
            <h1 className=' text-3xl font-bold pt-6 pl-6 w-fit'>
                Your History
            </h1>
            <SearchBar/>
            <div className="block h-10"></div>
            <Histories query={query} currentPage={currentPage}/>
            <PageNav num={7}/>
        </div>
        
    </div>
}
export default Page;