import {Link, useParams} from "react-router-dom";
import {Fragment} from "react";
import servicesData from "../data/servicesData.js";

function ServiceDetail(props) {

    const param = useParams();

    const thisService = servicesData.find(service => service._id === param.serviceId )

    return (
        <Fragment>
            <h3>service details</h3>
            <h3>{thisService.name} price - {thisService.price}</h3>
            <p>{thisService.description}</p>


        </Fragment>
    )
}

export default ServiceDetail
