import React, { useState } from 'react'

const isValid = videoUrl => Boolean(videoUrl)
const initialState = {
  title: '',
  artist: '',
  videoUrl: ''
}
const config = [
  { label: 'title', name: 'title' },
  { label: 'artist', name: 'artist' },
  { label: 'video url', name: 'videoUrl' }
]
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
      {config.map((item, idx) => (
        <div className="form-group" key={idx}>
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type="text"
            name={item.name}
            onChange={evt => updateState(evt.target)}
            value={state[item.name]}
          />
        </div>
      ))}
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
