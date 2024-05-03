'use client'
import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
const PageNav = ({num}:{num:number})=>{
    const params = useSearchParams();
    const pathname = usePathname()
    const {replace} =  useRouter()
    const currentPage = Number(params.get('page')) || 1;
    const onClick = (page_num:string) =>{
        const new_params = new URLSearchParams(params)
        page_num ? new_params.set("page",page_num) : new_params.delete("page")
        replace(`${pathname}?${new_params.toString()}`);
    }
    if(num - currentPage < 4){
        const arr = []
        for (let index = num-5; index < num; index++) {
            arr.push(index+1)
        }
        return <div className=" mt-auto h-8 mb-4 flex justify-center  ">
            <div onClick={()=>{onClick((currentPage-1).toString())}}  className=" rounded-lg w-fit h-fit px-3 py-1 hover:bg-green-700 hover:cursor-pointer flex justify-center items-center">
                <FaArrowLeft className="h-6"/>
            </div>
            {
                arr.map(e=>{
                    return <div onClick={(e:any)=>{onClick(e.target.innerText)}} key={e} className={`w-fit h-fit px-3 py-1 hover:bg-green-700 hover:cursor-pointer
                    rounded-md mx-1
                    
                    ${e === currentPage ? " bg-green-700" : "bg-white"} `}>
                        <p>{e}</p>
                    </div>
                })
            }
            <div onClick={()=>{onClick((currentPage+1).toString())}}  className=" rounded-lg w-fit h-fit px-3 py-1 hover:bg-green-700 hover:cursor-pointer flex justify-center items-center">
                <FaArrowRight className="h-6"/>
            </div>
        </div>
    }
    if(num - currentPage ==4){
        const arr = []
        for (let index = currentPage-1; index < num; index++) {
            arr.push(index+1)
        }
        return <div className=" mt-auto h-8 mb-4 flex justify-center  ">
            <div onClick={()=>{onClick((currentPage-1).toString())}} className=" rounded-lg w-fit h-fit px-3 py-1 hover:bg-green-700 hover:cursor-pointer flex justify-center items-center">
                <FaArrowLeft className="h-6"/>
            </div>
            {
                arr.map(e=>{
                    return <div onClick={(e:any)=>{onClick(e.target.innerText)}} key={e} className={`w-fit h-fit px-3 py-1 hover:bg-green-700 hover:cursor-pointer
                    rounded-md mx-1
                    
                    ${e === currentPage ? " bg-green-700" : "bg-white"} `}>
                        <p>{e}</p>
                    </div>
                })
            }
            <div onClick={()=>{onClick((currentPage+1).toString())}}  className=" rounded-lg w-fit h-fit px-3 py-1 hover:bg-green-700 hover:cursor-pointer flex justify-center items-center">
                <FaArrowRight className="h-6"/>
            </div>
        </div>
    }
    return <div className=" mt-auto h-8 mb-4 flex justify-center space-x-1  ">
        <div onClick={()=>{onClick((currentPage-1).toString())}}  className=" rounded-lg w-fit h-fit px-3 py-1 hover:bg-green-700 hover:cursor-pointer flex justify-center items-center">
            <FaArrowLeft className="h-6"/>
        </div>
        <div onClick={(e:any)=>{onClick(e.target.innerText)}}  className={`w-fit h-fit px-3 py-1 rounded-md bg-green-700 `}>
            <p>{currentPage}</p>
        </div>
        <div onClick={(e:any)=>{onClick(e.target.innerText)}}  className={`w-fit h-fit px-3 py-1 rounded-md  bg-white hover:bg-green-700 hover:cursor-pointer`}>
            <p>{currentPage+1}</p>
        </div>
        <div  className={`w-fit h-fit px-3 py-1 rounded-md  bg-white `}>
            <p>...</p>
        </div>
        <div onClick={(e:any)=>{onClick(e.target.innerText)}}  className={`w-fit h-fit px-3 py-1 rounded-md  bg-white hover:bg-green-700 hover:cursor-pointer `}>
            <p>{num-1}</p>
        </div>
        <div onClick={(e:any)=>{onClick(e.target.innerText)}}  className={`w-fit h-fit px-3 py-1 rounded-md hover:bg-green-700  bg-white hover:cursor-pointer`}>
            <p>{num}</p>
        </div>
        <div onClick={()=>{onClick((currentPage+1).toString())}} className=" rounded-lg w-fit h-fit px-3 py-1 hover:bg-green-700 hover:cursor-pointer flex justify-center items-center">
                <FaArrowRight className="h-6"/>
        </div>
    </div>
}
export default PageNav