export default function Airbnb_Card(props) {
        let badgeText;
        if (props.item.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (props.item.location === "Online") {
            badgeText = "ONLINE"
        }

    return (
            <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={`assets-airbnb/${props.item.coverImg}`} alt=""/>
                <div className="card-content">
                    <div className="rating-line">
                        <img src="assets-airbnb/Star1.png" alt=""/>
                        <div className="rating">{props.item.stats.rating}</div>
                        <div className="review gray">({props.item.stats.reviewCount})</div>
                        <div className="location gray">{props.item.location}</div>
                    </div>
                    <div className="description-line">{props.item.title}</div>
                    <div className="price-line">
                    <div className="price">From ${props.item.price}</div>
                        <div className="person gray">/ person</div>
                    </div>
                </div>
            </div>
    )
}