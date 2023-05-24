
export default function Property({ name, price, rating }) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price}/night</h3>
            <h4>{rating} ⭐</h4>
        </div>
    )
}


{/* <div >
    <h2>{i.name}</h2>
    <h3>${i.price} a night</h3>
    <h4>${i.rating} ⭐</h4>
</div> */}