import React from "react"


function Main(Props) {
    return (
        <div className={Props.dark ? "bodyContentDark": "bodyContentWhite"}>
            <h1 className="heading">Fun Facts about react</h1>
            <ul className="lists">
                <li >Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

export default Main;