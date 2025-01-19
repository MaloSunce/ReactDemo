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

    const data = Array.from({length: maxLength}).map((_, index) => ({
        skillBackend: backend[index]?.[0] || "",
        skillFrontend: frontend[index]?.[0] || "",
        skillOther: other[index] || "",
    }));

    // Map each column header title to the corresponding key
    const columns = React.useMemo(() => [
        {
            Header: "Back-end",
            accessor: "skillBackend",
        },
        {
            Header: "Front-end",
            accessor: "skillFrontend",
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
            <h2 style={{marginBottom: '3%', marginTop: '7%'}}>Technical Skills</h2>
            <table {...getTableProps()} style={{width: '100%'}}>
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
                {rows.map((row, rowIndex) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                const accessor = cell.column.id; // Get the column's accessor (e.g., skillBackend, skillFrontend)
                                const isBackend = accessor === "skillBackend";
                                const isFrontend = accessor === "skillFrontend";

                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}

                                        {/* Render proficiency bars for backend and frontend */}
                                        {(isBackend || isFrontend) && (
                                            <div
                                                style={{display: 'flex', gap: '5px', marginTop: '3px', width: '220px'}}>
                                                {/* Determine which column is currently being rendered */}
                                                {Array((isBackend ? backend[rowIndex]?.[1] : frontend[rowIndex]?.[1]) || 0)
                                                    .fill(null)
                                                    .map((_, barIndex) => (
                                                        <div
                                                            key={`filled-${barIndex}`}
                                                            style={{
                                                                backgroundColor: 'var(--accent)',
                                                                width: '15%',
                                                                height: '15px',
                                                                borderRadius: '5px',
                                                            }}
                                                        ></div>
                                                    ))}
                                                {Array(5 - ((isBackend ? backend[rowIndex]?.[1] : frontend[rowIndex]?.[1]) || 5))
                                                    .fill(null)
                                                    .map((_, barIndex) => (
                                                        <div
                                                            key={`empty-${barIndex}`}
                                                            style={{
                                                                backgroundColor: 'transparent',
                                                                border: '2px solid var(--accent)',
                                                                width: '15%',
                                                                height: '15px',
                                                                borderRadius: '5px',
                                                            }}
                                                        ></div>))}
                                            </div>)}
                                    </td>);
                            })}
                        </tr>)
                })}
                </tbody>
            </table>
            <p style={{
                    fontSize: '0.8em',
                    color: 'var(--accent-secondary)',
                    marginTop: '4%',
                    alignSelf: 'end'}}
            >Ranking of proficiency on a scale from 1 to 5.</p>
        </div>
    );
}

export default TechSkills