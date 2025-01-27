import './AboutMe.css'
import Me from '../assets/me.jpg'

function AboutMe() {
    return (
        <div className="AboutMe" id="AboutMe">
            <div className="Description">
                <h2 className="Title">About Me</h2>
                <img src={Me} alt="Photo of me"></img>
                <b style={{marginLeft: '20px'}}>Hello, World!</b>
                <p>
                    My name is Sara Djordjevic, and I am a full-stack developer with a <b>Bachelor's
                    degree in Programming</b> and 4 years of experience in systems development.
                    I focus on backend development with solid experience with
                    <b> Kotlin</b>, <b>Go</b>, <b>C/C++</b>, <b>Python</b>, and <b>Dart</b>.
                    I also have experience with front-end development for both web and mobile,
                    including technologies like <b>Jetpack Compose</b>, <b>Flutter</b>,
                    <b> HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and a bit of <b>React</b>. Go to
                    the <a href="#TechSkills" style={{color: '#b3b3ff'}}>Technical Skills</a> page to see more of my
                    programming skills,
                    or to the <a href="#Projects" style={{color: '#b3b3ff'}}>Projects</a> page to read more about
                    some of my projects.


                    <br/><br/>

                    I place great emphasis on clear documentation, readable code, and unit testing.
                    I have hands-on experience using cloud technologies and databases, including <b>GCP</b>,
                    <b> MongoDB</b>, <b>SQL</b> and <b>Docker</b>. I work well in <b>agile
                    development</b> environments,
                    collaborate well with others, and quickly pick up on new technologies. Go to
                    the <a href="#DevelSkills" style={{color: '#b3b3ff'}}>Software & Design Expertise</a> page
                    to view some of my practical skills, or the <a href="#Footer"
                                                                   style={{color: '#b3b3ff'}}>Footer</a>
                    to find my contact information.
                </p>
            </div>
        </div>
    );
}

export default AboutMe