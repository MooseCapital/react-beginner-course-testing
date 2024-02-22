import {useContext, useEffect, useState, useRef, startTransition} from 'react'
import PropTypes from "prop-types";
import {localStore, sessionStore} from "../store.js";

function Home(props) {


    const [formTest, setFormTest] = useState({firstName: "", lastName: ""})

    function handleForm(event) {
        setFormTest(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const {colorMode, toggleColorMode} = localStore((state) =>({
            colorMode: state.colorMode,
            toggleColorMode: state.toggleColorMode
    }));

    const {counter, incrementCounter} = sessionStore((state) =>({
            counter: state.counter,
            incrementCounter: state.incrementCounter
    }));

    return (
        <>
            <h3>home page</h3>

            <button className={'button'} onClick={toggleColorMode}>toggle color mode</button>
            <div>{`${formTest.firstName} ${formTest.lastName}`}</div>
            <button className={'button'} onClick={incrementCounter} >{`increase counter: ${counter}`}</button>
        </>
    )
}

export default Home

Home.propTypes = {
name: PropTypes.string
}

Home.defaultProps = {
name: "gary",
}
