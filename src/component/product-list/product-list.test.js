import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ProductList } from '.'

describe('<ProductList />', () => {
  it('should render the component with no products', () => {
    const title = 'Nice tablets'
    const { getByTestId } = render(<ProductList title={title} />)

    const titleBox = getByTestId('title')
    const productListBox = getByTestId('product-list')

    expect(titleBox).toHaveTextContent(title)
    expect(productListBox).toHaveTextContent('')
  })

  it('should render the component with no title', () => {
    const title = ''
    const { getByTestId } = render(<ProductList />)

    const titleBox = getByTestId('title')
    const productListBox = getByTestId('product-list')

    expect(titleBox).toHaveTextContent(title)
    expect(productListBox).toHaveTextContent('')
  })

  it('should render the component with products', () => {
    const title = 'Nice tablets'
    const list = [
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
    ]
    const { getByTestId, debug, queryAllByTestId } = render(<ProductList title={title} list={list} />)

    const titleBox = getByTestId('title')
    const productListBox = getByTestId('product-list')
    const productList = queryAllByTestId('product')

    expect(titleBox).toHaveTextContent(title)
    expect(productListBox).not.toHaveTextContent('')
    expect(productList.length).toEqual(2)
  })
})
