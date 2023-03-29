export default function Jokes(props) {
    return (
        <div>
            <h2>{props.setup} </h2>
            <p>{props.punchline}</p>
            <hr/>
        </div>
    )
}