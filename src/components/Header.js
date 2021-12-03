import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Darkbutton from '../components/Darkbutton';
import logo from '../public/assets/images/logobroglie.png'

class Header extends Component {
    state = {
        isOpen: false,
        isActive: false,
        isNoti: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    toggleActive = () => this.setState({ isActive: !this.state.isActive });
    toggleisNoti = () => this.setState({ isNoti: !this.state.isNoti });

    render() {
        const navClass = `${this.state.isOpen ? " nav-active" : ""}`;
        const buttonClass = `${this.state.isOpen ? " active" : ""}`;
        const searchClass = `${this.state.isActive ? " show" : ""}`;
        const notiClass = `${this.state.isNoti ? " show" : ""}`;

        return (
            <div className="nav-header bg-white shadow-xs border-0">
                <div className="nav-top">
                    <Link to="/"><img src={logo} alt="Logo" height="50" />;
                        <span className="d-inline-block fredoka-font ls-1 font-xxl black mb-0 text-black-500">Les Broglie</span>
                    </Link>
                </div>

                <span className={`p-2 pointer text-center ms-auto menu-icon ${notiClass}`} id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.toggleisNoti}><span className="dot-count bg-warning"></span><i className="feather-bell font-xl text-current"></i></span>
                <div className={`dropdown-menu p-4 right-0  border-0 shadow-lg ${notiClass}`} aria-labelledby="dropdownMenu3">
                    <h4 className="fw-700 font-xss mb-4">Notification</h4>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Hendrix Stamp <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 3 min</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">There are many variations of pass..</h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Goria Coast <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 2 min</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                    </div>

                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Henry de Boisseguin <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 1 min</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Victor Exrixon <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 30 sec</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                    </div>
                </div>
                <Link to="/defaultmessage" className="p-2 text-center ms-3 menu-icon chat-active-btn"><i className="feather-message-square font-xl text-current"></i></Link>
                <Darkbutton />
                <Link to="/defaultsettings" className="p-0 ms-3 menu-icon"><img src="assets/images/user.png" alt="user" className="w40 mt--1" /></Link>

                <nav className={`navigation scroll-bar ${navClass}`}>
                    <div className="container ps-0 pe-0">
                        <div className="nav-content">
                            <div className="nav-wrap bg-white bg-transparent-card  shadow-xss pt-3 pb-1 mb-2 mt-2">
                                <div className="nav-caption fw-600 font-xssss text-grey-500"></div>
                                <ul className="mb-1 top-content">
                                    <li className="logo d-none d-xl-block d-lg-block"></li>
                                    <li><Link to="/home" className="nav-content-bttn open-font"><i className="feather-navigation btn-round-md bg-red-gradiant me-3"></i><span>Nouveautés</span></Link></li>
                                    <li><Link to="/defaultstorie" className="nav-content-bttn open-font"><i className="feather-camera btn-round-md bg-gold-gradiant me-3"></i><span>Albums</span></Link></li>
                                    <li><Link to="/userpage" className="nav-content-bttn open-font"><i className="feather-user btn-round-md bg-primary-gradiant me-3"></i><span>Mon profil </span></Link></li>
                                    <li><Link to="/defaultemailbox" className="nav-content-bttn open-font"><i className="font-xl btn-round-md bg-blue-gradiant feather-inbox me-3"></i><span>Discussions</span><span className="circle-count bg-warning mt-1">2</span></Link></li>
                                    <li><Link to="/defaulthotel" className="nav-content-bttn open-font"><i className="font-xl btn-round-md bg-blue-gradiant feather-home me-3"></i><span>Ou sont-ils ?</span></Link></li>
                                    <li><Link to="/defaultevent" className="nav-content-bttn open-font"><i className="font-xl btn-round-md bg-blue-gradiant feather-map-pin me-3"></i><span>Évenements</span></Link></li>
                                    <li><Link to="/family" className="nav-content-bttn open-font"><i className="font-xl btn-round-md bg-blue-gradiant feather-link me-3"></i><span>Qui est qui ?</span></Link></li>
                                    <li><a href="http://maisondebroglie.com/" target="_blank" className="nav-content-bttn open-font"><i className="font-xl btn-round-md bg-blue-gradiant feather-book me-3"></i><span>Histoire des Broglie</span></a></li>
                                    
                                </ul>
                            </div>
                            <div className="nav-wrap bg-white bg-transparent-card  shadow-xss pt-3 pb-1">
                                <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span>Mon compte</div>
                                <ul className="mb-1">
                                    <li className="logo d-none d-xl-block d-lg-block"></li>
                                    <li><Link to="/defaultsettings" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-settings me-3 text-grey-500"></i><span>Paramètres</span></Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className={`app-header-search ${searchClass}`}>
                    <form className="search-form">
                        <div className="form-group searchbox mb-0 border-0 p-1">
                            <input type="text" className="form-control border-0" placeholder="Search..." />
                            <i className="input-icon">
                                <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline"></ion-icon>
                            </i>
                            <span className="ms-1 mt-1 d-inline-block close searchbox-close">
                                <i className="ti-close font-xs" onClick={this.toggleActive}></i>
                            </span>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Header;