import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/layout/styles.css'
import { router } from './app/router/Routes.tsx'
import { RouterProvider } from 'react-router-dom'
import { store } from './app/store/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
