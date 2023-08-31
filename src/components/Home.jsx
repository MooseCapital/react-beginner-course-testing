import {useContext, useEffect, useState, useRef, startTransition} from 'react'
import PropTypes from "prop-types";

function Home(props) {

    const [formTest, setFormTest] = useState({firstName: "", lastName: ""})
    const [test, setTest] = useState({num: 1})

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
            <button onClick={() => 1}>test</button>
            <div>{`${formTest.firstName} ${formTest.lastName}`}</div>
            <input type="text" placeholder={"first name"} name={"firstName"} value={formTest.firstName} onChange={handleForm}/>
            <input type="text" placeholder={"last name"} name={"lastName"} value={formTest.lastName} onChange={handleForm}/>
            <div>{props.name}</div>
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
