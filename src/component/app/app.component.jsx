import React, { useEffect, useState } from 'react'
import { ProductList } from '../product-list'
import { API_URL } from './app.const'

const App = () => {
  const [productList, updateProductList] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await (await fetch(API_URL)).json()
        updateProductList(response.catalogEntryView)
      } catch(e) {
        console.log('Error', e)
      }
    })()
  }, [])

  return (
    <div>
      <h1>Awesome product list</h1>
      <ProductList list={productList} />
    </div>
  )
}

export { App }
