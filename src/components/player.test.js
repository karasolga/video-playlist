import React from 'react'
import Player from './player'

describe('Player', () => {
  it('renders correctly', () => {
    expect(Player).toMatchSnapshot()
  })
})
