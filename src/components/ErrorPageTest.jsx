import {useContext, useEffect, useState, useRef} from 'react'
import {Navigate} from "react-router-dom";

function ErrorPageTest(props) {

    const [countDown, setCountDown] = useState(5)

    useEffect(() => {
       let timeout = setTimeout(() => setCountDown((prev) => prev - 1 ),1000)

        return () => {
            clearTimeout(timeout)
        }
    },[countDown])

    return (
        <>
        <div>Page does not exist. </div>
        <div>Redirecting in {countDown}..</div>
        {countDown === 0 &&
        <Navigate to="/" replace={true} />
        }
        </>
    )
}

export {ErrorPageTest}




//validate prop types are correct variable passed in
// https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/
ErrorPageTest.propTypes = {
//item: PropTypes.object

}

//set default prop if none are passed in, (will always render default)
ErrorPageTest.defaultProps = {

}