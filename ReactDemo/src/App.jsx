import {useEffect, useState} from "react";

import Header from './header-footer/Header.jsx'
import Footer from './header-footer/Footer.jsx'
import Skills from './content/Skills.jsx'
import Projects from "./content/Projects.jsx";

import ToTopIcon from "./assets/sun_white.png";

import "./index.css"

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
                <a href="#">About me</a>
                <a href="#Skills">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Classes</a>
                <a href="#">Contact</a>
            </div>

            <Header/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App
