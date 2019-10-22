import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { act } from 'react-dom/test-utils'

import { App } from '.'

describe('<App />', () => {
  let container = null
  let debug = null
  let queryAllByTestId = null

  it('should render the component', () => {
    const { container, debug } = render(<App />)
    // debug()

    expect(container).toHaveTextContent('Awesome product list')
  })

  it('should fail loading', () => {
    const mockFetch = jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject())
    const { debug } = render(<App />)

    expect(mockFetch).toHaveBeenCalledTimes(1)
    mockFetch.mockRestore()
  })

  it('should load data', async () => {
    const fakeApiResponse = {catalogEntryView: [
      {
        uniqueID: 1,
        name: 'iPad',
        thumbnail: '1_upscale.png',
        price: [{
          value: 125,
          currency: 'GBP'
        }]
      },
      {
        uniqueID: 2,
        name: 'Android',
        thumbnail: '1_upscale.png',
        price: [{
          value: 225,
          currency: 'GBP'
        }]
      },
    ]}

    const mockFetch = jest.spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakeApiResponse)
        })
      )

    await act(async () => {
      const renderApp = render(<App />)
      container = renderApp.container
      debug = renderApp.debug
      queryAllByTestId = renderApp.queryAllByTestId
    })

    const productList = queryAllByTestId('product')
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(productList.length).toEqual(2)


    mockFetch.mockRestore()
  })
})
