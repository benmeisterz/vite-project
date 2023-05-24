
import './App.css'
import RandomPokemon from './RandomPokemon'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Counter from './Counter'
import Toggler from './Toggler'


// const data = [
//   { id: 1, item: "eggs", quantity: 12, completed: false },
//   { id: 2, item: "milk", quantity: 1, completed: true },
//   { id: 3, item: "chicken breasts", quantity: 4, completed: false },
//   { id: 4, item: "carrots", quantity: 6, completed: true },
// ]

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

function App() {
  return (
    <>
      {/* <RandomPokemon /> */}
      {/* <ColorList colors={['red', 'blue', 'green', 'white']} />
      <ColorList colors={['olive', 'orangered', 'pink', 'indigo']} /> */}
      {/* <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍌" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍌" val3="🍒" /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <Clicker message="HI!!!" buttonText="Please Click Me" /> */}
      {/* <Counter /> */}
      <Toggler />


    </>
  )
}

export default App
