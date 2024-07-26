import Hero from './Hero/hero';
import './style.sass';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch('/logements.json')
        .then(response => response.json())
        .then(data => setLogements(data));
    }, []);

    return (
        <div className='home'>
            <Hero />
            <div className="home-content-container">
                {logements.map((logement) => (
                    <div key={logement.id} className='home-content'>
                        <Link to={`/logement/${logement.id}`} className='home-link'>
                            <div className='image-container'>
                                <img src={logement.cover} alt={logement.title} className='home-cover' />
                                <p className='home-title'>{logement.title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
