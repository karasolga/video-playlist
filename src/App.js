import React, { useState, useReducer } from 'react'
import FormRow from './components/form-row'
import Playlist from './components/playlist'
import Player from './components/player'
import './App.css'
import ITEMS from './constants/items'

const initialState = { items: ITEMS }
const reducer = (state, action) => {
  console.log('dispatch', state, action, action.item)
  switch (action.type) {
    case 'add':
      return { items: [...state.items, action.item] }
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const nextIndex = (selectedIndex + 1) % state.items.length
  return (
    <div className="App">
      <h1>Add a video to your playlist</h1>
      <FormRow addItem={item => dispatch({ type: 'add', item })} />
      <h2>Your playlist</h2>
      <Playlist items={state.items} setSelected={setSelectedIndex} />
      {state.items.length ? (
        <Player
          item={state.items[selectedIndex]}
          onEnded={() => setSelectedIndex(nextIndex)}
        />
      ) : null}
    </div>
  )
}

export default App
