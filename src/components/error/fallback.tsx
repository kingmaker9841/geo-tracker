import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import styled from 'styled-components'

type FallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <ErrorContainer>
    <ErrorMessage>Something went wrong:</ErrorMessage>
    <ErrorMessage>{error.message}</ErrorMessage>
    <RetryButton onClick={resetErrorBoundary}>Retry</RetryButton>
  </ErrorContainer>
)

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light};
`

const ErrorMessage = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 16px;
`

const RetryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  cursor: pointer;
`

const AppErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
)

export { AppErrorBoundary }
