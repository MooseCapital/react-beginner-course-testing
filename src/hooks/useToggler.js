import {useState, useEffect} from "react";
import {func} from "prop-types";

function useToggler(params) {
    const [isToggled, setIsToggle] = useState(false);

    function toggle() {
        setIsToggle(prevState => !prevState)
    }

    return [isToggled, toggle]
}

export default useToggler