import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import { queryClient } from '@/utils/reactQuery'
import theme from '@/styles/theme'
import '@/styles/app.css'
import { ErrorFallback } from '@/components'

type AppProviderProps = {
    children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <Suspense fallback={<Spinner color="red.500" />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <HelmetProvider>
                    <QueryClientProvider client={queryClient}>
                        {import.meta.env.MODE === 'development' && (
                            <ReactQueryDevtools />
                        )}
                        <ChakraProvider theme={theme}>
                            <Router>{children}</Router>
                        </ChakraProvider>
                    </QueryClientProvider>
                </HelmetProvider>
            </ErrorBoundary>
        </Suspense>
    )
}
