import React from 'react';
import { Link } from "react-router-dom";
import { routeConstants } from '../routeConstants';

function Profile(){

    return(
        <>
        <div className="page-title col-sm-12">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="h3 m-0">Profile</h1>
                </div>
                <div className="col-md-6">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb m-0 p-0">
                            <li className="breadcrumb-item"><Link to={routeConstants.DASHBOARD}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Profile</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <div className="col-sm-12">
            <div className="row">
                <div className="col-lg-12 col-md-4 mb-4">
                    <div className="box bg-white">
                        <div className="box-row flex-wrap">
                            <div className="profile-information">
                                <div className="user-icon"><img src="images/avatar-1.jpg" alt="img"/></div>
                                <div className="user-name">
                                    <h5>John S</h5>
                                    <span className="h6 text-muted">Administrator</span>
                                    <span className="h6 text-muted">Jaipur, India</span>
                                </div>
                                <div className="my-3">
                                    <a href="profile-edit.html" className="btn small">Edit</a>
                                </div>
                            </div>
                        </div>
                        <div className="box-title pb-0">
                            <h5>About</h5>
                        </div>
                        <div className="box-row">
                            <div className="box-content text-muted">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                        <div className="box-title pb-0">
                            <h5>Contact Information</h5>
                        </div>
                        <div className="box-row flex-wrap user-contact">
                            <div className="d-flex">
                                <label>Email</label>
                                <span className="text-muted">xyz123@gmail.com</span>
                            </div>
                            <div className="d-flex">
                                <label>Phone</label>
                                <span className="text-muted">(123) 123 1234</span>
                            </div>
                            <div className="d-flex">
                                <label>Address</label>
                                <span className="text-muted">1975 Boring Lane, San Francisco, California, United States - 94108</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;