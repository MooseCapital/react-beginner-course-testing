import memeData from "../data/meme-data.js";
import React from "react";

function Meme() {



    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
    })



    function newMeme() {
        const memeArray = memeData.data.memes;
        const random_0_To_99 = Math.floor(Math.random() * 100);
        const url = memeArray[random_0_To_99].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
            <main>
                <div  className={"meme-form"}>
                    <div className="top-row">
                        <input type="text" placeholder={"Top text"} className="top-text"/>
                        <input type="text" placeholder={"Bottom text"} className="bottom-text"/>
                    </div>
                    <button onClick={newMeme} className="new-meme">Get a new meme image 🖼</button>
                </div>
                <img  src={meme.randomImage} alt="" className={"meme-image"}/>
            </main>
    )
}

export default Meme