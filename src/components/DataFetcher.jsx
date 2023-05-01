import {Fragment, useEffect, useState} from "react";

function DataFetcher(props) {
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let subscribed = true;

        async function getStuff()
        {
            let res = await fetch(props.url);
            let data1 = await res.json();
            if (subscribed) {
                //set state with data
                setData(data1)
                setIsLoaded(true)
                console.log(data1);
            }
        }
        getStuff()
        return () => {
            console.log("cancelled")
            let subscribed = false
        }
    }, [])

    return (
        <>
            {props.render(data, isLoaded)}
        </>
    )
}

export default DataFetcher



