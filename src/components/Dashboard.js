import React, {Component} from 'react';
import '../components/layouts/Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dashboard extends Component {
    render() {
        return (
            <div className="grid-container">
                    <div className="menu-icon">
                        <FontAwesomeIcon icon="bars" />
                    </div>

                <header className="header">
                    <div className="header__search">Search...</div>
                </header>
                <aside className="sidenav">
                    <div className="sidenav__close-icon">

                        <FontAwesomeIcon icon="times" />
                    </div>
                    <ul className="sidenav__list">
                        <li className="sidenav__list-item">Item One</li>
                        <li className="sidenav__list-item">Item Two</li>
                        <li className="sidenav__list-item">Item Three</li>
                        <li className="sidenav__list-item">Item Four</li>
                        <li className="sidenav__list-item">Item Five</li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="main-overview">
                        <div className="overview-card">
                            <div className="overview-card__icon">Your Wallet</div>
                            <div className="overview-card__info">Feb 2 2021</div>
                            <div className="overview-card__main">N14.28</div>
                            <p><FontAwesomeIcon icon="dollar-sign"/> </p>
                        </div>
                        <div className="overview-card-two">
                            <div className="content">
                                <p className="text-center">Need cash instantly</p>
                                <button type="submit" className="buttonBtn">Apply for a loan</button>
                            </div>
                        </div>
                    </div>

    
                </main>


            </div>
        );
    }
}

export default Dashboard;