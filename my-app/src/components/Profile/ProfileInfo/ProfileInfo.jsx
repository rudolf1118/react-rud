import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo=()=>{

    return (<div>
            <img className={classes.imagecenter}
                 src={"https://images.wallpaperscraft.ru/image/single/les_derevya_tuman_110131_2560x1080.jpg"}
                 alt={"Img"} />
            <img className={classes.avatar} src={"https://images.unsplash.com" +
                "/photo-1635003913011-95971abba560?ixlib=rb-1" +
                ".2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlf" +
                "Hx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"} alt={""}/>
            <div className={classes.name}>
                Rud Harutyunyan
            </div>
        </div>
    )
};

export default ProfileInfo;