import {Link} from "react-router-dom";
import React from "react";

function RoutesHeader(props) {


    return (
        <header className={"routes-header"}>
            <Link to={"/"}><button>home</button></Link>
            <Link to={"/services"}><button>services</button></Link>

        </header>
    )
}

export default RoutesHeader
