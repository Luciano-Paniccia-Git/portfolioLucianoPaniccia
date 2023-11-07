import React from "react";
import CV from "../../multimedia/CV LUCIANO PANICCIA 2023.pdf"

export default function CTA () {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Descargar CV</a>
            <a href="#contact" className="btn btn-primary">Contactame</a>
        </div>
    )
}