import React, {useState} from 'react'

const NavList = ({items, id, Link, isMenuOpen, setIsMenuOpen}) => {
    const [navigate, setNavigate] = useState(false)
    console.log(items)
    return (
        <React.Fragment>
            <Link  onClick={()=>setIsMenuOpen(!isMenuOpen)} to={`/${items}`} className={`nav-list ${navigate?"nav-hover":""}`} key={id}   onMouseEnter={()=> setNavigate(true)} onMouseLeave={()=> setNavigate(false)}>
                <span className='bold'>{`0${id + 1}`}</span> {items.toUpperCase()}
            </Link>
        </React.Fragment>
    )
}

export default NavList
