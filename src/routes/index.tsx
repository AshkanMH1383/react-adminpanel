import { useRoutes } from 'react-router-dom'

// import { useAuth } from '@/lib/auth'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

export const AppRoutes = () => {
    // const auth = useAuth()

    const auth = {
        user: true,
    }

    const routes = auth.user ? protectedRoutes : publicRoutes

    const element = useRoutes([...routes])

    return <>{element}</>
}
