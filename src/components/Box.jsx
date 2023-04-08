import React from "react";

function Box(props) {



     const styles = {
    backgroundColor: props.on ? "salmon" : "white",
    }

    return (
        <div style={styles} onClick={props.toggle} className={"box"} ></div>
    )
}
export default Box;