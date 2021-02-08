import React, {Component} from 'react';
import '../components/layouts/Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img1 from '../Assets/img/reanest-screenshot.png';
import Img2 from '../Assets/img/reanest-screenshot-2.png';

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
                    <div className="sidenav__profile">
                        <img src="" alt="profile-img"/>
                        <p>Elon Musk A</p>
                        <p>ID: 9AD34990</p>
                    </div>
                    <ul className="sidenav__list">
                        <li className="sidenav__list-item"><FontAwesomeIcon icon="Home"/> Home</li>
                        <li className="sidenav__list-item">Buy Airtime</li>
                        <li className="sidenav__list-item">Send Money</li>
                        <li className="sidenav__list-item">Bills Payment</li>
                        <li className="sidenav__list-item">Free Credit Report</li>
                        <li className="sidenav__list-item">Complaints</li>
                        <li className="sidenav__list-item">Contact Us</li>
                        <li className="sidenav__list-item">Log out</li>
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

                <div className="card">
                    <img src={Img1} alt="img" className="card__img"/>
                </div>
                <div className="card">
                    <img src={Img2} alt="Img2" className="card__img2"/>
                </div>
    
                </main>


            </div>
        );
    }
}

export default Dashboard;