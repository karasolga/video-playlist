import React from 'react'
import Item from './item'

function Playlist({ items, setSelected, onDelete }) {
  return (
    <div className="list">
      {items.map((item, idx) => (
        <Item
          item={item}
          key={idx}
          setSelected={() => setSelected(idx)}
          onDelete={() => onDelete(idx)}
        />
      ))}
    </div>
  )
}

export default Playlist
