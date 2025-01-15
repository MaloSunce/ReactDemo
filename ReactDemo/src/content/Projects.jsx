import './Projects.css'

import React, {useEffect, useCallback, useState} from 'react';
import Slider from 'react-slick';

import SunLogo from '../assets/sun.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Projects() {
    const cardItems = [
        {
            id: 1,
            title: 'PlantBuddies',
            description: 'A mobile application developed with Kotlin and Jetpack Compose to search for and read about plants from PerenualAPI.',
        },
        {
            id: 2,
            title: 'IceMap',
            description: 'A system to determine the thickness of the ice on lakes with a ' +
                'Python server and mobile application developed with Dart and Flutter. ' +
                'The map shows ice thickness in different areas on a lake. ' +
                'Data is archived in a SQLite database that was designed and implemented from scratch.',
        },
        {
            id: 3,
            title: 'MyGamingList',
            description: 'A website developed with HTML, CSS and JavaScript, with a Go server. The website retrieves data from the IGDB API and allows users to rate and bookmark various games. The website is deployed on a Linux server with a simple Docker setup, and uses Firebase for storing user data, among other things.',
        },
        {
            id: 4,
            title: 'Placeholder',
            description: ' Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text.',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="Projects" id="Projects">
            <h2>Projects</h2>
            <Slider {...settings} className="Slider">
                {cardItems.map((d) => (
                    <div className="Card">
                        <div>
                            <img src={SunLogo} alt="Placeholder image"></img>
                        </div>
                        <div className="CardInfo">
                            <h3>{d.title}</h3>
                            <p>{d.description}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Projects