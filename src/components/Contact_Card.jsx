function Contact_Card(props) {
    //destructuring for components -> we can put the object in the parenthesis above, to never have dot notation, or
        //we destructure after, so we have dot notation access, and can simply use one word access
        //Also it can be useful for using dot notation, simply because we know what is passed in by props.img and what we have created inside here normally
    const {img,name,phone,email} = props;
    console.log(img)

    return (
        <div className="contact-card">
            <img className="cat-image" src={img} alt=""/>
            <h3>{name}</h3>
            <div className="info-group">
                <p>{phone}</p>
            </div>
            <div className="info-group" >
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact_Card;