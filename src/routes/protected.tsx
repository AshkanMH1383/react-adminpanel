// import { lazy } from 'react'
import { Dashboard, NotFound } from '@/features/common'
import { ProductList } from '@/features/catalog/product'
// const Dashboard = lazy(() => import('@/pages/common/routes/Dashboard'))
// const NotFound = lazy(() => import('@/pages/common/routes/Dashboard'))

export const protectedRoutes = [
    { path: '/', element: <Dashboard /> },
    { path: '/products', element: <ProductList /> },
    { path: '/*', element: <NotFound /> },
]
