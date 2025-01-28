import './DevelSkills.css'
import {useState} from "react";

function DevelSkills() {

    const [selectedID, setSelectedID] = useState(1);
    const handleMouseOver = (id) => {
        setSelectedID(id);
    };

    const [develSkills, setSkill] = useState([
        {
            title: "Mobile programming",
            description: "Building and designing mobile apps from scratch with technologies like Kotlin, Dart, Jetpack Compose, " +
                "Flutter, Figma, and more.",
            tags: ["Flutter", "Figma", "Jetpack Compose", "Kotlin", "Dart", "Mobile", "Android", "IOs", "XML", "JSON"],
            id: 0
        },
        {
            title: "Web Development",
            description: "Building reactive and RESTful applications with JavaScript, HTML, CSS, and React. " +
                "Utilizing HTTP methods and HTTPS for secure and encrypted communication. Utilizing status " +
                "codes, JSON, and YAML for efficient and structured data exchange.",

            tags: ["HTTP", "HTTPS", "JSON", "YAML", "JavaScript", "HTML", "CSS", "React", "XML"],
            id: 1
        },
        {
            title: "Cross-platform development",
            description: "Developing applications that run across multiple " +
                "platforms using cross-platform frameworks and containerization technologies like Docker. " +
                "Supported platforms include Windows, Android, Linux, and iOS.",
            tags: ["Android", "Linux", "Windows", "IOs", "Cross-platform", "Docker"],
            id: 2
        },
        {
            title: "User-centered design",
            description: "Designing and implementing with usability and accessibility in mind, " +
                "as well as designing and conducting user tests.",
            tags: ["Usability", "UX", "User-centered design"],
            id: 3
        },
        {
            title: "Cloud technologies",
            description: "Building scalable and flexible applications using cloud platforms " +
                "like Google Cloud Platform.",
            tags: ["GCP", "Database", "JSON"],
            id: 4
        },
        {
            title: "API integration",
            description: "Connecting existing APIs to systems and creating new APIs from scratch " +
                "with the help of tools like Postman, and conducting integration tests.",
            tags: ["API", "Postman", "Testing", "Database", "JSON"],
            id: 5
        },
        {
            title: "Agile development methods",
            description: "Working with agile and iterative development methods like Scrum and Kanban, " +
                "using tools like Git, Jira, GanttProject, and Notion.",
            tags: ["Git", "Jira", "Scrum", "Kanban"],
            id: 6
        },
        {
            title: "Software security",
            description: "Applying security measures such as hashing, IP whitelisting, memory access, thorough error handling, " +
                "and designing and implementing databases with safeguards against unauthorized access.",
            tags: ["Database"],
            id: 7
        },
        {
            title: "Documentation and testing",
            description: "Writing clear and thorough documentation and conducting automated and manual testing to ensure " +
                "quality and maintainability of code.",
            tags: ["Documentation", "Testing"],
            id: 8
        },
        {
            title: "Data modeling and database systems",
            description: "Designing and implementing relational and non-relational databases to efficiently store, retrieve, " +
                "and manipulate data.",
            tags: ["Database"],
            id: 9
        },
        {
            title: "Containerization and virtualization",
            description: "Using Docker to containerize applications and manage virtual machines for deployment. This includes " +
                "practices like port forwarding, managing VM instances, and automating processes with scripts.",
            tags: ["Database", "Docker", "VM"],
            id: 10
        },
        {
            title: "Object-oriented programming",
            description: "Designing software systems using OOP principles like inheritance, polymorphism, " +
                "and encapsulation to create maintainable and reusable code.",
            tags: ["OOP"],
            id: 11
        },
    ]);

    // Display skills in two columns
    return (
        <div className="DevelSkills" id="DevelSkills">
            <h2 style={{marginBottom: '1%' }}>Software & Design Expertise</h2>
            <p style={{marginBottom: '2%', marginTop: '0', fontSize: '1.8rem'}}>What I Bring to the Table Beyond Technical Skills</p>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: '4%',
                marginRight: '4%'
            }}>

                <div style={{textAlign: 'right', flex: 3}}>
                    {develSkills.slice(0, Math.ceil(develSkills.length / 2)).map((skill) => (
                        <div className="SkillTitleLeft"
                             key={skill.id}
                             onMouseOver={() => handleMouseOver(skill.id)}>
                            <p style={{fontSize: '1.4em'}}>{skill.title}</p>
                        </div>
                    ))}
                </div>

                <div style={{textAlign: 'center', flex: 2}}>
                    {develSkills.slice(0, Math.ceil(develSkills.length)).map((skill) => (
                        <div key={skill.id}>
                            {selectedID === skill.id && (
                                <p className="SkillDescription"><b style={{fontSize: '1.5em'}}>{skill.title}</b><br/><br/>{skill.description}</p>)}
                        </div>
                    ))}
                </div>

                <div style={{textAlign: 'left', flex: 3,  marginRight: '2%'}}>
                    {develSkills.slice(Math.ceil(develSkills.length / 2)).map((skill) => (
                        <div className="SkillTitleRight"
                             key={skill.id}
                             onMouseOver={() => handleMouseOver(skill.id)}>
                            <p style={{fontSize: '1.4em'}}>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DevelSkills