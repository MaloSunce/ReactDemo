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
            if (window.scrollY > window.innerHeight) {
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

            <a href="#" className={`ToTopIcon ${isVisible ? 'visible' : ''}`}>
                <img src={ToTopIcon} alt="Sun logo black" />
            </a>

            <Header/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App
