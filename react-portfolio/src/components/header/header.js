import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./header.css";

const header = () => {
    const [show, setShow] = useState(false)

    return (
        <header>
            <div className="header">

                <Link to="/home" className="hometitle">
                    <h1>Gracie Marcoux</h1>
                </Link>

               <nav className="nav">
                    <Link to="/aboutMe" className="name">
                        <h6>About me!</h6>
                    </Link>

                    <Link to="/portfolio" className="port1">
                        <h6>Portfolio</h6>
                    </Link>

                    <Link to="/resume" className="resume">
                        <h6>Resume</h6>
                    </Link>

                    <Link to="/contactMe" className="contact">
                        <h6>Contact me!</h6>
                    </Link>
               </nav>

            </div>
        </header>
    )
}