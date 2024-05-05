import { place_info } from "../lib/DataType"
const Card =({place}:{place:place_info})=>{
    return <div>
        
    </div>
}
const Cards=({places}:{places:Array<place_info>})=>{
    {
        places.map((place,index)=>{
            return <Card key={index} place={place}/>
        })
    }
}
export default Cards