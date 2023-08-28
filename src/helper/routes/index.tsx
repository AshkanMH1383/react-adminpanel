import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Dashboard'
import NotFound from '@/pages/NotFound'
import Login from '@/pages/Login'

import MainLayout from '@/layouts/MainLayout'
import EmptyLayout from '@/layouts/EmptyLayout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
    {
        path: 'login',
        element: <EmptyLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
    {
        path: '/*',
        element: <NotFound />,
    },
])
