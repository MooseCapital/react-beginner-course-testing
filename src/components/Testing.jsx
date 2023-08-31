import {useContext, useEffect, useState, useRef} from 'react'

function useFetch(fetchLink) {
    const [fetchData, setFetchData] = useState(null)
    const [errorHandler, setErrorHandler] = useState(null)
    const [loading, setLoading] = useState(true)
        useEffect(() => {
            let subscribed = true;

                async function getData() {
                    let res = await fetch(fetchLink, { mode: "cors" });
                    if (res.status >= 400) {
                        setErrorHandler(prevState => res.status)
                       throw new Error("server error")
                    }
                    let data = await res.json();
                    if (subscribed ) {
                        setErrorHandler(prevState => null)
                        setLoading(prevState => false)
                        setFetchData(prevState => data)
                        console.log(data)
                    }
                }
                getData()

            return () => {
                subscribed = false;
            }
        }, [])
    return {fetchData, errorHandler, loading}
}

function Testing(props) {
     let {fetchData, errorHandler, loading} = useFetch("https://picsum.photos/v2/list?page=4&limit=10")


    if (errorHandler) {
        return <div>error.. {errorHandler}</div>
    } else if(loading) {
        return <div>loading...</div>
    }

    return (
        <>
            <img src={fetchData[2].download_url} className={"test-image"} alt=""/>


        </>
    )
}

export default Testing
