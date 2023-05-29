import React from "react"
import img from "../assets/react-icon-small.png";

// import {} from '@emotion/react/'



 function Navbar(Props) {

    return (
        <nav className={Props.dark ? "navbar-items-dark": "navbar-items"} >
        <img src={img} alt="" />
        <h3>ReactFacts</h3>
        <h4>ReactProject - 1</h4>
        <div className="navbar__toggle">
            <div className="toggle">
                {/* <p  onClick={Props.onToggle}>Toggle</p> */}
                <img src={img} onClick={Props.onToggle} className={Props.dark ? "imgDark": ""}/>
                {/* <p  onClick={Props.onToggle} className="dark">Dark</p> */}
            </div>
        </div>
        
    </nav>);
}

export default Navbar;