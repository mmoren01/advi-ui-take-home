import React from 'react'

import { render } from './test-utils'
import sampleData from '../../sample-data.json'


jest.mock('react-query', () => {
  const originalModule = jest.requireActual('react-query')

  return {
    ...originalModule,
    useQuery: jest.fn(() => ({
      data: sampleData,
      isLoading: false,
      isError: false, 
    })),
  }
})

global.React = React
global.render = render
