import {useContext, useEffect, useState, useRef, startTransition} from 'react'

function Home(props) {

    const [formTest, setFormTest] = useState({firstName: "bob", lastName: ""})


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
            <div>{formTest.firstName || "null"}</div>
            <input type="text" placeholder={"first name"} name={"firstName"} value={formTest.firstName} onChange={handleForm}/>


        </>
    )
}

export default Home
