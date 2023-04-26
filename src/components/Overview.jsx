import {Fragment, useEffect, useState} from "react";

function Overview(props) {

     useEffect(() => {
        let sub = true;
        try {
            async function todos() {
            let res = await fetch("https://jsonplaceholder.typicode.com/posts");
            let data = await res.json();
                if (sub === true) {
                     console.log(data)
                }
        }
        todos()
        } catch (err) {
            if (err.name === "AbortError") {
                console.log("fetch cancelled")
            } else { //handle error other than abort
                console.log("fetch error")
            }
        }

        return () => {
            sub = false;
        }
    }, [])






    return (
            <div className="square">abc</div>
    )
}

export default Overview
//validate prop types are correct variable passed in
Overview.propTypes = {}

//set default prop if none are passed in, (will always render default)
Overview.defaultProps = {}