import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import {
    HiMiniCreditCard,
    HiShoppingCart,
    HiUser,
    HiUserGroup,
} from 'react-icons/hi2'
type StatisticsData = {
    bg: string
    heading: string
    icon: JSX.Element
    text: string
    preset: string
}
const StatisticsData: Array<StatisticsData> = [
    {
        bg: 'linear-gradient(to right, #fdb32c 0%,#f78556 100%)',
        heading: 'تعداد سفارش ها',
        icon: <HiShoppingCart fontSize="55px" color="white" />,
        text: '24000',
        preset: 'عدد',
    },
    {
        bg: 'linear-gradient(to right, #4fbfef 0%,#5f9dda 100%)',
        heading: 'جمع فروش',
        icon: <HiMiniCreditCard fontSize="55px" color="white" />,
        text: '24300',
        preset: 'تومان',
    },
    {
        bg: 'linear-gradient(to right, #865dbd 0%,#865ec1 100%)',
        heading: 'تعداد مشتریان',
        icon: <HiUser fontSize="55px" color="white" />,
        text: '200',
        preset: 'نفر',
    },
    {
        bg: 'linear-gradient(to right, #e84886 0%,#885ec0 100%);',
        heading: 'افراد آنلاین',
        icon: <HiUserGroup fontSize="55px" color="white" />,
        text: '24300',
        preset: 'نفر',
    },
]

export const Statistics = () => {
    return (
        <Flex h={'150px'} mb={4}>
            {StatisticsData &&
                StatisticsData.map((item: StatisticsData, key: number) => (
                    <Box
                        key={key}
                        p={'18px'}
                        borderRadius={'15px'}
                        shadow={'unset'}
                        flex={1}
                        ml={key != 3 ? 4 : 0}
                        bg={item.bg}
                    >
                        <Box>
                            <Heading
                                size="md"
                                fontFamily={'inherit'}
                                color={'white'}
                            >
                                {item.heading}
                            </Heading>
                        </Box>
                        <Box>
                            <Flex
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                mt={5}
                            >
                                {item.icon}
                                <Flex
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Text fontSize={'33px'} color="white">
                                        {item.text}
                                    </Text>
                                    <Text
                                        mr={'7px'}
                                        fontSize={'15px'}
                                        color="white"
                                    >
                                        {item.preset}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                ))}
        </Flex>
    )
}
