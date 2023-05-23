export default function ColorList({ colors }) {
    return (
        <div>
            <ul>
                {colors.map(c => (
                    <li style={{ color: c }}>{c}</li>
                ))}
            </ul>
        </div>
    )
}
// export default function ColorList({ colors }) {
//     const lis = colors.map(color =>
//         <li>{color}</li>)
//     return (
//         <div>
//             <ul>
//                 <li>{lis}</li>
//             </ul>
//         </div>
//     )
// }
