import "./Header.css"
import GitHubLogo from '../assets/github.png'
import LinkedInLogo from '../assets/linkedin.png'
import SunLogo from '../assets/sun.png'
import SunLogoBlack from '../assets/sun_black.png'

function Header() {

    return (
        <header className="Header">
            <div style={{display: 'flex'}}>
                <h1><a href="#">MaloSunce</a></h1>
                <img className="SunLogo" src={SunLogo} alt="Sun logo" style={{width: '2em', height: '2em', paddingTop: '30px'}}/>
            </div>
            <nav className="Nav">
                <a href="#AboutMe">About me</a>
                <a href="#TechSkills">Technical skills</a>
                <a href="#DevelSkills">Software & Design Expertise</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>

                <div className="IconContainer">
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
            <img className="SunLogo" src={SunLogo} alt="Sun logo" style={{width: '22em', height: 'auto'}}/>
            {/*<a href="https://www.flaticon.com/free-icons/brightness" title="brightness icons">Brightness icons created by Cap Cool - Flaticon</a>*/}
        </header>
    );
}

export default Header