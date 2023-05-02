import React, {Fragment, memo} from "react";

function Grandparent(props) {


    console.log("👴 rendered")
        return (
            <Fragment>
                <div>grandparent</div>
            </Fragment>
        )
}

function areEqual(prevProps, nextProps) {
    console.log({prevProps,nextProps})
    if (prevProps.count.num === nextProps.count.num) {
        return true
    } else {
        return false
    }

}

export default React.memo(Grandparent, areEqual)


