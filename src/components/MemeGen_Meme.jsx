import memeData from "../data/meme-data.js";
import React from "react";

function Meme() {

    /**
     * Challenge:
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */


    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value,
            }
        })
    }

    function newMeme() {
        const memeArray = memeData.data.memes;
        const random_0_To_99 = Math.floor(Math.random() * 100);
        const url = memeArray[random_0_To_99].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url,
            }
        }
        )
    }

    return (
            <main>
                <div  className={"meme-form"}>
                    <div className="top-row">
                        <input type="text" name={"topText"} value={meme.topText} onChange={handleChange} placeholder={"Top text"} className="top-text"/>
                        <input type="text" name={"bottomText"} value={meme.bottomText} onChange={handleChange} placeholder={"Bottom text"} className="bottom-text"/>
                    </div>
                    <button onClick={newMeme} className="new-meme">Get a new meme image 🖼</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme-image"  alt={""}/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </main>
    )
}

export default Meme