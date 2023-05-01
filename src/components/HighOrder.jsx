export default function HighOrder(component) {
    let Comp = component;
    return function(props) {
        return (
            <Comp favNum={7} {...props}  />
        )
    }
}

