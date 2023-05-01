import HighOrder from "./HighOrder.jsx";
import {useState} from "react";

function HighOrderToggle(Component) {

    return function (props) {

        const [toggled, setToggled] = useState(() => false)

        function toggle() {
            setToggled(prevState => !prevState)
        }

        return <Component {...props} toggled={toggled} toggle={toggle} name={"squidward"}></Component>
    }
}

export default HighOrderToggle


