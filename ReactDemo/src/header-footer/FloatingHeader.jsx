import SunLogo from "../assets/sun.png";
import GitHubLogo from "../assets/github.png";
import LinkedInLogo from "../assets/linkedin.png";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faSun, faMoon, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faSun, faMoon, faBars, faClose)

import './FloatingHeader.css'
import {useEffect, useRef, useState} from "react";

function FloatingHeader() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');

    useEffect(() => {
        // Ensure DOM is fully loaded
        const colorSwitch = document.getElementById('color-switch');
        if (colorSwitch) {
            colorSwitch.addEventListener('click', toggleTheme);
        }

        // Cleanup event listener
        return () => {
            if (colorSwitch) {
                colorSwitch.removeEventListener('click', toggleTheme);
            }
        };
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            if (prevTheme === 'dark') {
                return 'sunrise';
            } else if (prevTheme === 'sunrise') {
                return 'sunset';
            } else {
                return 'dark';
            }
        });
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Save the theme in localStorage
    }, [theme]);

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("ResponsiveNav");

        // Prevent scrolling on the body when the nav is active
        if (navRef.current.classList.contains("ResponsiveNav")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }

    return (
        <header className="FloatingHeader">
            <div className="LogoContainer">
                <h1 style={{fontSize: '1.6em'}}><a href="#">MaloSunce</a></h1>
                <img src={SunLogo} alt="Sun logo" title="Brightness icons created by Cap Cool - Flaticon"/>
            </div>
            <nav className="Nav" ref={navRef}>
                <a href="#AboutMe">About me</a>
                <a href="#TechSkills">Technical skills</a>
                <a href="#DevelSkills">Software & Design Expertise</a>
                <a href="#Projects">Projects</a>
                <a href="#Footer">Contact</a>

                <button onClick={showNavbar} className="NavBtn NavBtnClose"><FontAwesomeIcon icon="close"/></button>
            </nav>
            <button onClick={showNavbar} className="NavBtn"><FontAwesomeIcon icon="bars"/></button>
        </header>
    );
}

export default FloatingHeader