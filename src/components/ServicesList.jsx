import ServicesData from "../data/servicesData.js";
import servicesData from "../data/servicesData.js";
import React, {Fragment} from "react";
import {Link, useLocation, useMatch, useResolvedPath} from "react-router-dom";
import ServiceDetail from "./ServiceDetail.jsx";

function ServicesList(props) {

    const match = useResolvedPath()
    const location = useLocation();
    console.log(location.pathname)
    
   const services = servicesData.map(item => {
        return (
            <Fragment key={item._id}>
                <Link to={`/services/${item._id}`}>{item.name}</Link>
                <p>price: {item.price}</p>
            </Fragment>
        )
    })

    return (
        <div className="col">
            <h3 className={"light-mode"}>services list page </h3>
            {services}

        </div>
    )
}

export default ServicesList
