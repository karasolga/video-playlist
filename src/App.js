import React, { useState } from "react";
import FormRow from "./components/form-row";
import Playlist from "./components/playlist";
import Player from "./components/player";
import "./App.css";
import ITEMS from './constants/items'

function App() {
  const [items, setItems] = useState(ITEMS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const addItem = item => {
    const newItems = [...items, item];
    setItems(newItems);
  };

  const nextIndex = (selectedIndex + 1) % items.length;
  return (
    <div className="App">
      <h1>Add a video to your playlist</h1>
      <FormRow addItem={addItem} />
      <h2>Your playlist</h2>
      <Playlist items={items} setSelected={setSelectedIndex} />
      {items.length ? (
        <Player
          item={items[selectedIndex]}
          onEnded={() => setSelectedIndex(nextIndex)}
        />
      ) : null}
    </div>
  );
}

export default App;
