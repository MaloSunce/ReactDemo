import './TechSkills.css'

import * as React from 'react';

function TechSkills() {

    // [skill, proficiency]
    const backend = [
        ["Kotlin", 5],
        ["C/C++", 4],
        ["Golang", 5],
        ["Python", 5],
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

    const other = ["Git", "GCP", "MongoDB", "Linux", "Windows", "Android"];

    return (
        <div className="TechSkills" id="TechSkills">
            <h2 className="Title">Technical Skills</h2>

            <table className="Table">
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
        </div>
    );
}
export default TechSkills