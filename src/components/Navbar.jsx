import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo"> Smile</div>
            <div className="donate-btn"> <img src="https://i1.wp.com/www.hydesquare.org/wp-content/uploads/Blue-Donate-Button-Small.png?resize=191%2C98" alt="donate button" /></div>
            <div className="hamb-menu"> Menu</div>
        </div>
    )
}

export default Navbar
