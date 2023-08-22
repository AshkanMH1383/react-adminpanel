import { useTranslation } from 'react-i18next';

export default function Home(): JSX.Element {
    const {t} = useTranslation()// &quothome&quot is namespace
    

    return (
        <>
              <h1>{t('welcome')}</h1>
        </>
    )
}