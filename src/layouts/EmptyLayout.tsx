import { Outlet } from 'react-router-dom'

export default function EmptyLayout(): JSX.Element {
    return (
        <>
            <Outlet />
        </>
    )
}
