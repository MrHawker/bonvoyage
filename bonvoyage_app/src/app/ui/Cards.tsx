import { place_info } from "../lib/DataType"
import { StarIcon } from "@heroicons/react/24/outline"
import { IconBase } from "react-icons"
import { saveToHistory } from "../lib/SaveAndGetHistory"
const Card =({place,setDestination,type}:{place:place_info,setDestination:any,type:string})=>{
    const onClick = (e:any)=>{
        saveToHistory(place.name,place.vicinity,type);
        setDestination(place.vicinity)
        const siblings = Array.from(document.getElementsByClassName("placeCard"));
        siblings.forEach(function(element:any) {
            element.style.backgroundColor = 'white';
        });
        e.currentTarget.style.backgroundColor = '#70cee6';
    }
    return <div
    onClick={(e)=>onClick(e)}
    className="placeCard px-2 bg-white my-2 py-2 hover:cursor-pointer transition duration-300">
        <p>Name: {place.name}</p>
        <div className="flex">
            <p>Rating: {place.rating}</p>
            <StarIcon fill="yellow" className="w-4"/>
        </div>
        <p>Address: {place.vicinity}</p>
    </div>
}
const Cards=({places,setDestination,type,icon}:{places:Array<place_info>,setDestination:any,type:string,icon:any})=>{
    
    return <div id={type}>
        <div className="flex">
            <IconBase className=" text-2xl">{icon}</IconBase>
            <p className="pl-2 font-bold text-lg">{type}</p>
        </div>
        
        {
            places.map((place,index)=>{
                return <Card type={type} setDestination={setDestination} key={index} place={place}/>
            })
        }
    </div>
    
}
export default Cards