import { googleMapSuggestion } from "../lib/DataType"
import { getPlaceLngLat,getNearbyPointOfInterest } from "../lib/getAutoCompleteSuggestions"
const AutoCompleteCard =({suggestion,setPosition}:{suggestion:googleMapSuggestion,setPosition:any})=>{
    const {name,address} = suggestion
    const {place_id} = suggestion
    const onClick = async(place_id:string)=>{
        const useCurrentLocationPropmt = document.getElementById("CurrentLocationPrompt")
        useCurrentLocationPropmt!.style.display='none'
        const suggestionDiv = document.getElementById("suggestionsBox")
        suggestionDiv!.style.display='none'
        const geocode = await getPlaceLngLat(place_id)
        setPosition(geocode)
    }
    return <div onClick={()=>{onClick(place_id)}}
    className="w-full flex flex-col px-3
    border-b bg-white hover:bg-slate-400 transition duration-300 hover:cursor-pointer">
        <p className="font-bold text-base">
            {name}
        </p>
        <p className=" text-sm">
            {address}
        </p>
    </div>
}
const AutoCompleteCards=({suggestions,setPosition}:{suggestions:Array<googleMapSuggestion>,setPosition:any})=>{
    return <div className="hidden" id="suggestionsBox">
        {
            suggestions.map((suggestion:googleMapSuggestion,index:number)=>{
                return <AutoCompleteCard setPosition={setPosition} key={index} suggestion={suggestion}/>
            })
        }
    </div> 
    
}
export default AutoCompleteCards