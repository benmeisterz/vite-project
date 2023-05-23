
import './App.css'
import RandomPokemon from './RandomPokemon'
import ColorList from './ColorList'
import Slots from './Slots'

function App() {
  return (
    <>
      {/* <RandomPokemon /> */}
      {/* <ColorList colors={['red', 'blue', 'green', 'white']} />
      <ColorList colors={['olive', 'orangered', 'pink', 'indigo']} /> */}
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍌" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍌" val3="🍒" />
    </>
  )
}

export default App
