export interface history_record {
    _id:string,
    date: string;
    destination: string;
    address: string;
    type: string;
}
export interface place_types{
    name:string,
    selected:boolean
}
export interface place_info{
    location:any,
    name:any,
    opening_hours:any,
    price_level:any,
    rating:any,
    vicinity:string,
}
export interface googleMapSuggestion{
    place_id:string,
    name:string,
    address:string
}
