import img1 from "/assets-memegen/Troll-Face.png"
function MemeGen_Navbar() {
    return (
        <nav className={"meme-nav"}>
            <img src={img1} alt="" />
            <h3 className="title">Meme Generator</h3>
            <p>React Course - Project 3</p>
        </nav>
    )
}

export default MemeGen_Navbar