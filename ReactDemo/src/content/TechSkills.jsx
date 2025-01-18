import './TechSkills.css'

import React from 'react';
import {useTable} from 'react-table';

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

    const maxLength = Math.max(backend.length, frontend.length, other.length);

    // Generate set of 5 dots representing the proficiency of each skill
    const proficiency = (prof) => {
        const maxLevel = 5;
        const filled = '● '.repeat(prof);
        const empty = '● '.repeat(maxLevel - prof);

        return (
            <>
                {filled.split(' ').map((dot, index) => (
                    <span key={`filled-${index}`} style={{color: 'var(--text-primary)'}}> {dot} </span>
                ))}
                {empty.split(' ').map((dot, index) => (
                    <span key={`empty-${index}`} style={{color: 'var(--accent-secondary)'}}> {dot} </span>
                ))}
            </>
        );
    };

    const data = Array.from({length: maxLength}).map((_, index) => ({
        skillBackend: backend[index]?.[0] || "",
        profBack: proficiency(backend[index]?.[1] || 0),  // Convert proficiency to dots
        skillFrontend: frontend[index]?.[0] || "",
        profFront: proficiency(frontend[index]?.[1] || 0), // Convert proficiency to dots
        skillOther: other[index] || "",
    }));

    // Map each column header title to the corresponding key
    const columns = React.useMemo(() => [
        {
            Header: "Back-end",
            accessor: "skillBackend",
        },
        {
            Header: "",
            accessor: "profBack"
        },
        {
            Header: "",
            accessor: "blank1"
        },
        {
            Header: "Front-end",
            accessor: "skillFrontend",
        },
        {
            Header: "",
            accessor: "profFront"
        },
        {
            Header: "",
            accessor: "blank2"
        },
        {
            Header: "Other",
            accessor: "skillOther"
        },
    ], []);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        useTable({columns, data});

    return (
        <div className="TechSkills" id="TechSkills">
            <h2>Technical Skills</h2>
            <div className="TableContainer">
                <table {...getTableProps()}>
                    <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((columns) => (
                                <th {...columns.getHeaderProps()}>
                                    <h3>
                                        {columns.render("Header")}
                                    </h3>
                                </th>
                            ))}
                        </tr>))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                ))}
                            </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TechSkills