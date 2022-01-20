import React, {useState, useEffect} from 'react'

// import of the image file for the technology component
import launchVehicle from "./assets/technology/image-launch-vehicle-landscape.jpg"
import spaceCapsule from "./assets/technology/image-space-capsule-landscape.jpg"
import spacePort from "./assets/technology/image-spaceport-landscape.jpg"
import launchVehicleMobile from "./assets/technology/image-launch-vehicle-portrait.jpg"
import spaceCapsuleMobile from "./assets/technology/image-space-capsule-portrait.jpg"
import spacePortMobile from "./assets/technology/image-spaceport-portrait.jpg"

const Technology = ({data}) => {
    const spaceImageLandscape = [launchVehicle, spacePort, spaceCapsule];
    const spaceImagePortrait = [launchVehicleMobile, spacePortMobile, spaceCapsuleMobile]
    
    const [screen, setScreen] = useState(window.innerWidth)
    screen >= 1000 ? data.forEach((value, index) => {
        value.images = spaceImagePortrait[index];
    }) : data.forEach((value, index) => {
        value.images = spaceImageLandscape[index];
    })
    console.log(screen)
    const setScreenImg =()=> {
        setScreen(window.innerWidth)
    }
    
    useEffect(()=> {
        window.addEventListener("resize", setScreenImg)
        if(screen >= 1000) {
            data.forEach((value, index) => {
                value.images = spaceImagePortrait[index];
            })
        }
        else {
            data.forEach((value, index) => {
                value.images = spaceImageLandscape[index];
            })
        }
        return ()=> window.removeEventListener('resize', setScreenImg);
    })
    const [tech, setTech] = useState(data[0])
    console.log(tech)
    return (
        <div className="space technology">
            <div className="label">
                <h5>03</h5>
                <h5>SPACE LAUNCH 101</h5>
            </div>
            <div className="main-tech">
            <div className="tech-text">
                <div className="txt-container">
                    <div className="tech-btn">
                        {data.map((btn, id) => (
                            <button key={id} onClick={()=>setTech(data[id])} className={`${tech.name === btn.name?"select":""}`}>{`${id + 1}`}</button>
                        ))}
                    </div>
                    <div className="txt">
                        <h5>THE TERMINOLOGY...</h5>
                        <h1>{tech.name}</h1>
                        <p>{tech.description}</p>
                    </div>
                </div>
            </div>
            <div className="tech-img">
                <img src={tech.images} alt={tech.name} />
            </div>
            </div>
            
        </div>
    )
}

export default Technology
