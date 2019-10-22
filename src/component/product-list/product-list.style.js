import styled from 'styled-components'

export const StyledProductList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 0.5rem;
  }
`
