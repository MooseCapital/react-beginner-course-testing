import {useState} from "react";

function Overview(props) {


    const listElements = props.tasks.map(item => {
        return <li key={Math.random()}>{item.task}</li>
    })





    return (
            <ul>
                {listElements}
            </ul>
    )
}

export default Overview
//validate prop types are correct variable passed in
Overview.propTypes = {}

//set default prop if none are passed in, (will always render default)
Overview.defaultProps = {}