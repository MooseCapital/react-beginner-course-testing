function Contact_Card(props) {
    console.log(props)

    return (
        <div className="contact-card">
            <img className="cat-image" src={props.img} alt=""/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contact_Card;