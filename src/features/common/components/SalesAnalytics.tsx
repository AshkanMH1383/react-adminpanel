import { DefaultBox, HeadingComponent } from '@/components/CBox/DefaultBox'
import {
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import {
    HiMiniCalendarDays,
    HiMiniChartBar,
    HiMiniChevronDown,
} from 'react-icons/hi2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
ChartJS.defaults.font.family = 'shabnam-fd'
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
}

const labels = [
    '1 فروردین',
    '2 فروردین',
    '3 فروردین',
    '4 فروردین',
    '5 فروردین',
    '6 فروردین',
    '7 فروردین',
]

export const data = {
    labels,
    datasets: [
        {
            label: 'فروش',
            data: [23, 12, 44, 29, 12, 20, 4],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        family: 'shabnam-fd',
                    },
                },
            },
        },
    },
}

export const SalesAnalytics = () => {
    return (
        <DefaultBox
            overflow={'auto'}
            rightHeading={
                <Flex>
                    <HiMiniChartBar fontSize="22px" />
                    <HeadingComponent title={'آنالیز فروش'} mr={3} />
                </Flex>
            }
            leftHeading={
                <Menu>
                    <MenuButton
                        as={Button}
                        p={1}
                        py={0}
                        bg={'none'}
                        color={'primary'}
                        rightIcon={<HiMiniChevronDown />}
                    >
                        <HiMiniCalendarDays fontSize="24px" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>امروز</MenuItem>
                        <MenuItem>هفته گذشته</MenuItem>
                        <MenuItem>ماه گذشته</MenuItem>
                        <MenuItem>سال گذشته</MenuItem>
                    </MenuList>
                </Menu>
            }
        >
            <Line options={options} data={data} />
        </DefaultBox>
    )
}
