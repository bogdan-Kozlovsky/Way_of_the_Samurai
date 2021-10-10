import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="box">
                <Navigation/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
