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

const App=(props)=>{
    return (
        <div className={"container"}>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path={""} element={<Welcome/>}/>
                        <Route path={"/profile"}
                               element={<Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                            <Route path={"/dialogs/*"} element={<Dialogs state={props.state.dialogsPage}  dispatch={props.dispatch}/>}/>
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
