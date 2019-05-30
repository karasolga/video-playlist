import React from 'react'

const FormInput = ({ label, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        onChange={evt => onChange(evt.target)}
        value={value}
      />
    </div>
  )
}

export default FormInput
