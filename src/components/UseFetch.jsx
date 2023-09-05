import {useContext, useEffect, useState, useRef} from 'react'

function UseFetch(fetchLink) {
    const [fetchData, setFetchData] = useState("")
    const [errorHandler, setErrorHandler] = useState(false)
    const [loading, setLoading] = useState(true)

        useEffect(() => {
            let subscribed = true;
            async function getData() {
                try {
                    const start = new Date();
                    let response = await fetch(fetchLink, {method: "GET", mode: "cors" });
                    if (!response.ok) {
                       throw new Error(`http server error, the status is: ${response.status}`)
                    }
                    let data = await response.json();
                    if (subscribed) {
                        setErrorHandler(false)
                        setFetchData(data)
                         console.log(new Date() - start)
                        // console.log(data)
                    }
                }   catch (error) {
                        setErrorHandler(error.message)
                        setFetchData("")
                } finally {
                        setLoading(false)
                }
            }
            getData()

            return () => {
                subscribed = false;
            }
        }, [])


    return [fetchData, errorHandler, loading,]

}

export {UseFetch}
