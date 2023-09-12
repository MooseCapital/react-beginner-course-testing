import {useContext, useEffect, useState, useRef, startTransition} from 'react'
import PropTypes from "prop-types";
import {AllContext} from "./ContextProvider.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleColor} from "../features/test/testSlice.js";

function Home(props) {


    const dispatch = useDispatch()
    const testState = useSelector((store) => store.test);

    const [formTest, setFormTest] = useState({firstName: "", lastName: ""})

    function handleForm(event) {
        setFormTest(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
            <h3>home page</h3>

            <button onClick={() => dispatch(toggleColor())}>test</button>
            <div>{`${formTest.firstName} ${formTest.lastName}`}</div>
            <input type="text" placeholder={"first name"} name={"firstName"} value={formTest.firstName} onChange={handleForm}/>
            <input type="text" placeholder={"last name"} name={"lastName"} value={formTest.lastName} onChange={handleForm}/>
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
