import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/news">News</NavLink>
                </nav>
                <h1>Home Page</h1>
                <p>Some introductory text about this site.</p>
            </div>
        );
    }
}

export default Home;
