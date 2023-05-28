import React from "react"
import img from "../assets/react-icon-small.png";

export default function Navbar() {
    return (<nav className="navbar-items">
        <img src={img} alt="" />
        <h3>ReactFacts</h3>
        <h4>ReactProject - 1</h4>
    </nav>);
}