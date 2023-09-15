import {useContext, useEffect, useState, useRef, Profiler, useMemo} from 'react'
import {UseFetch} from "./UseFetch.jsx";
import {Navigate} from "react-router-dom";
import {AllContext} from "./ContextProvider.jsx";



function Testing(props) {
    /* let [fetchData, errorHandler, loading] = UseFetch("https://picsum.photos/v2/list?page=4&limit=10");

    if (errorHandler) {
        return <div> error... {errorHandler}</div>
    } else if(loading) {
        return <div>loading...</div>
    } */
    /* let testNum = 0
    for (let i = 0; i < 100000000; i++)   {
        testNum = i;
    } */
 /*    const [unchanging, setUnchanging] = useState(null)

    const [reTest, setReTest] = useState(0)
    const Num = useMemo(() => {
        let tempNum = 0;
        for (let i = 0; i < 100000000; i++) {
            tempNum = i;
        }
        return tempNum;
    }, [unchanging]); */


    return (
        <>
            {/* <img src={fetchData[2]?.download_url} className={"test-image"} alt=""/> */}
{/* 
            <div>test num: {Num}</div>
            <button onClick={() => setReTest(prevState => prevState + 1)}>test button: {reTest}</button> */}
            
        </>
    )
}

export default Testing
