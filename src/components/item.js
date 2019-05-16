import React from "react";

function Item({ item, setSelected }) {
  return (
    <div className="item">
      <div className="select" onClick={setSelected}>
        &#9654;
      </div>
      <div className="item__column">{item.title}</div>
      <div className="item__column">{item.artist}</div>
      <div className="item__column">{item.videoUrl}</div>
    </div>
  );
}

export default Item;
