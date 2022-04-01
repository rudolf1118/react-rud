import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, Link,} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Welcome from "./Welcome/Welcome"
import Found from "./Welcome/Found/Found";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App=(props)=>{
    debugger
    return (
        <div className={"container"}>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path={""} element={<Welcome/>}/>
                        <Route path={"/profile"}
                               element={<Profile store={props.store}/>}/>
                            <Route path={"/dialogs/*"} element={<DialogsContainer store={props.store}/>}/>
                        <Route path={"/news"} element={<News/>}/>
                        <Route path={"/music"} element={<Music/>}/>
                        <Route path={"/*"} element={<Found/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default App;
