import React from 'react'
import Playlist from './playlist'

describe('Playlist', () => {
  it('renders correctly', () => {
    expect(Playlist).toMatchSnapshot()
  })
})
