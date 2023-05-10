import {useState, useEffect, useRef} from "react";

function useTypingGame(startTime = 10) {
    const STARTING_TIME = startTime;
     const [timeRemaining, setTimeRemaining] = useState(startTime)
    const [isStarted, setIsStarted] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    const textRef = useRef(null);
    const [textData, setTextData] = useState("")

    const [buttonDisabled, setButtonDisabled] = useState(false)

    useEffect(() => {
      if (timeRemaining > 0 && isStarted) {
          setTimeout(() => {
                setTimeRemaining(prev => prev - 1)
            }, 1000)
      }
      if (timeRemaining <= 0) {
        endGame();
        //disable text area, which halts running handle and counting more words, we can set boolean state inside element, no queryselector!
      }
        console.log("game ran")

    }, [timeRemaining, isStarted])

    function startGame() {
        //disable button until time = 0
        setIsStarted(true)
        setButtonDisabled(true)
        setTextData("");
        setTimeRemaining(STARTING_TIME)
        textRef.current.disabled = false;
        textRef.current.focus()
    }

    function endGame() {
        setIsStarted(false)
        setWordCount(getWordCount(textData))
        setButtonDisabled(false)
    }

    function handleChange(event) {
        setTextData(event.target.value);
    }

    function getWordCount(word) {
        const wordArr = word.trim().split(" ");
        return wordArr.filter(word => word !== '').length
    }








    return [wordCount, setWordCount, isStarted, setIsStarted, timeRemaining, setTimeRemaining, STARTING_TIME, textData, textRef, handleChange, startGame  ]
}

export default useTypingGame