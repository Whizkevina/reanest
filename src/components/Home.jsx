import React, { Component } from 'react';
import '../components/layouts/Dashboard.scss';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="gridContainer">
                <p>Welcome to Reanest Test</p>
                Access the Dashboard <Link to="/dashboard">Here</Link>
            </div>
        );
    }
}

export default Home;