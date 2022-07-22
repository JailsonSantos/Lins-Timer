import styled from 'styled-components'
import { mobile } from '../../../../styles/responsive'

export const CountDownContainer = styled.div`
  font-size: 10rem;
  line-height: 8rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  ${mobile({
    fontSize: '3rem',
    lineHeight: '1rem',
    gap: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
  })};

  span {
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme['gray-700']};

    ${mobile({ padding: '2rem 1rem', gap: '0.5rem' })};
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  display: flex;
  overflow: hidden;
  justify-content: center;

  ${mobile({ width: '1rem' })};
`
