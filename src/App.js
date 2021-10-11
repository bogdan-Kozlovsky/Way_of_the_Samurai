import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route,BrowserRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";


function App() {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="box">
                    <Navigation/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
