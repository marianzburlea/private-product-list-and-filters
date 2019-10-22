import styled from 'styled-components'

export const StyledProduct = styled.div`
  height: 310px;
  min-width: 200px;
  margin-bottom: 10px;
  margin-right: 10px;
  @supports (display: grid) {
    margin-bottom: initial;
    margin-right: initial;
  }
  background-image: url(${(p) => p['data-image']});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eeeff3;
`
