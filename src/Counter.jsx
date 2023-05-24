import { useState } from 'react'

export default function Counter() {
    const [state, setState] = useState(0);
    return (
        <div>
            <button>-</button>
            <p>{useState}</p>
            <button>+</button>
        </div>
    )
}
