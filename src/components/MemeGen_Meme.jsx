import React, {useEffect} from "react";

function Meme() {

    const [allMemes, setAllMemes] = React.useState([])

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "", //https://i.imgflip.com/3oevdk.jpg
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

  /*   useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))
        },[])
 */
    useEffect(() => {
        async function getMemes() {
            try {
                let res = await fetch("https://api.imgflip.com/get_memes");
                let data = await res.json();
                setAllMemes(data.data.memes)
            }
            catch (err) {
                throw new Error(err)
            }
        }
        getMemes()
    }, [])


    function newMeme() {
        // const memeArray = allMemes.data.memes;
        const random_0_To_99 = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[random_0_To_99].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url,
            }
        })
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