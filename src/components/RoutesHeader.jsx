import {Link, useMatch, useMatches} from "react-router-dom";
import React from "react";

function RoutesHeader(props) {

    // const match = useMatch()
    // console.log(match)
    return (
        <header className={"routes-header"}>
            <Link to={"/"}><button>home</button></Link>
            <Link to={"/products"}><button>products</button></Link>

        </header>
    )
}

export default RoutesHeader
