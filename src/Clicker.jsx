export default function Clicker({ message, buttonText }) {
    // function handleText() {
    //     alert(message)
    // }
    return (
        <div>
            <button onClick={() => alert(message)}>
                {buttonText}</button>
        </div>
    )
}
