import {Link, useMatch, useMatches} from "react-router-dom";
import React from "react";

function RoutesHeader(props) {


    return (
        <div className={'nav-link'}>
            <Link to={"/"}>home</Link>
            <Link to={"/testing"}>testing</Link>

        </div>
    )
}

export default RoutesHeader
