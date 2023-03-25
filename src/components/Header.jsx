function Header() {
    return (
        <header>
            <img src="src/assets/moose.png" alt=""/>
            <h2 className={"name"} >Moose Capital</h2>
            <div className={"job"}>Fullstack Developer</div>
            <div className={"website"}>Moose.io</div>
            <div className="buttons">
                <button className="email-btn">
                    <span className="email-icon"></span>
                Email</button>
                <button className="linkedin-btn">
                    <span className="linked-icon"></span>
                LinkedIn</button>
            </div>
        </header>
    )
}
export default Header;