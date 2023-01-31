import React from 'react';
import { Link } from "react-router-dom";
import { routeConstants } from '../routeConstants';

function Sidebar(){

    return(
        <>
            <div className="dashboard-menu niceScroll">
                <div className="nav-menu">
                    <div className="user-info">
                        <div className="user-icon"><img src="images/avatar-1.jpg" alt="img"/></div>
                        <div className="user-name">
                            <h5>John S</h5>
                            <span className="h6 text-muted">Administrator</span>
                        </div>
                    </div>
                    <ul className="list-unstyled nav">
                        <li className="nav-item"><span className="menu-title text-muted">NAVIGATION</span></li>
                        <li className="nav-item"><Link to={routeConstants.DASHBOARD} className="nav-link"><i className="fal fa-home-alt"></i> Dashboard</Link></li>
                        <li className="nav-item"><span className="menu-title text-muted">Components</span></li>
                        <li className="nav-item"><a href="#" className="nav-link active"><i className="fal fa-file-alt"></i> Base </a>
                            <ul className="sub-menu">
                                <li className="nav-item"><a href="#" className="nav-link">Breadcrumb</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Cards</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a href="#" className="nav-link"><i className="fal fa-columns"></i> Layout </a>
                            <ul className="sub-menu">
                                <li className="nav-item"><a href="#" className="nav-link">Full Width Layout</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Boxed Layout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;