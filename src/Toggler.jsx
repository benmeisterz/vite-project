import { useState } from "react"

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true)
    const toggleIsHappy = () => setIsHappy(!isHappy)

    return (
        <div>
            <p style={{ fontSize: "5rem", cursor: "pointer" }}
                onClick={toggleIsHappy}>
                {isHappy ? "😄" : "😢"} </p>
        </div >
    )
}
