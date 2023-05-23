export default function Slots({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val1 === val3;
    return (
        <div>
            <h1>
                {val1} {val2} {val3}
            </h1>
            <h2 style={{ color: isWinner ? "green" : "red" }}>
                {isWinner ? "You win!" : "You lose"}
            </h2>
            {isWinner && <h3>Congrats</h3>}
        </div>
    );
}

// export default function Slots({ val1, val2, val3 }) {
//     const win = <h4 style={{ color: "green" }}> {val1} {val2} {val3} <br />You win! <br /> Congrats!!!</h4>
//     const lose = <h4 style={{ color: "red" }}>{val1} {val2} {val3} <br />You lose</h4>

//     return (
//         <h1>{val1 === val2 && val2 === val3 ? win : lose}</h1>
//     )
// }
// export default function Slots({ val1, val2, val3 }) {
//     if (val1 === val2) {


//         return (
//             <div>
//                 <h1>true</h1>
//             </div>
//         )
//     }
//     else {
//         return (
//             <div>
//                 <h1>false</h1>
//             </div>
//         )
//     }
// }