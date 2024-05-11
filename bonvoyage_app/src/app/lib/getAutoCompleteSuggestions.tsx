import axios from "axios";
const getAutoCompleteSuggestions= async(query:string)=>{
    const suggestions = await axios.post('http://localhost:5000/api/getPlacesSuggestions',{
        'query':query
    })
    const suggestion_place_id = await suggestions.data.predictions.map((e:any)=>{
        return e.place_id
    })
    const suggestions_description = Promise.all(suggestion_place_id.map(async(e:string)=>{
        const data = await axios.post('http://localhost:5000/api/getPlaceDetails',{
            'placeId':e
        })
        return {
            address:data.data.result.formatted_address,
            name:data.data.result.name,
            place_id:e
        }
    }))
    return suggestions_description
}
const getPlaceLngLat= async(placeId:string)=>{
    const result = await axios.post('http://localhost:5000/api/getPlaceDetails',{
        'placeId':placeId
    })
    const geocode = {
        lat:result.data.result.geometry.location.lat,
        lng:result.data.result.geometry.location.lng,
    }
    return geocode
}
const getNearbyPointOfInterest= async(lat:number,lng:number,type:string)=>{
    const result = await axios.post('http://localhost:5000/api/getPointOfInterests',{
        'lat':lat,
        'lng':lng,
        'type':type
    })
    // console.log(result.data)
    return result.data
}
export {
    getAutoCompleteSuggestions,
    getPlaceLngLat,
    getNearbyPointOfInterest,
}