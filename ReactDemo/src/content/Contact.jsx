import './Contact.css'
import LinkedInLogo from "../assets/linkedin.png";
function Contact() {
    return(
        <div className="Contact" id="Contact">
            <h2 className="Title">Contact</h2>
            <div className="ContactInfo">
                <h3>E-mail</h3>
                <p>sa.djoo@yahoo.com</p>
                <h3>Phone</h3>
                <p>+47 94 19 79 77</p>
                <h3>GitHub</h3>
                <p><a href="https://github.com/MaloSunce?tab=repositories" target="_blank">/MaloSunce</a></p>
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/sara-djordjevic-2b0ab925b/" target="_blank">/Sara-Djordjevic</a></p>
            </div>
        </div>
    );
}

export default Contact