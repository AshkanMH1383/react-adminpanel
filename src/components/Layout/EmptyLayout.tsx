import { Head } from '@/components/Head'

type EmptyLayoutProps = {
    children: React.ReactNode
    title?: string
    description?: string
}

export const EmptyLayout = ({
    children,
    title,
    description,
}: EmptyLayoutProps) => {
    return (
        <>
            <Head title={title} description={description} />

            {children}
        </>
    )
}
