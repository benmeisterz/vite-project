import './ColorBoxGrid.css'
import { useState } from 'react'

function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}

export default function ColorBoxGrid({ colors }) {

    const [color, setColor] = useState(randomChoice(colors))
    const change = () => {
        const randomColor = randomChoice(colors)
        setColor(randomColor)
    }

    return (
        <div className='box' style={{ background: color }}
            onClick={change}>

        </div>
    )
}
