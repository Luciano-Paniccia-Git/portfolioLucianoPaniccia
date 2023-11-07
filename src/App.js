import React from 'react';

//COMPONENETES"
import Header from "./componentes/header/Header"
import About from "./componentes/about/About"
import Experience from "./componentes/Experience/Experience"
import Contact from "./componentes/contact/Contact"
import Footer from "./componentes/footer/Footer"
import Nav from "./componentes/nav/Nav"
import Portfolio from "./componentes/portfolio/Portfolio"
import Services from "./componentes/services/Services"
import Testimonials from "./componentes/testimonials/Testimonials"


function App() {
    return (
        <>
            <Header/>
            <About/>
            <Experience/>
            <Nav/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    )
  }
  
  export default App;