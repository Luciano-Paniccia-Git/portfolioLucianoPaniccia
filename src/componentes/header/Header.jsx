import React from "react";
import "./Header.css"
import CTA from "./CTA"
import ME from "../../multimedia/fotomia.jpg"
import Socials from "./HeaderSocials"

export default function Header () {
    return (
        <div>
            <header>
                <div className="container header__container">
                    <h5>Hola, Soy</h5>
                    <h1>Luciano Paniccia</h1>
                    <h5 className="text-light">Full Stack Developer</h5>
                    <CTA/>
                    <Socials/>
                    <div className="me">
                        <img src={ME} alt=""/>	
                    </div>

                    <a href="#contact" className= "scroll__down"> Scroll Down</a>
                </div>
            </header>
        </div>
    )
}