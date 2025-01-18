import './TechSkills.css'

import * as React from 'react';

function TechSkills() {

    // [skill, proficiency]
    const backend = [
        ["Kotlin", 5],
        ["C/C++", 4],
        ["Golang", 5],
        ["Python", 4],
        ["Dart", 4],
        ["SQL", 3]
    ];

    const frontend = [
        ["Jetpack Compose", 5],
        ["Flutter", 4],
        ["HTML", 3],
        ["CSS", 4],
        ["React", 2],
        ["JavaScript", 3],
    ];

    const other = ["Git", "Google Cloud Platform", "MongoDB", "Linux", "Windows", "Android"];

    return (
        <div className="TechSkills" id="TechSkills">
            <h2 style={{margin: '5% auto 2% auto', paddingRight: '2%'}}>Technical Skills</h2>

            <table>
                <thead>
                <tr>
                    <th className="WideCol"><h3>Back-end</h3></th>
                    <th className="WideCol"><h3>Front-end</h3></th>
                    <th className="LeftAlign"><h3>Other</h3></th>
                </tr>
                </thead>
                <tbody>
                {/* Map each (skill, proficiency) pair to a row in each their own column */}
                {Array(Math.max(backend.length, frontend.length, other.length))
                    .fill(null)
                    .map((_, index) => (
                        <tr key={index}>
                            <td>
                                {backend[index] ? (
                                    <div className="SkillItem">
                                        <div>{backend[index][0]}</div>
                                        {backend[index][1] ? (
                                            <div style={{display: 'flex', gap: '5px', marginTop: '3px'}}>
                                                {Array(backend[index][1]).fill(null).map((_, barIndex) => (
                                                    <div
                                                        key={barIndex}
                                                        style={{
                                                            backgroundColor: 'var(--accent)',
                                                            width: `30px`,
                                                            height: '15px',
                                                            borderRadius: '5px'
                                                        }}
                                                    ></div>
                                                ))}
                                                {Array(5-backend[index][1]).fill(null).map((_, barIndex) => (
                                                    <div
                                                        key={barIndex}
                                                        style={{
                                                            backgroundColor: 'Transparent',
                                                            border: '2px solid var(--accent)',
                                                            width: `30px`,
                                                            height: '15px',
                                                            borderRadius: '5px'
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>
                                        ) : <div></div>}
                                        {/* <div style={{backgroundColor: 'var(--accent)', width: `${backend[index][1] * 18}%`, borderRadius: '10px'}}></div>*/}
                                    </div>
                                ) :
                                    <div></div> // Empty div as default for missing data
                                }
                            </td>

                            <td>
                                {frontend[index] ? (
                                    <div className="SkillItem">
                                        <div>{frontend[index][0]}</div>
                                        {frontend[index][1] ? (
                                            <div style={{display: 'flex', gap: '5px', marginTop: '3px'}}>
                                                {Array(frontend[index][1]).fill(null).map((_, barIndex) => (
                                                    <div
                                                        key={barIndex}
                                                        style={{
                                                            backgroundColor: 'var(--accent)',
                                                            width: `30px`,
                                                            height: '15px',
                                                            borderRadius: '5px'
                                                        }}
                                                    ></div>
                                                ))}
                                                {Array(5-frontend[index][1]).fill(null).map((_, barIndex) => (
                                                    <div
                                                        key={barIndex}
                                                        style={{
                                                            backgroundColor: 'Transparent',
                                                            border: '2px solid var(--accent)',
                                                            width: `30px`,
                                                            height: '15px',
                                                            borderRadius: '5px'
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>
                                        ) : <div></div>}
                                    </div>
                                ) :
                                    <div></div> // Empty div as default for missing data
                                }
                            </td>

                            <td style={{textAlign: 'left'}}> {other[index] ? other[index] : ""} </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <p style={
                {
                    fontSize: '0.8em',
                    color: 'var(--accent-secondary)',
                    width: '100vw',
                    marginLeft: '67vw',
                    marginTop: '6vw'
                }}>*Ranking of proficiency on a scale from 1 to 5.</p>
        </div>
    );
}
export default TechSkills