import {useEffect, useState} from "react";

import Header from './header-footer/Header.jsx'
import Footer from './header-footer/Footer.jsx'
import TechSkills from './content/TechSkills.jsx'
import DevelSkills from './content/DevelSkills.jsx'
import AboutMe from './content/AboutMe.jsx'
import Projects from "./content/Projects.jsx";
import FloatingHeader from "./header-footer/FloatingHeader.jsx";


import "./index.css"
import "./header-footer/FloatingHeader.css"

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faUser, faTools, faPencil, faPhone, faComputer} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(fab, faUser, faTools, faPencil, faPhone, faComputer)

function App() {

    // Set visibility for back-to-top icon based on scroll
    const [isVisible, setIsVisible] = useState(false);
    const mediaMaxWidth = 1024;
    useEffect(() => {
        const handleMouseMove = (event) => {
            // Display header when mouse is at top of screen when in full screen
            if (event.clientY <= 50 &&
                window.scrollY > window.innerHeight - 100 &&
                window.scrollY < (window.innerHeight * 4.6) &&
                window.innerWidth  >= mediaMaxWidth) {
                setIsVisible(true);
            } else if ( // Always display header on smaller windows
                (window.innerWidth  < mediaMaxWidth &&
                window.scrollY > window.innerHeight - 100) &&
                window.scrollY < (window.innerHeight * 4.6)) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (<div className="App">
            <div className={`HeaderVisibility ${isVisible ? 'visible' : ''}`}>
                <FloatingHeader className={`FloatingHeader ${isVisible ? 'visible' : ''}`}/>
            </div>

            <Header/>
            <AboutMe/>
            <TechSkills/>
            <DevelSkills/>
            <Projects/>
            <Footer/>
        </div>);
}

export default App
