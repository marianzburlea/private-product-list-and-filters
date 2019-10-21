import React from 'react'
import { render } from 'react-dom'
import { App } from './component/app'

const renderToDom = () => {
  const productListWithFilters = document.querySelector('#product-list-with-filters')
  if (productListWithFilters !== null) {
    render(
      <App />,
      productListWithFilters
    )
  }
}

renderToDom()

export { renderToDom }
