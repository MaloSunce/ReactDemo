import "./Header.css"
import GitHubLogo from '../assets/github.png'
import LinkedInLogo from '../assets/linkedin.png'
import SunLogo from '../assets/sun.png'
import './FloatingHeader.css'

import {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header() {

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
        <header className="Header">
            <div className="LogoContainer">
                <h1><a href="#">MaloSunce</a></h1>
                <img className="SmallLogo"
                    src={SunLogo}
                    alt="Sun logo"
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
                </div>
                <button onClick={showNavbar} className="NavBtn NavBtnClose"><FontAwesomeIcon icon="close"/></button>
            </nav>
            <button onClick={showNavbar} className="NavBtn"><FontAwesomeIcon icon="bars"/></button>
            <img className="SunLogo" src={SunLogo} alt="Sun logo" style={{width: '22em', height: 'auto', margin: '0'}} title="Brightness icons created by Cap Cool - Flaticon"/>
            {/*<a href="https://www.flaticon.com/free-icons/brightness" title="brightness icons">Brightness icons created by Cap Cool - Flaticon</a>*/}
        </header>
    );
}

export default Header