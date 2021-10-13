import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route, BrowserRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import User from "./components/Dialogs/User/User";


function App(props) {


    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="box">
                    <Navigation/>
                    <Route path={'/profile'} render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
