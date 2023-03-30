export default function Airbnb_Card(props) {
        let badgeText;
        if (props.openspots === 0) {
            badgeText = "SOLD OUT"
        } else if (props.location === "Online") {
            badgeText = "ONLINE"
        }

    return (
            <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={`assets-airbnb/${props.image}`} alt=""/>
                <div className="card-content">
                    <div className="rating-line">
                        <img src="assets-airbnb/Star1.png" alt=""/>
                        <div className="rating">{props.rating}</div>
                        <div className="review gray">({props.reviews})</div>
                        <div className="location gray">{props.location}</div>
                    </div>
                    <div className="description-line">{props.description}</div>
                    <div className="price-line">
                    <div className="price">From ${props.price}</div>
                        <div className="person gray">/ person</div>
                    </div>
                </div>
            </div>
    )
}