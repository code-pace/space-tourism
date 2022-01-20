import React, {useState} from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.svg"
import NavList from './NavList'

const Navbar = ({data}) => {
    const [navigate, setNavigate] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log(data)
    
    return (
        <nav className="navbar">
            <img src={logo} alt="space-tourism" className="logo"/>
            <span className="nav-line"></span>
            
            <div className={`holdLink ${isMenuOpen? "holdLinks": ""}`}>
                <button className="hamburger-btn" onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>}
                </button>
                <div className={`link ${isMenuOpen? 'links': ''}`}>
                    <Link onClick={()=>setIsMenuOpen(!isMenuOpen)} to="/" className={`nav-list ${navigate ? "nav-hover" : ""}`} onMouseEnter={()=> setNavigate(true)} onMouseLeave={()=> setNavigate(false)}>
                    <span className="bold">00</span> HOME
                    </Link>
                    {Object.keys(data).map((items, id) => {
                    return (
                        <NavList isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} items={items} key={id} id={id} Link={Link} />
                    )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
