import React from "react";
import "./Portfolio.css"
import IMG1 from "../../multimedia/IMG1.png"
import IMG2 from "../../multimedia/hypeshopp.png"

export default function Portfolio () {
    return (
        <div>
            <section id="portfolio">
                <h2>Proyectos</h2>
                <div className="container portfolio__container">
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={IMG1} alt=""/>
                        </div>
                        <h3>Videogames App</h3>
                        <h5>Pagina de Videojuegos</h5>
                        <a href="https://github.com/Luciano-Paniccia-Git/PI-VIDEOGAMES" className="btn" target='_blank'>GitHub</a>
                        <a href="https://dancing-faun-9aedca.netlify.app/" className="btn btn-primary" target='_blank'>Deploy</a>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={IMG2} alt=""/>
                        </div>
                        <h3>Hype Shop</h3>
                        <h5>Tienda de zapatillas</h5>
                        <a href="https://github.com/Luciano-Paniccia-Git/PF-Hype-Shop" className="btn" target='_blank'>GitHub</a>
                        <a href="https://hype-shop.vercel.app/" className="btn btn-primary" target='_blank'>Deploy</a>
                    </article>
                </div>
            </section>
        </div>
    )
}
