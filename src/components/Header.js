import React from 'react';
import { Link } from "react-router-dom";
import { routeConstants } from '../routeConstants';

function Header(){
    return(
        <div className="navbar navbar-expand flex-column flex-md-row align-items-center navbar-custom">
            <div className="container-fluid">
                <Link to={routeConstants.DASHBOARD} className="navbar-brand mr-0 mr-md-2 logo">
                    <img src="images/logo.svg" alt="Logo"/>
                </Link>
                <ul className="navbar-nav flex-row ml-auto d-flex align-items-center list-unstyled topnav-menu mb-0">
                    <li className="dropdown user-link">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                            aria-haspopup="false" aria-expanded="false">
                            <i className="far fa-cog"></i>
                            <span className="noti-icon-badge"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                            <Link to={routeConstants.PROFILE} className="dropdown-item"><i className="fal fa-user"></i> My Profile</Link>
                            <div className="dropdown-divider"></div>
                            <Link to={routeConstants.INDEX_PAGE} className="dropdown-item"><i className="fal fa-sign-out"></i> Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;