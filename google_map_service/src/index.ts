import express from 'express'
require('dotenv').config()
import {json} from 'body-parser'
import cors from 'cors'
import axios from 'axios'
const app=express()
app.use(json())
app.use(cors())
app.post('/api/getPlacesSuggestions',async(req,res)=>{
    const {query} = req.body
    if(!query){
        res.status(400).send("Invalid request")
        return
    }
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${process.env['GOOGLE_MAP_API_KEY']}`;
    const suggestions = await axios.get(url)
    res.send(suggestions.data)
})
app.post('/api/getPlaceDetails',async(req,res)=>{
    const {placeId} = req.body
    if(!placeId){
        res.status(400).send("Invalid request")
        return
    }
    const url =`https://maps.googleapis.com/maps/api/place/details/json?fields=formatted_address,name,geometry&place_id=${placeId}&fields=geometry&key=${process.env['GOOGLE_MAP_API_KEY']}`
    const result = await axios.get(url)
    res.send(result.data)
})
app.post('/api/getPointOfInterests',async(req,res)=>{
    const {lat,lng,type} = req.body
    if(!lat || !lng || !type){
        res.status(400).send("Invalid request")
        return
    }
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=${type}&key=${process.env['GOOGLE_MAP_API_KEY']}`
    const result = await axios.get(url)
    const places = []
    for (let index = 0; index < result.data.results.length; index++) {
        const element = result.data.results[index];
        if(element.business_status === "OPERATIONAL"){
            places.push({
                location:element.geometry.location,
                name:element.name,
                opening_hours:element.current_opening_hours,
                price_level:element.price_level,
                rating:element.rating,
                vicinity:element.vicinity,
            })
        }
    }
    res.send(places)
})
app.listen(5000,()=>{
    console.log("map service listening on port 5000")
})