import './Projects.css'
import React, { useEffect, useCallback, useState } from 'react';

function Projects() {
    // Card indices
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1,
    });

    const handleCardTransition = useCallback(() => {
        if (indexes.currentIndex >= cardItems.length - 1) {
            setIndexes({
                previousIndex: cardItems.length - 1,
                currentIndex: 0,
                nextIndex: 1,
            });
        } else {
            setIndexes((prevState) => ({
                previousIndex: prevState.currentIndex,
                currentIndex: prevState.currentIndex + 1,
                nextIndex: prevState.currentIndex + 2 === cardItems.length ? 0 : prevState.currentIndex + 2,
            }));
        }
    }, [indexes.currentIndex]);

    useEffect(() => {
        const transitionInterval = setInterval(() => {
            handleCardTransition();
        }, 4000);

        return () => clearInterval(transitionInterval);
    }, [handleCardTransition, indexes]);

    function determineClasses(indexes, cardIndex) {
        if (indexes.currentIndex === cardIndex) {
            return 'active';
        } else if (indexes.nextIndex === cardIndex) {
            return 'next';
        } else if (indexes.previousIndex === cardIndex) {
            return 'prev';
        }
        return 'inactive';
    }

    const cardItems = [
        {
            id: 1,
            title: 'PlantBuddies',
            copy: 'A mobile application developed with Kotlin and Jetpack Compose to search for and read about plants from PerenualAPI.',
        },
        {
            id: 2,
            title: 'IceMap',
            copy: 'A system to determine the thickness of the ice on lakes with a Python server and mobile application developed with Dart and Flutter. The app uses a self-developed and color coded mapping system made with various Python libraries like NumPy, Geopandas, and Shapely. The map shows ice thickness in different areas on a lake. Data is archived in a SQLite database that was designed and implemented from scratch.',
        },
        {
            id: 3,
            title: 'MyGamingList',
            copy: 'A website developed with HTML, CSS and JavaScript, with a Go server. The website retrieves data from the IGDB API and allows users to rate and bookmark various games. The website is deployed on a Linux server with a simple Docker setup, and uses Firebase for storing user data, among other things.',
        },
        {
            id: 4,
            title: 'Placeholder',
            copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    return(
        <div className="Projects" id="Projects">
            <h2 className="Title">Projects</h2>

            <button onClick={handleCardTransition}>Next</button>
            <ul className="3">
                {cardItems.map((card, index) => (
                    <li key={card.id} className={`card ${determineClasses(indexes, index)}`}>
                        <h3>{card.title}</h3>
                        <p>{card.copy}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects