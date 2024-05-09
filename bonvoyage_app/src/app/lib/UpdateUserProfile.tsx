import axios from "axios";
const UpdateProfile = async(username:String,description:String) =>{
    const googleId = await axios.get('http://localhost:4000/api/users/googleId', { withCredentials: true,
    transformResponse: (res) => {
        return res;
    }}).catch(()=>{});
    if(googleId != null){
        axios.put("http://localhost:4001/api/updateUserProfile",{
        googleId:googleId.data,
        username:username,
        description:description
    }).catch()
    }
    
}
export default UpdateProfile