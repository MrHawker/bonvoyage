import axios from "axios";
const saveToHistory= async(destination:String,address:String,type:String)=>{
    const googleId = await axios.get('http://localhost:4000/api/users/googleId', { withCredentials: true,
        transformResponse: (res) => {
            return res;
    }});
    await axios.post('http://localhost:4002/api/addRecord',{
        googleId:googleId.data,
        destination:destination,
        address:address,
        type:type,
    }).catch((err)=>{console.log(err)});
}
const getHistories = async()=>{
    const googleId = await axios.get('http://localhost:4000/api/users/googleId', { withCredentials: true,
        transformResponse: (res) => {
            return res;
    }});
    const result = await axios.post('http://localhost:4002/api/getRecords',{
        googleId:googleId.data
    })
    return result.data
}
const deleteRecordById = async(recordId:string)=>{
    await axios.post('http://localhost:4002/api/deleteRecord',{
        recordId:recordId
    }).catch((err)=>{console.log(err)});
}
export {
    saveToHistory,
    getHistories,
    deleteRecordById
}