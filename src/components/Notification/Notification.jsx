import React from "react";
import css from "./Notification.module.css"


function Notifcation ({message}) {
    return(
        <p className={css.notification}>{message} </p>
    );
}

export default Notifcation;