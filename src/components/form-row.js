import React, { useState } from 'react'

const isValid = videoUrl => Boolean(videoUrl)
const initialState = {
  title: '',
  artist: '',
  videoUrl: ''
}

function FormRow({ addItem }) {
  const [state, setState] = useState(initialState)

  const updateState = target => {
    setState({ ...state, [target.name]: target.value })
  }

  const onSubmit = () => {
    addItem(state)
    setState(initialState)
  }
  return (
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          onChange={evt => updateState(evt.target)}
          value={state.title}
        />
      </div>
      <div className="form-group form-group--central">
        <label htmlFor="artist">artist</label>
        <input
          type="text"
          name="artist"
          onChange={evt => updateState(evt.target)}
          value={state.artist}
        />
      </div>
      <div className="form-group">
        <label htmlFor="videoUrl">video url</label>
        <input
          type="text"
          name="videoUrl"
          onChange={evt => updateState(evt.target)}
          value={state.videoUrl}
        />
      </div>
      <button
        className="button"
        disabled={!isValid(state.videoUrl)}
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  )
}

export default FormRow
