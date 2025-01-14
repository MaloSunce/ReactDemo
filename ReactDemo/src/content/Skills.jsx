import './Skills.css'

function Skills() {
    const backend = ["Kotlin", "C/C++", "Golang", "Python", "Dart", "SQL"]
    const frontend = ["React", "JavaScript", "HTML", "CSS", "Jetpack Compose", "Flutter"]
    const other = ["Git", "GCP", "MongoDB", "Linux", "Windows", "Android"]

    return (
        <div className="Skills">
            <h2 className="Title">Skills</h2>

            <div className="Subtitles">
                <h3>Back-end</h3>
                <h3>Front-end</h3>
                <h3>Other</h3>
            </div>

            <div className="SkillLists">
                <ul className="SkillList">
                    {backend.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
                <ul className="SkillList">
                    {frontend.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
                <ul className="SkillList">
                    {other.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Skills