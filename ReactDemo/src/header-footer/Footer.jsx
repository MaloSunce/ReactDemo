import './Footer.css'
import GitHubLogo from "../assets/github.png";
import LinkedInLogo from "../assets/linkedin.png";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faPhone, faMailReply} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faPhone, faMailReply)

function Footer() {
    return (
        <footer className="Footer" id="Footer">

            <h2 style={{marginLeft: '3%'}}>Contact</h2>
            <div className="ContactInfo">
                <div className="TitleLink">
                    <div className="IconTitlePair">
                        <h3>Email</h3>
                    </div>
                    <p>sa.djoo@yahoo.com</p>
                </div>
                <div className="TitleLink">
                    <div className="IconTitlePair">
                        <h3>Phone</h3>
                    </div>
                    <p>+47 94 19 79 77</p>
                </div>
                <div className="TitleLink">
                    <div className="IconTitlePair">

                        <img className="Icons" src={GitHubLogo} alt="GitHub logo"
                             style={{margin: '0', width: "1.8rem" ,height: "1.8rem"}}></img>
                        {/*<dir className="Logo"><img src="../assets/sun.png" alt="Sun Icon"> </img></dir>*/}

                        <h3>GitHub</h3>
                    </div>
                    <p><a href="https://github.com/MaloSunce?tab=repositories" target="_blank">/MaloSunce</a></p>
                </div>
                <div className="TitleLink">
                    <div className="IconTitlePair">
                        <img className="Icons" src={LinkedInLogo} alt="LinkedIn logo"
                             style={{margin: '0', width: "1.8rem", height: "1.8rem"}}></img>
                        {/*<a href="https://www.flaticon.com/free-icons/brightness" title="brightness icons">Brightness icons created by Cap Cool - Flaticon</a>*/}

                        <h3>LinkedIn</h3>
                    </div>
                    <p><a href="https://www.linkedin.com/in/sara-djordjevic-2b0ab925b/"
                          target="_blank">/Sara-Djordjevic</a></p>
                </div>
            </div>

            <hr className="solid" style={{color: 'var(--accent)'}}/>

            <p style={{
                paddingBottom: '40px',
                color: 'var(--text-secondary)',
                marginTop: '0'
            }}> &copy; {new Date().getFullYear()} MaloSunce </p>
        </footer>
    );
}

export default Footer
