import React, { useState } from 'react'
import FormInput from './form-input'

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
        <FormInput
          key={idx}
          label={item.label}
          name={item.name}
          onChange={updateState}
          value={state[item.name]}
        />
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
