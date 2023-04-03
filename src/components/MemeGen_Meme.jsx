function Meme() {
    return (
            <form action="" className={"meme-form"}>
                <div className="top-row">
                    <input type="text" className="top-text"/>
                    <input type="text" className="bottom-text"/>
                </div>
                <button className="new-meme">Get a new meme image 🖼</button>
            </form>
    )
}

export default Meme