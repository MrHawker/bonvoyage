'use client'
import { useRef,useEffect} from "react"
const Plane = () =>{
    const reference = useRef<any>();
    const lastVisited = useRef({x:0,y:0})
    useEffect(()=>{
        const plane = document.getElementById("plane")
        plane?.setAttributeNS(null,"d","M 54,6 H 42 L 26,30 H 18 L 24,6 H 10 L 6,14 H -2 L 2,0 -2,-14 H 6 L 10,-6 H 24 L 18,-30 H 26 L 42,-6 H 54 C 66,-6 66,6 54,6 Z")
        const animate = document.getElementById("anim")
        const path = document.getElementById("basePath")
        const countries = Array.from(document.getElementsByTagName("path")).slice(0,-1)
        const src = countries[Math.floor(Math.random()*countries.length)]
        const des = countries[Math.floor(Math.random()*countries.length)]
        const b1 = src.getBBox()
        const b2 = des.getBBox()
        const startX = b1.x + b1.width/2
        const startY = b1.y + b1.height/2 
        const endX = b2.x + b2.width/2
        const endY = b2.y + b2.height/2
        const ry = Math.sqrt((startX-endX)*(startX-endX) + (startY-endY)*(startY-endY)) *2
        const rx = ry/2 
        const newpath = `M ${startX},${startY} A ${rx} ${ry} 0 0 1 ${endX},${endY}`
        path?.setAttributeNS(null,"d",newpath)
        const motionPath = document.getElementById("planepath")
        motionPath?.setAttributeNS(null,"from",`0,${reference.current.getTotalLength()}`)
        motionPath?.setAttributeNS(null,"to",`${reference.current.getTotalLength()},0`)
        const c1 = document.getElementById("source")
        const c2 = document.getElementById("destination")
        c1?.setAttributeNS(null,"cx",`${startX}`)
        c1?.setAttributeNS(null,"cy",`${startY}`)
        c1?.setAttributeNS(null,"r","8")
        c2?.setAttributeNS(null,"cx",`${endX}`)
        c2?.setAttributeNS(null,"cy",`${endY}`)
        c2?.setAttributeNS(null,"r","8")
        lastVisited.current.x = endX
        lastVisited.current.y = endY
        animate?.addEventListener("endEvent",()=>{
            const countries = Array.from(document.getElementsByTagName("path")).slice(0,-1)
            const src = countries[Math.floor(Math.random()*countries.length)]
            const b1 = src.getBBox()
            const endX = b1.x + b1.width/2
            const endY = b1.y + b1.height/2 
            const ry = Math.sqrt((lastVisited.current.x-endX)*(lastVisited.current.x-endX) + (lastVisited.current.y-endY)*(lastVisited.current.y-endY)) *2
            const rx = ry/2 
            const newpath = `M ${lastVisited.current.x},${lastVisited.current.y} A ${rx} ${ry} 0 0 1 ${endX},${endY}`
            path?.setAttributeNS(null,"d",newpath)
            const animate = document.getElementById("planepath")
            animate?.setAttributeNS(null,"from",`0,${reference.current.getTotalLength()}`)
            animate?.setAttributeNS(null,"to",`${reference.current.getTotalLength()},0`)
            const c1 = document.getElementById("source")
            const c2 = document.getElementById("destination")
            c1?.setAttributeNS(null,"cx",`${lastVisited.current.x}`)
            c1?.setAttributeNS(null,"cy",`${lastVisited.current.y}`)
            c2?.setAttributeNS(null,"cx",`${endX}`)
            c2?.setAttributeNS(null,"cy",`${endY}`)
            lastVisited.current.x = endX
            lastVisited.current.y = endY
        })
    },[])
    return <>
        <defs>
            <path ref={reference} id="basePath" d="M 0,0"/>
            <mask id="mask">
                <use xlinkHref="#basePath" strokeWidth="3" stroke="white"
                    strokeDasharray="1000,0" fill="none" >
                    <animate id="planepath" attributeName="stroke-dasharray" 
                        begin="0;planepath.end" dur="3s" fill="freeze" />
                </use>
            </mask>
        </defs>
        <circle id="source" fill="grey" />
        <circle id="destination" fill="grey" />
        <use xlinkHref="#basePath" strokeWidth="5" strokeDasharray="10"
            stroke="grey" fill="none" mask="url(#mask)"/>
        <path id="plane"
            fill="yellow" stroke="black" strokeWidth="3">
            <animateMotion id="anim" rotate="auto" begin="0;planepath.end" dur="3s" fill="freeze" >
                <mpath xlinkHref="#basePath" fill="freeze" />
            </animateMotion>
        </path>
    </>
}
export default Plane