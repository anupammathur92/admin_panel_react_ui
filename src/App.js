import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import Profile from './components/Profile';
import NoPage from './components/NoPage';
import { routeConstants } from './routeConstants';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path={routeConstants.INDEX_PAGE} element={<Login/>}/>
            <Route path={routeConstants.DASHBOARD} element={<DashboardLayout component={<Dashboard/>}/>}/>
            <Route path={routeConstants.PROFILE} element={<DashboardLayout component={<Profile/>}/>}/>
            <Route path={routeConstants.WILDCARD} element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;