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
        ["React", 2],
        ["JavaScript", 3],
        ["HTML", 3],
        ["CSS", 3],
        ["Jetpack Compose", 5],
        ["Flutter", 4]
    ];

    const other = ["Git", "GCP", "MongoDB", "Linux", "Windows", "Android"];

    return (
        <div className="TechSkills" id="TechSkills">
            <h2 className="Title">Technical Skills</h2>

            <table className="Table">
                <thead>
                <tr>
                    <th><h3>Back-end</h3></th>
                    <th><h3>Front-end</h3></th>
                    <th><h3>Other</h3></th>
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
                                        <div style={{backgroundColor: 'var(--accent)', width: `${backend[index][1] * 18}%`, borderRadius: '10px'}}></div>
                                    </div>
                                ) :
                                    <div></div> // Empty div as default for missing data
                                }
                            </td>

                            <td>
                                {frontend[index] ? (
                                    <div className="SkillItem">
                                        <div>{frontend[index][0]}</div>
                                        <div style={{backgroundColor: 'var(--accent)', width: `${frontend[index][1] * 18}%`, borderRadius: '10px'}}></div>
                                    </div>
                                ) :
                                    <div></div> // Empty div as default for missing data
                                }
                            </td>

                            <td> {other[index] ? other[index] : ""} </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
export default TechSkills