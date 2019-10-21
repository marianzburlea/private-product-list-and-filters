import styled from 'styled-components'

export const StyledProduct = styled.div`
  height: 310px;
  background-image: url(${(p) => p['data-image']});
  background-repeat: no-repeat;
  background-position: center 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eeeff3;
`
