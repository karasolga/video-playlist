import React, { useState } from "react";
import FormRow from "./components/form-row";
import Playlist from "./components/playlist";
import Player from "./components/player";
import "./App.css";

const ITEMS = [
  {
    artist: "Google",
    title: "Mountain",
    videoUrl: "http://thenewcode.com/assets/videos/mountain.mp4"
  },
  {
    artist: "Google",
    title: "For Bigger Meltdowns",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  {
    artist: "Garage419",
    title: "Subaru Outback On Street And Dirt",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
  },
  {
    artist: "Blender Foundation",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    title: "Elephant Dream"
  },
  {
    artist: "HBO",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    title: "For Bigger Blazes"
  },
  {
    artist: "Garage419",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    title: "We Are Going On Bullrun"
  }
];

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
