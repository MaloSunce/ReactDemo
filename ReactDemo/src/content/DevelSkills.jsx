import './DevelSkills.css'

function DevelSkills() {
    return (
        <div className="DevelSkills" id="DevelSkills">
            <h2>Software & Design Expertise</h2>
            <b style={{fontSize: '1.4em'}}>Placeholder text placeholder text</b>
            <div style={{display: 'flex', flexDirection: 'row', margin: '0 auto', paddingTop: '2%'}}>
                <ul style={{textAlign: 'left'}}>
                    <li>Mobile programming</li>
                    <li>Web development and REST-applications</li>
                    <li>Cross-platform development</li>
                    <li>User centered design</li>
                    <li>Cloud technologies</li>
                    <li>API integration</li>
                </ul>
                <ul style={{textAlign: 'right'}}>
                    <li>Agile development methods</li>
                    <li>Software security</li>
                    <li>Documentation and testing</li>
                    <li>Data modeling and database systems</li>
                    <li>Containerization and virtualization</li>
                    <li>Object-oriented programming</li>
                </ul>
            </div>
        </div>
    );
}

export default DevelSkills