import SunLogo from "../assets/sun.png";
import GitHubLogo from "../assets/github.png";
import LinkedInLogo from "../assets/linkedin.png";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faSun, faMoon, faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faSun, faMoon, faBars)

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
    }

    return (
        <header className="FloatingHeader">
            <div className="LogoContainer">
                <h1 style={{fontSize: '1.6em'}}><a href="#">MaloSunce</a></h1>
                <img
                    src={SunLogo}
                    alt="Sun logo"
                    style={{width: '1.5em', height: '1.5em', marginBottom: '3%'}}
                    title="Brightness icons created by Cap Cool - Flaticon"
                />
            </div>
            <nav className="Nav" ref={navRef}>
                <a href="#AboutMe">About me</a>
                <a href="#TechSkills">Technical skills</a>
                <a href="#DevelSkills">Software & Design Expertise</a>
                <a href="#Projects">Projects</a>
                <a href="#Footer">Contact</a>

                <div style={{display: 'flex', gap: '1.7em', paddingRight: '2%'}}>
                    <a href="https://github.com/MaloSunce?tab=repositories" target="_blank">
                        <img className="Icons" src={GitHubLogo} alt="GitHub logo"></img>
                        {/*<dir className="Logo"><img src="../assets/sun.png" alt="Sun Icon"> </img></dir>*/}
                    </a>
                    <a href="https://www.linkedin.com/in/sara-djordjevic-2b0ab925b/" target="_blank">
                        <img className="Icons" src={LinkedInLogo} alt="LinkedIn logo"></img>
                        {/*<a href="https://www.flaticon.com/free-icons/brightness" title="brightness icons">Brightness icons created by Cap Cool - Flaticon</a>*/}
                    </a>
                    {/*<a id="color-switch"><FontAwesomeIcon icon="palette"/></a>*/}
                    <button onClick={showNavbar} className="NavBtn NavBtnClose"><FontAwesomeIcon icon="bars"/></button>
                </div>
            </nav>
            <button onClick={showNavbar} className="NavBtn"><FontAwesomeIcon icon="bars"/></button>
        </header>
    );
}

export default FloatingHeader