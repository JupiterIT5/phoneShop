'use client'

import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/store/store'
import { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

const ProviderLayout = ({children}: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}/>
                {children}
            </Provider>
        </QueryClientProvider>
    )
}

export default ProviderLayout