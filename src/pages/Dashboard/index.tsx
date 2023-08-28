import { useTranslation } from 'react-i18next'

export default function Dashboard(): JSX.Element {
    const { t } = useTranslation()

    return (
        <>
            <h1>{t('welcome')}</h1>
        </>
    )
}
