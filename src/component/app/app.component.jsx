import React, { useEffect, useState } from 'react'
import { ProductList } from '../product-list'
import { API_URL } from './app.const'
import { StyledApp } from './app.style'

const App = () => {
  const [productList, updateProductList] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await (await fetch(API_URL)).json()
        updateProductList(response.catalogEntryView)
        console.log(response)
      } catch(e) {
        console.log('Error', e)
      }
    })()
  }, [])

  return (
    <StyledApp>
      <h1>Awesome product list</h1>
      <ProductList list={productList} />
    </StyledApp>
  )
}

export { App }
