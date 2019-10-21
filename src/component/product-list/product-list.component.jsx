import React from 'react'
import { Product } from '../product'
import { StyledProductList } from './product-list.style'

const ProductList = ({ list = [], title = '' }) => {
  return (
    <div>
      <h2 data-testid="title">{title}</h2>
      <StyledProductList data-testid="product-list">
        {list.map(product => <Product key={product.uniqueID} {...product} />)}
      </StyledProductList>
    </div>
  )
}

export { ProductList }
