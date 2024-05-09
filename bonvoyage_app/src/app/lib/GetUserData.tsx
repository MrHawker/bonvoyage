import axios from 'axios'
const getProfile = async()=>{
    try {
        const googleId = await axios.get('http://localhost:4000/api/users/googleId', { withCredentials: true,
        transformResponse: (res) => {
            return res;
        }});
        const result = await axios.post('http://localhost:4001/api/getUserProfile',{
            googleId:googleId.data
        })
        return {
            username:result.data.username,
            description:result.data.description
        }
    } catch (error) {
        return {
            username:"Anon",
            description:"I love hiking! Add me when networking feature is available!"
        };
    }
}
export {getProfile as getProfile}