function Travel_Place(props) {
    return (
        <div className={"travel-component"}>
            <img src={props.item.img} alt="" className="travel-image"/>
            <div className="right-side">
                <div className="location-holder">
                    <img src="assets-traveljournal/coord-trimmy.png" alt="" className="coord-logo"/>
                    <div className="country">{props.item.location}</div>
                    <a href={props.item.maps_link} className="google-map">View on Google Maps</a>
                </div>
                <h3>{props.item.title}</h3>
                <div className="dates">{props.item.start_date} - {props.item.end_date}</div>
                <p className="descriptions">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Travel_Place