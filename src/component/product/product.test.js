import React from 'react'
import { Product } from './product.component'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<Product />', () => {
  const productPropList = {
    name: 'WTC Peak Operations',
    imagePath: 'https://www.wundermanthompsoncommerce.com/media/filer_public_thumbnails/filer_public/a9/9d/a99d283e-af4e-4bd2-8e40-31d19a6a99ba/wtc_peak_operations_centre_2019_380x250.png__380x250_q85_crop_subsampling-2_upscale.png',
    price: [{value: 225, currency: 'GBP'}],
  }

  it('should render the component', () => {
    const { getByTestId } = render(<Product {...productPropList} />)

    const productTitle = getByTestId('product-title')
    const productPrice = getByTestId('product-price')

    expect(productTitle).toHaveTextContent(productPropList.name)
    expect(productPrice).toHaveTextContent('£225')
  })
})
