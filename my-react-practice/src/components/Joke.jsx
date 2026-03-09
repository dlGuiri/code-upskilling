export default function Joke(props) {
    
    const setup = props.setup ?? "";
    const punchline = props.punchline;

    return (
        <>
            {setup && <p>{setup}</p>}
            <p>{punchline}</p>
        </>
    )
}