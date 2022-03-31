import React from "react";
import classes from "./welcome.module.css";

const welcome=()=>{
    return (<div className={classes.Welcome}>Welcome to the Messanger
    <div>
        <img src={"https://images.unsplash.com/photo-1628520382479-79ca8477d0e8?ixlib=rb-1.2.1&ixid=Mn" +
        "wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=for" +
        "mat&fit=crop&w=687&q=80"}/>
    </div>
<div className={classes.item}> Product by Rud</div>
</div>
    )

}
export default welcome;