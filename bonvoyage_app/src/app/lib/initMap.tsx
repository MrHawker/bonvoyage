const initMap = (setPosition:any)=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            setPosition({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
        
        })
    }
}
export default initMap