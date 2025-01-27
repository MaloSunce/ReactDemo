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
            description: 'PlantBuddies is mobile application developed with Kotlin and Jetpack Compose. ' +
                'It allows users to search for and read about plants from PerenualAPI in a user friendly and esthetic manner.',
        },
        {
            id: 2,
            title: 'MaloSunce',
            description: 'This website is a personal project developed with ReactJS. This site serves as a small' +
                ' demonstration of my proficiency in React, as well as way of conveying my other skills in a bit more entertaining way than your' +
                ' standard resume.',
        },
        {
            id: 3,
            title: 'IceMap',
            description: 'IceMap is a system developed to determine the thickness and safety of ice on Norwegian lakes. It comes with a ' +
                'a Python server, mobile application developed with Dart and Flutter, and a custom color coded map solution.',
        },
        {
            id: 4,
            title: 'MyGamingList',
            description: 'MyGamingList is a website developed with HTML, CSS and JavaScript, alongside a Go server. ' +
                'The website retrieves data from the IGDB API and allows users to rate and bookmark various games, similar to' +
                'what IMDB does for movies. ',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ],
    };

    return (
        <div className="Projects" id="Projects">
            <h2 style={{ paddingTop: '20px' }}>Projects</h2>
            <Slider {...settings}>
                {cardItems.map((cardItem, index) => (
                    <div
                        className={`Card ${index === 1 ? 'Highlighted' : ''}`} // Highlight the project card about this website1
                        style={index === 1 ? { backgroundColor: 'lightblue' } : {}}>
                        <img src={SunLogo} alt="Placeholder image" />
                        <div className="CardInfo">
                            <h3>{cardItem.title}</h3>
                            <p style={{marginTop: '5px'}}>{cardItem.description}</p>
                        </div>
                        <button className="ReadMoreBtn">Read more</button>
                    </div>
                ))}
            </Slider>
        </div>
    );
}


export default Projects