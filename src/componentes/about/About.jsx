import React from "react";
import "./About.css"
import ME from '../../multimedia/fotomia.jpg'
import {FaAward} from "react-icons/fa"
import { BsCodeSlash } from "react-icons/bs"


export default function About () {
    return (
        <div>
            <section id="about">
                <h2>Sobre mi</h2>

                <div className="container about__container">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <BsCodeSlash className="about__icon"/>
                                <h5>Educacion</h5>
                                <small>Henry Full Stack Developer</small>
                            </article>
                            <article className="about__card">
                                <FaAward className="about__icon"/>
                                <h5>Experiencia</h5>
                                <small>Gobierno de la Provincia de Santa Fe</small>
                            </article>
                        </div>
                        <p>
                        Soy un Desarrollador Web Full Stack. Poseo 600hs de Desarrollo Web en Henry donde se simulo un ambiente de trabajo real durante aproximadamente 4 meses, utilizando metodologías agiles. En este proceso realizamos proyectos individuales y grupales.
                        Disfruto participar en proyectos, donde se construya en equipo, intercambiando ideas y maneras de lograr el objetivo. Me siento comodo en lugares de liderazgo, guiando a los equipos de trabajo y resolviendo problemas. Siempre estoy buscando desafíos que demanden nuevos conocimientos, experiencias y que me lleven a superarme constantemente.
                        Estoy apto para conocer y aprender nuevas tecnologías.
                        Si coincido con el perfil que estas buscando o te gustaria consultarme algo, no dudes en ponerte en contacto.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}