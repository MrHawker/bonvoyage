const CountryTag = ({flag,tagX,tagY}:{flag:any,tagX:any,tagY:any})=>{
    if(flag){
        const left = tagX+20
        const top = tagY-30
        return <div className='rounded-md border-black bg-white text-black px-4' style={{position:'absolute', top:top,left:left}}>
            <span>{flag}</span>
        </div>
    }
    return <div></div>
}
export default CountryTag