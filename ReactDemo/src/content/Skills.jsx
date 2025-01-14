import './Skills.css'

function Skills() {
    const backend = ["Kotlin", "C/C++", "Golang", "Python", "Dart"]
    const frontend = ["JavaScript", "HTML", "CSS", "React"]
    const other = ["Git", "SQL", "GCP", "Linux", "Windows", "Android"]

    return (
        <div className="Skills">
            <ul>
                {backend.map(skill => <li key={skill}>{skill}</li>)}
                {frontend.map(skill => <li key={skill}>{skill}</li>)}
                {other.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    );
}

export default Skills