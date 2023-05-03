import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { theme } from 'src/styles/theme'
import styled from 'styled-components'
import type { FallbackProps } from 'src/types/error/errorProps'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <ErrorContainer>
    <ErrorMessage>Something went wrong:</ErrorMessage>
    <ErrorMessage>{error.message}</ErrorMessage>
    <RetryButton onClick={resetErrorBoundary}>Retry</RetryButton>
  </ErrorContainer>
)

const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const ErrorMessage = styled.p`
  color: ${() => theme.colors.error};
  font-size: ${() => theme.fontSizes.extraLarge};
  font-weight: 600
  margin-bottom: 16px;
  margin: 0;
`

const RetryButton = styled.button`
  background-color: ${() => theme.colors.primary};
  border-radius: 4px;
  border: none;
  color: ${() => theme.fontColors.light};
  cursor: pointer;
  font-size: ${() => theme.fontSizes.medium};
  font-weight: 500
  padding: 8px 16px;
`

const AppErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
)

export { AppErrorBoundary }
