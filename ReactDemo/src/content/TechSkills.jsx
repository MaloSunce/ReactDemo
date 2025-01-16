import './TechSkills.css'

function TechSkills() {
    const backend = [
        ["Kotlin", 0.8],
        ["C/C++", 0.7],
        ["Golang", 0.8],
        ["Python", 0.7],
        ["Dart", 0.6],
        ["SQL", 0.6]
    ];

    const frontend = [
        ["React", 0.6],
        ["JavaScript", 0.5],
        ["HTML", 0.6],
        ["CSS", 0.7],
        ["Jetpack Compose", 0.8],
        ["Flutter", 0.8]
    ];
    const other = ["Git", "GCP", "MongoDB", "Linux", "Windows", "Android"];

    return (
        <div className="TechSkills" id="TechSkills">
            <h2 className="Title">Technical Skills</h2>

            <div className="Subtitles">
                <h3>Back-end</h3>
                <h3>Front-end</h3>
                <h3>Other</h3>
            </div>

            <div className="SkillLists">
                {backend.map(skill => (
                    <div className="SkillItem" key={skill[0]}>
                        <p>{skill[0]}</p>
                        <div style={{backgroundColor: 'var(--accent)', width: `${skill[1] * 100}%`}}></div>
                    </div>
                ))}
                {frontend.map(skill => (
                    <div className="SkillItem" key={skill[0]}>
                        <p>{skill[0]}</p>
                        <div style={{backgroundColor: 'var(--accent)', width: `${skill[1] * 100}%`, height:'90%'}}></div>
                    </div>
                ))}
                <ul>
                    {other.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default TechSkills