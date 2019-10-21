import React from 'react'
import { StyledProduct } from './product.style'

const IMAGE_DOMAIN = 'https://www.demo.salmon-gcp.com'

const Product  = ({ name, price, thumbnail }) => {
  const { value, currency } = price[0]
  const getPrice = price => new Intl
    .NumberFormat('en', { currency, style: 'currency' })
    .format(price)

  return (
    <StyledProduct data-testid="product" data-image={`${IMAGE_DOMAIN}${thumbnail}`}>
      <h3 data-testid="product-title">{name}</h3>
      <div data-testid="product-price">{getPrice(value)}</div>
    </StyledProduct>
  )
}

export { Product }
