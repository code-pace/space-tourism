import React, {useState, useEffect} from 'react'
import europa from './assets/destination/image-europa.png'
import mars from './assets/destination/image-mars.png'
import titan from './assets/destination/image-titan.png'
import moon from './assets/destination/image-moon.png'

const Destination = ({data}) => {
    const [ImgSrc, setImgSrc] = useState(titan);
    const [content, setContent] = useState(data[0]);

    useEffect(()=>{
        switch(content.name) {
            case "Mars":
                setImgSrc(mars)
            break
            case "Europa":
                setImgSrc(europa)
            break
            case "Titan":
                setImgSrc(titan)
            break
            case "Moon":
                setImgSrc(moon)
            break
            default: 
                setImgSrc(moon)
            break;
        }
    }, [content]);
    const changeImageContent =(name)=> {
        let _content = data.filter(data => data.name === name).pop();
        setContent(_content);
    }

    return (
        <div className="space destination" >
            <div className="dest-page">
                <div className="label">
                    <h5>01</h5>
                    <h5>PICK YOUR DESTINATION</h5>
                </div>
                <img src={ImgSrc} alt="destination" className="dest-image"/>
            </div>
            <div className="dest-text">
                <div className="terrestial-body">
                    {data.map((data, id) => {
                        const {name} = data;
                        return (
                            <div className="terrestial-list" key={id} onClick={()=>changeImageContent(name)}>
                                {name.toUpperCase()}
                                <span className={`${name === content.name?"select":""}`}></span>
                            </div>
                        )
                    })}
                </div>
                <div className="hero-text text-v">
                    <h1>
                        {content.name.toUpperCase()}
                    </h1>
                    <p className="dest-desc">
                        {content.description}
                    </p>
                
                    <div className="property">
                        <div className="distance">
                            <p>AVG. DISTANCE</p>
                            <p>{content.distance.toUpperCase()}</p>
                        </div>
                        <div className="distance">
                            <p>EST. TRAVEL TIME</p>
                            <p>{content.travel.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
