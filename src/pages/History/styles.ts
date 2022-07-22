import styled from 'styled-components'
import { mobile, tablet } from '../../styles/responsive'

export const HistoryContainer = styled.main`
  height: 100vh;
  display: flex;
  padding: 1rem;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  ${mobile({ height: '96vh', padding: '0' })}
`

export const HistoryList = styled.div`
  width: 100%;
  height: 320px;
  overflow: auto;
  margin-top: 2rem;

  ${tablet({ height: '230px' })}

  ${mobile({ height: '80vh', fontSize: '1rem' })}

  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;

    th {
      padding: 1rem;
      text-align: left;
      line-height: 1.6;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-100']};
      background-color: ${(props) => props.theme['gray-600']};

      &:first-child {
        padding-left: 1.5rem;
        border-top-left-radius: 8px;
      }

      &:last-child {
        padding-right: 1.5rem;
        border-top-right-radius: 8px;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLOR = {
  red: 'red-500',
  green: 'green-500',
  yellow: 'yellow-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
