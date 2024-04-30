import SideBar from "../ui/SideBar"
import '../globals.css'
const Layout = ({children}:{children:React.ReactNode}) =>{
    return <div className="h-screen flex">
        <SideBar/>
        <div className="grow">{children}</div>
    </div>;
}
export default Layout