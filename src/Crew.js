import React, {useState, useEffect} from 'react'
import anousheh from "./assets/crew/image-anousheh-ansari.png"
import douglas from "./assets/crew/image-douglas-hurley.png"
import mark from "./assets/crew/image-mark-shuttleworth.png"
import victor from "./assets/crew/image-victor-glover.png"
import CrewBtns from './CrewBtns'


const Crew = ({data}) => {
    // Assign Array of imported image file to crewImage variable
    const crewImage = [douglas, mark, victor, anousheh];
    // Iterate the data Array while parsing the crewImage props to the data images property
    data.forEach((value, index) => {
        value.images = crewImage[index];
    })
    const [content, setContent] = useState(data);
    const [timing, setTiming] = useState(0);
    const [content_, setContent_] = useState(content[timing]);
    useEffect(()=>{
        let interval = setInterval(()=>{
            if(timing < content.length - 1) {
                setTiming(timing + 1);
            }
            else{
                setTiming(0)
            }
        }, 8000);
        return ()=> clearInterval(interval);
    })
    useEffect(()=> {
        setContent_(content[timing]);
    }, [timing]);
    let {name, bio, role, images} = content_;

    return (
        <div className="space crew">
            <div className="label">
                <h5>02</h5>
                <h5>MEET YOUR CREW</h5>
            </div>
            <div className="crew-slide">
                <img className="crew-image" src={images} alt={name} />
            </div>
            <div className="crew-info">
                <div className="btn-col">
                    {content.map((value, id) => {
                        return (
                            <CrewBtns setTiming={setTiming} id={id} key={id} name={name} value={value}/>
                        )
                        })}
                    </div>
                    <div className="crew-property">
                    <h5>{role.toUpperCase()}</h5>
                    <h1>{name.toUpperCase()}</h1>
                    <p>{bio}</p>
                    </div>
                </div>
        </div>
    )
}

export default Crew
