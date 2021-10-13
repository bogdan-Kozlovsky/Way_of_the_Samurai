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


function App() {

    // данные для постов
    const posts = [
        {message: 'Bogdan', likes: 1},
        {message: 'Vasia', likes: 2},
        {message: 'Vlad', likes: 3},
    ]

// данные для компонента Диалог данные для отрисовки юзера
    const users = [
        {name: 'Bogdan', id: 1},
        {name: 'Vasia', id: 2},
        {name: 'Vlad', id: 3},
        {name: 'Maxs', id: 4}
    ]

    // данные для компонента Диалог для отрисовки смс
    const messages = [
        {message: 'Hello Bogdan'},
        {message: 'Hello Vasia'},
        {message: 'Hello Vlad'},
        {message: 'Hello Maxs'},
    ]

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="box">
                    <Navigation/>
                    <Route path={'/profile'} render={() => <Profile posts={posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs users={users} messages={messages}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
