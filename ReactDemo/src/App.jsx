import {useEffect, useState} from "react";

import Header from './header-footer/Header.jsx'
import Footer from './header-footer/Footer.jsx'
import TechSkills from './content/TechSkills.jsx'
import DevelSkills from './content/DevelSkills.jsx'
import AboutMe from './content/AboutMe.jsx'
import Projects from "./content/Projects.jsx";

import "./index.css"

import ToTopIcon from "./assets/sun_white.png";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faTools, faPencil, faPhone, faComputer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faUser, faTools, faPencil, faPhone, faComputer)

function App() {

    // Set visibility for back-to-top icon based on scroll
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

    return (
        <div className="App">
            <div className={`SideMenu ${isVisible ? 'visible' : ''}`}>
                <a href="#"><img className="ToTopIcon" src={ToTopIcon} alt="Sun logo white"/> </a>
            </div>

            <Header/>
            <AboutMe/>
            <TechSkills/>
            <DevelSkills/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App
