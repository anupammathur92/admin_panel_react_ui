import React from 'react';

function Dashboard(){
    return(
        <>
            <div className="page-title col-sm-12">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3 m-0">Dashboard</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="box bg-white">
                            <div className="box-row">
                                <div className="box-content">
                                    <h6>Today Users</h6>
                                    <p className="h1 m-0">12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="box bg-white">
                            <div className="box-row">
                                <div className="box-content">
                                    <h6>Product Sold</h6>
                                    <p className="h1 m-0">1200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="box bg-white">
                            <div className="box-row">
                                <div className="box-content">
                                    <h6>New Customer</h6>
                                    <p className="h1 m-0">2000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="box bg-white">
                            <div className="box-row">
                                <div className="box-content">
                                    <h6>New Visitors</h6>
                                    <p className="h1 m-0">720</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;