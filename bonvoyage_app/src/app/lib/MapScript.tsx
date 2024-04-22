function CountryHover(event:any,setFlag:any){
    const country = event.target.className.baseVal
    setFlag(country);
}
export {CountryHover as CountryHover};