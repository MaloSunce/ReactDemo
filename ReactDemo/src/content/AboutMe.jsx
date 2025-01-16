import './AboutMe.css'
import Me from '../assets/me.jpg'
function AboutMe() {
    return(
        <div className="AboutMe" id="AboutMe">
            <h2 className="Title">About Me</h2>
            <img src={Me} alt="Photo of me"></img>
            <p className="Description">
                The Sun is the star at the center of the Solar System. It is a massive,
                nearly perfect sphere of hot plasma, heated to incandescence by nuclear
                fusion reactions in its core, radiating the energy from its surface mainly
                as visible light and infrared radiation with 10% at ultraviolet energies.
                It is by far the most important source of energy for life on Earth. The Sun
                has been an object of veneration in many cultures. It has been a central
                subject for astronomical research since antiquity.

                <br/><br/>

                Information sourced from
                <a href="https://en.wikipedia.org/wiki/Sun" target="_blank" rel="noopener noreferrer">
                    Wikipedia: Sun </a> (accessed January 15, 2025).
            </p>
            <p className="Box1">This website is a work in progress!!</p>
        </div>
    );
}

export default AboutMe