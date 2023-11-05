import { Helmet } from 'react-helmet-async'

type HeadProps = {
    title?: string
    description?: string
}

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
    return (
        <Helmet
            title={title ? `${title} | React Admin Panel` : undefined}
            defaultTitle="React Admin Panel"
        >
            <meta name="description" content={description} />
        </Helmet>
    )
}
