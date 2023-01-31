import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function DashboardLayout(props){
    return(
        <>
            <Header/>
            <Sidebar/>
            <div className="main-content">
                { props.component }
                <Footer/>
            </div>
        </>
    )
}
export default DashboardLayout;