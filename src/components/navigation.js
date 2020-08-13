import React from 'react';
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/case-studies" exact>
                                    Case Studies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/approach" exact>
                                    Approach
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" exact>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-us" exact>
                                    About us
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contacts</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/contact" exact>
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/audit" exact>
                                        Get free audit
                                    </NavLink>
                                </li>
                            </ul>

                            <ul className="nav-info">
                                <li className="nav-info-label">Headquarters</li>
                                <li>Via Apiro 18</li>
                                <li>00138 - Roma </li>
                                <li>Italy</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>+39 3403678573</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Legal</li>
                                <li>Privacy & Cookies</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;