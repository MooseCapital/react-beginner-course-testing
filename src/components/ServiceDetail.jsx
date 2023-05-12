import {Link, useNavigate, useParams} from "react-router-dom";
import {Fragment} from "react";
import servicesData from "../data/servicesData.js";

function ServiceDetail(props) {
    const navigate = useNavigate()
    const param = useParams();

    const thisService = servicesData.find(service => service._id === param.serviceId )

    function handleChange() {
        console.log("changing...")
            navigate("/services")
    }

    return (
        <Fragment>
            <h3>service details</h3>
            <h3>{thisService.name} price - {thisService.price}</h3>
            <p>{thisService.description}</p>
            <button onClick={handleChange}>go back to settings</button>

        </Fragment>
    )
}

export default ServiceDetail
