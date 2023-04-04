import memeData from "../data/meme-data.js";
import React from "react";

function Meme() {
    const memeArray = memeData.data.memes;

    const [memeImage, setMemeImage] = React.useState("")



    function newMeme() {
        let random_0_99 = Math.floor(Math.random() * 100);
        let randomMeme = memeArray[random_0_99].url
        setMemeImage(randomMeme)

    }



//Get a new meme image 🖼
    return (
            <main>
                <div  className={"meme-form"}>
                    <div className="top-row">
                        <input type="text" placeholder={"Top text"} className="top-text"/>
                        <input type="text" placeholder={"Bottom text"} className="bottom-text"/>
                    </div>
                    <button onClick={newMeme} className="new-meme">Get a new meme image 🖼</button>
                </div>
                <img  src={memeImage} alt="" className={"meme-image"}/>
            </main>
    )
}

export default Meme