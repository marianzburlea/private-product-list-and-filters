import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { App } from '.'

describe('<App />', () => {
  it('should render the component', () => {
    const { container, debug } = render(<App />)
    // debug()

    expect(container).toHaveTextContent('Awesome product list')
  })
})
