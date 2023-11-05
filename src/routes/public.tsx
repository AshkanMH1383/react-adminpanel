import { Navigate } from 'react-router-dom'
// import { lazyImport } from '@/utils/lazyImport'
import { Login } from '@/features/auth'
// const { Login, Register } = lazyImport(() => import('@/pages/auth'), 'Login')

export const publicRoutes = [
    {
        path: '/login',
        element: <Login />,
    },

    { path: '*', element: <Navigate to="/login" /> },
]
