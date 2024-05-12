'use client'
import { APIProvider,Map,AdvancedMarker,useMap,useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react";
const Direction =({position,destination}:{position:any,destination:string})=>{
    const map = useMap();
    const routeLib = useMapsLibrary("routes");
    const [dirSrv,setDirSrv] = useState<google.maps.DirectionsService>();
    const [dirRenderer,setDirRenderer] = useState<google.maps.DirectionsRenderer>();
    const [route,setRoute] = useState<google.maps.DirectionsRoute[]>([]);
    useEffect(()=>{
        if(!map || !routeLib){
            return;
        }
        else{
            setDirSrv(new routeLib.DirectionsService());
            setDirRenderer(new routeLib.DirectionsRenderer({map}));
        }
    },[routeLib,map])
    useEffect(()=>{
        if(!dirSrv || ! dirRenderer || destination == ""){
            return;
        }
        dirSrv.route({
            origin:`${position.lat},${position.lng}`,
            destination:destination,
            provideRouteAlternatives:true,
            travelMode:google.maps.TravelMode.WALKING
        }).then(res=>{
            dirRenderer.setDirections(res);
            setRoute(res.routes);
        }).catch(()=>{})
    },[dirSrv,dirRenderer,destination])
    return null;
}
const GoogleMap=({position,destination}:{position:any,destination:string})=>{
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
            <Direction position={position} destination={destination}/>
            </Map>
        </div>
    </APIProvider>
}
export default GoogleMap