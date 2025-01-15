import {useEffect, useState} from "react";

import Header from './header-footer/Header.jsx'
import Footer from './header-footer/Footer.jsx'
import Skills from './content/Skills.jsx'
import AboutMe from './content/AboutMe.jsx'
import Projects from "./content/Projects.jsx";

import ToTopIcon from "./assets/sun_white.png";

import "./index.css"

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faTools, faPencil, faGraduationCap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faUser, faTools, faPencil, faGraduationCap, faPhone)

function App() {

    // Set visibility for back-to-top icon
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // Check scroll position
            if (window.scrollY > (window.innerHeight - 100)) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Event listener on 'hide-menu' click
    useEffect(() =>  {

        }
    )

    return (
        <div className="App">
            <div className={`SideMenu ${isVisible ? 'visible' : ''}`}>
                <a href="#"><img className="ToTopIcon" src={ToTopIcon} alt="Sun logo white"/> </a>
                <div className="SideMenuBar">
                    <a href="#Skills"><FontAwesomeIcon icon="tools" /></a>
                    <a href="#AboutMe"><FontAwesomeIcon icon="user" /></a>
                    <a href="#Projects"><FontAwesomeIcon icon="pencil" /></a>
                    <a href="#"><FontAwesomeIcon icon="graduation-cap" /></a>
                    <a href="#"><FontAwesomeIcon icon="phone" /></a>
                </div>
            </div>

            <Header/>
            <Skills/>
            <AboutMe/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App
