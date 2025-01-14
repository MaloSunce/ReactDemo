import "./Header.css"
import GitHubLogo from '../assets/github.png'
import LinkedInLogo from '../assets/linkedin.png'
import SunLogo from '../assets/sun.png'

function Header() {

    return (
        <header className="Header">
            <h1><a href="#">MaloSunce</a></h1>
            <nav className="Nav">
                <a href="#">About me</a>
                <a href="#Skills">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Classes</a>
                <a href="#">Contact</a>

                <div className="IconContainer">
                    <a href="https://github.com/MaloSunce?tab=repositories">
                        <img className="Icons" src={GitHubLogo} alt="GitHub logo"></img>
                        {/*<dir className="Logo"><img src="../assets/sun.png" alt="Sun Icon"> </img></dir>*/}
                    </a>
                    <a href="https://www.linkedin.com/in/sara-djordjevic-2b0ab925b/">
                        <img className="Icons" src={LinkedInLogo} alt="LinkedIn logo"></img>
                        {/*<a href="https://www.flaticon.com/free-icons/brightness" title="brightness icons">Brightness icons created by Cap Cool - Flaticon</a>*/}
                    </a>
                </div>
            </nav>
            <img className="SunLogo" src={SunLogo} alt="Sun logo" style={{width: '22em', height: 'auto'}}/>
        </header>
    );
}

export default Header