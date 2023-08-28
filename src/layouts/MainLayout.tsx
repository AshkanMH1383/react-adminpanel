import { Outlet } from 'react-router-dom'

import { Sidebar, Footer, Topbar } from '@/components'
import { Button } from '@material-tailwind/react'

export default function MainLayout(): JSX.Element {
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full">
                <Topbar />
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}
