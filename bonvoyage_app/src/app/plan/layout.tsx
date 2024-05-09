'use client'
import SideBar from "../ui/SideBar"
import '../globals.css'
import { useEffect,useState } from "react";
import { getProfile } from "../lib/GetUserData";
const Layout = ({children}:{children:React.ReactNode}) =>{
    const [profile,setProfile] = useState({
        username:"Loading...",
        description:"Loading..."
    })
    useEffect(()=>{
        const setname = async()=>{
            const newProfile = await getProfile()
            setProfile(newProfile)
        }
        setname();
    },[])
    
    return <div className="h-screen md:flex ">
        <SideBar username={profile.username}/>
        <div className="grow">{children}</div>
    </div>;
}
export default Layout