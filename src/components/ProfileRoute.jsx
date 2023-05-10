import {Link, Route, Routes} from "react-router-dom";
import SettingsRoute from "./SettingsRoute.jsx";
import InfoRoute from "./InfoRoute.jsx";
import React from "react";

function ProfileRoute(props) {


    return (
        <div className="col">
            <h3>profile header</h3>
            <ul className={"col"}>
                <Link to={"/profile/settings"}>settings</Link>
                <Link to={"/profile/info"}>info</Link>

            </ul>

        </div>

    )
}

export default ProfileRoute
