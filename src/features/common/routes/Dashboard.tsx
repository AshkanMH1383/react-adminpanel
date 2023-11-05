// import { useNavigate } from 'react-router-dom'

import { MainLayout } from '@/components'
import { Statistics } from '../components/Statistics'
import { SalesAnalytics } from '../components/SalesAnalytics'
import { LatestOrders } from '../components/LatestOrders'
import { Flex } from '@chakra-ui/react'
import { RecentActivity } from '../components/RecentActivity'

export default function Dashboard() {
    //const navigate = useNavigate()

    return (
        <MainLayout
            className="common-dashboard"
            title="داشبورد"
            description="توضیحات داشبورد"
            cbreadcrumb={[
                {
                    title: 'داشبورد',
                    href: '/',
                },
            ]}
            settings=""
        >
            <Statistics />
            <SalesAnalytics />
            <Flex mt={'15px'}>
                <LatestOrders />
                <RecentActivity />
            </Flex>
        </MainLayout>
    )
}
