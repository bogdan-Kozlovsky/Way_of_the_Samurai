import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import User from "./components/Dialogs/User/User";



function App(props) {

    return (
        <div className="wrapper">
            <Header/>
            <div className="box">
                <Navigation/>
                <Route path={'/profile'} render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>

            </div>
        </div>
    );
}

export default App;
