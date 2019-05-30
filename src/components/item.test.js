import React from 'react'
import Item from './item'

describe('Item', () => {
  it('renders correctly', () => {
    expect(Item).toMatchSnapshot()
  })
})
