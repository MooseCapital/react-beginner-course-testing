import React, {Fragment, memo, useContext} from "react";
import Parent from "./Parent.jsx";

function Grandparent(props) {


        const user = useContext(AllContext)

        return (
            <div >
                <div>grandparent</div>
                <div className={"dark-mode"}>welcome {user.userName}</div>
                <div className={"light-mode"}>no new notifications for: {user.userName}</div>

                <div className="row">

                    <Parent></Parent>
                </div>

            </div>
        )
}


export default Grandparent


/*
function areEqual(prevProps, nextProps) {
    console.log({prevProps,nextProps})
    if (prevProps.count.name === nextProps.count.name) {
        return true
    } else {
        return false
    }

}
*/
