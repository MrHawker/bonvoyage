'use client'
import { APIProvider,Map,AdvancedMarker } from "@vis.gl/react-google-maps"
const GoogleMap=({position}:{position:any})=>{
    const hideSuggestionBox = ()=>{
        const useCurrentLocationPropmt = document.getElementById("CurrentLocationPrompt")
        useCurrentLocationPropmt!.style.display='none'
        const suggestionDiv = document.getElementById("suggestionsBox")
        suggestionDiv!.style.display='none'
    }
    return <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? ""}>
        <div className="w-full h-full">
            <Map
            onClick={hideSuggestionBox}
            id="GoogleMap"
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
            fullscreenControl={false} mapTypeControl={false} 
            defaultZoom={15} defaultCenter={position} viewState={{
                longitude: position.lng,
                latitude: position.lat,
                zoom: 15
            }}>
            <AdvancedMarker position={position}>
            </AdvancedMarker>
            </Map>
        </div>
    </APIProvider>
}
export default GoogleMap