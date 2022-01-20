import React, {useState} from 'react'

const Home = () => {
    const [hovered, setHovered] = useState(false);
    
    return (
        <div className="space home">
            <div className="hero">
                <div className="hero-text">
                    <h5>
                        SO, YOU WANT TO TRAVEL TO SPACE
                    </h5>
                    <h1>
                        SPACE
                    </h1>
                    <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="explore">
                    <div className={`explore-btn ${hovered ? "hovered" : ""}`}>
                        <div className="inner-explore-btn" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>EXPLORE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
