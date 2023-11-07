import React from "react";
import "./Experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"


export default function Experience () {
    return (
        <div>
            <section id="experience">
                <h2>Habilidades</h2>
                <div className="container experience__container">
                    <div className="experience__frontend">
                        <h3>Frontend Development</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>React</h4>
                            <small className="text-light">Experimentado</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>Angular</h4>
                            <small className="text-light">Intermedio</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>HTML</h4>
                            <small className="text-light">Experimentado</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>Javscript</h4>
                            <small className="text-light">Experimentado</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>TypeScript</h4>
                            <small className="text-light">Experimentado</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>Redux</h4>
                            <small className="text-light">Intermedio</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>CSS</h4>
                            <small className="text-light">Intermedio</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>Tailwind</h4>
                            <small className="text-light">Intermedio</small>
                            </div>
                            </article>
                        </div>
                    </div>
                    <div className="experience__backend">
                        <h3>Backend Development</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>NodeJs</h4>
                            <small className="text-light">Intermedio</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>ExpressJs</h4>
                            <small className="text-light">Intermedio</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>PostgresSQL</h4>
                            <small className="text-light">Intermedio</small>
                            </div>
                            </article>
                            <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>MySQL</h4>
                            <small className="text-light">Intermedio</small>
                            </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}