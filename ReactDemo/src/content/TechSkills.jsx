import './TechSkills.css'

import * as React from 'react';

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
        ["React", 0.5],
        ["JavaScript", 0.4],
        ["HTML", 0.6],
        ["CSS", 0.7],
        ["Jetpack Compose", 0.8],
        ["Flutter", 0.8]
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
                {Math.max(backend.length, frontend.length, other.length)}
                {Array(Math.max(backend.length, frontend.length, other.length))
                    .fill(null)
                    .map((_, index) => (
                        <tr key={index}>
                            <td>
                                {backend[index] ? (
                                    <div className="SkillItem">
                                        <div>{backend[index][0]}</div>
                                        <div style={{backgroundColor: 'var(--accent)', width: `${backend[index][1] * 100}%`}}></div>
                                    </div>
                                ) : (
                                    <div></div> //Empty div is default for missing data
                                )}
                            </td>

                            <td>
                                {frontend[index] ? (
                                    <div className="SkillItem">
                                        <div>{frontend[index][0]}</div>
                                        <div style={{backgroundColor: 'var(--accent)', width: `${frontend[index][1] * 100}%`}}></div>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </td>

                            <td>
                                {other[index] ? other[index] : ""}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default TechSkills