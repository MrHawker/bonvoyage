export interface history_record {
    date: string;
    destination: string;
    city: string;
    type: string;
}
export interface place_types{
    name:string,
    selected:boolean
}
export interface place_info{
    name:string,
    imgUrl:string,
    description:string,
}
export interface googleMapSuggestion{
    
    place_id:string,
    name:string,
    address:string
}
