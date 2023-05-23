import "./RandomPokemon.css"

export default function RandomPokemon() {
    const random = Math.floor(Math.random() * 151) + 1
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}.png`

    return (
        <div className="bord">
            <h1>Pokemon #{random}</h1>
            <img src={image} alt="Pokemon Image" />
        </div>
    )
}
