import memeData from "../data/meme-data.js";
import React from "react";

function Meme() {
    const memeArray = memeData.data.memes;

    const [result, fun] = React.useState("yes")
        console.log(result);



        function newMeme() {
            // let random_0_99 = Math.floor(Math.random() * 100);


        }

//Get a new meme image 🖼
    return (
            <main>
                <div  className={"meme-form"}>
                    <div className="top-row">
                        <input type="text" placeholder={"Top text"} className="top-text"/>
                        <input type="text" placeholder={"Bottom text"} className="bottom-text"/>
                    </div>
                    <button onClick={newMeme} className="new-meme">{result}</button>
                </div>
                <img  src="" alt="" className={"meme-image"}/>
            </main>
    )
}

export default Meme