import React from 'react'
import { render } from 'react-dom'
import { App } from './component/app'
import './index.css'
import 'core-js/es';
import 'react-app-polyfill/ie9';
import 'mutation-observer';

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
