function Travel_Place(props) {
    return (
        <div className={"travel-component"}>
            <img src={props.item.img} alt="" className="travel-image"/>
            <div className="right-side">
                <div className="location-holder">
                    <img src="assets-traveljournal/coord-trimmy.png" alt="" className="coord-logo"/>
                    <div className="country">{props.item.location}</div>
                    <a href="" className="google-map">View on Google Maps</a>
                </div>
                <h3>Kvalvika Beach</h3>
                <div className="dates">14 Jan, 2019 - 21 Jan, 2019</div>
                <p className="descriptions">Kvalvika Beach, is a famous beach located on the north western side of lofoten,
                facing the mighty atlantic ocean and only accessible by foot. The drive to get there is a treat by itself,
                and the hike to the beach is relatively easy</p>
            </div>
        </div>
    )
}

export default Travel_Place