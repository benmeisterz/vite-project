import { useState } from 'react'

export default function Counter() {
    const [num, setNum] = useState(0);

    // const add = () => {
    //     setNum(num + 1)
    // }
    const minus = () => {
        setNum(num - 1)
    }

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>+</button>
            <h1>{num}</h1>
            <button onClick={minus}>-</button>
        </div>
    )
}
