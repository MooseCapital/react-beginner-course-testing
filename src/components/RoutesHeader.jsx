import {Link, useMatch, useMatches} from "react-router-dom";
import React from "react";

function RoutesHeader(props) {


    return (
        <div className={'nav-link'}>
            <Link to={"/"}>home</Link>
            <Link to={"/testing"}>testing</Link>
            <Link to={"/products"}>products</Link>
            <Link to={"/ErrorPage"}>Error Page</Link>
        </div>
    )
}

export default RoutesHeader
