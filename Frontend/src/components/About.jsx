// About.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // Ensures the content fills at least the full viewport height
            padding: '20px',
            textAlign: 'left'
        }}>
            <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', color: '#ec4899', marginBottom: '20px' }}>Welcome to Book Haven</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#666', marginBottom: '15px', textAlign: 'justify' }}>Explore a world of diverse genres at BookVerse, where we specialize in a wide range of books. Whether you're interested in IT sector insights, captivating storybooks, thrilling entertainment, immersive novels, sports triumphs, dance rhythms, soulful songs, or enriching cultural explorations, our curated selections cater to every passion and curiosity.</p>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#666', marginBottom: '15px', textAlign: 'justify' }}>Each book is carefully selected to inspire, inform, and entertain. With easy access to explore and purchase, finding your next favorite read is simple and enjoyable. Let Book Haven be your guide to discovering new worlds and expanding your horizons across a rich tapestry of literature and knowledge.</p>
                <Link to="/" style={{ display: 'inline-block', marginTop: '20px', color: '73224B', textDecoration: 'none', fontSize: '1rem' }}>Back to Home</Link>
            </div>
        </div>
    );
}

export default About;






