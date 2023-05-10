import {useState} from "react";

function useCounter() {
    const [count, setCount] = useState(0)

    function countUp() {
        setCount(prevState => prevState + 1)
    }
    return [count, countUp]
}
export default useCounter