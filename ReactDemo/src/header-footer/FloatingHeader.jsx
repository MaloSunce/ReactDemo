import SunLogo from "../assets/sun.png";
import GitHubLogo from "../assets/github.png";
import LinkedInLogo from "../assets/linkedin.png";

import './FloatingHeader.css'


function FloatingHeader() {
    return (
        <header className="FloatingHeader">
            <div className="LogoContainer">
                <h1><a href="#">MaloSunce</a></h1>
                <img
                    src={SunLogo}
                    alt="Sun logo"
                    style={{width: '2em', height: '2em', marginBottom: '3%'}}
                    title="Brightness icons created by Cap Cool - Flaticon"
                />
            </div>
            <nav className="Nav">
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
            </nav>
        </header>
    );
}

export default FloatingHeader