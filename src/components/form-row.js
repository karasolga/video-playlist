import React, { useState } from "react";

const isValid = videoUrl => Boolean(videoUrl);

function FormRow({ addItem }) {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  return (
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          onChange={evt => setTitle(evt.target.value)}
          value={title}
        />
      </div>
      <div className="form-group form-group--central">
        <label htmlFor="artist">artist</label>
        <input
          type="text"
          name="artist"
          onChange={evt => setArtist(evt.target.value)}
          value={artist}
        />
      </div>
      <div className="form-group">
        <label htmlFor="videoUrl">video url</label>
        <input
          type="text"
          name="videoUrl"
          onChange={evt => setVideoUrl(evt.target.value)}
          value={videoUrl}
        />
      </div>
      <button
        className="button"
        disabled={!isValid(videoUrl)}
        onClick={() => addItem({ artist, title, videoUrl })}
      >
        Add
      </button>
    </div>
  );
}

export default FormRow;
