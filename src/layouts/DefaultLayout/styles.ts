import styled from 'styled-components'
import { mobile, tablet } from '../../styles/responsive'

export const LayoutContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  max-width: 74rem;
  margin: 5rem auto;
  border-radius: 8px;
  flex-direction: column;
  height: calc(100vh - 10rem);
  background: ${(props) => props.theme['gray-800']};

  ${tablet({ margin: '2.5rem' })}

  ${mobile({
    margin: '1rem',
    padding: '1rem',
    fontSize: '1.5rem',
    height: '96vh',
  })};
`
