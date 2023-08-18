import {useContext, useEffect, useState, useRef, startTransition} from 'react'

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

    return (
        <>
            <h3>home page</h3>
            <button onClick={() => 1}>test</button>
            <div>{`${formTest.firstName} ${formTest.lastName}`}</div>
            <input type="text" placeholder={"first name"} name={"firstName"} value={formTest.firstName} onChange={handleForm}/>
            <input type="text" placeholder={"last name"} name={"lastName"} value={formTest.lastName} onChange={handleForm}/>

        </>
    )
}

export default Home
