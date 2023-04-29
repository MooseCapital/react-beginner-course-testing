import {Fragment, useEffect, useState} from "react";

function Overview(props) {

     useEffect(() => {
        let sub = true;
        async function todos() {
            let res = await fetch("https://jsonplaceholder.typicode.com/posts");
            let data = await res.json();
                if (sub) {
                console.log(data)
                }
        }
        todos()

        return () => {
            console.log("cancelled")
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