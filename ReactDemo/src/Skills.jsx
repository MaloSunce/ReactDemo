function Skills() {
    const backend = ["Kotlin", "C/C++", "Golang", "Python", "Dart"]
    const frontend = ["JavaScript", "HTML", "CSS", "React"]
    const other = ["Git", "SQL", "GCP", "Linux", "Windows", "Android"]

    const listStyle = {
        columns: 3,
        WebkitColumns: 3,
        MozColumns: 3
    };

    return (
        <ul style={listStyle}>
            {backend.map(skill => <li key={skill}>{skill}</li>)}
            {frontend.map(skill => <li key={skill}>{skill}</li>)}
            {other.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
    );
}

export default Skills