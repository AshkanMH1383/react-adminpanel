import { DefaultBox, HeadingComponent } from '@/components/CBox/DefaultBox'
import {
    Flex,
    IconButton,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { HiPencil, HiShoppingCart } from 'react-icons/hi2'

export const LatestOrders = () => {
    return (
        <DefaultBox
            h={'fit-content'}
            ml={'15px'}
            w={'calc(60% - 15px)'}
            overflow={'auto'}
            rightHeading={
                <Flex>
                    <HiShoppingCart fontSize="22px" />
                    <HeadingComponent title={'آخرین سفارش‌ها'} mr={3} />
                </Flex>
            }
        >
            <TableContainer w={'full'}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th fontFamily={'inherit'} fontSize={'13px'}>
                                شناسه سفارش
                            </Th>
                            <Th fontFamily={'inherit'} fontSize={'13px'}>
                                مشتری
                            </Th>
                            <Th fontFamily={'inherit'} fontSize={'13px'}>
                                وضعیت
                            </Th>
                            <Th fontFamily={'inherit'} fontSize={'13px'}>
                                تاریخ سفارش
                            </Th>
                            <Th fontFamily={'inherit'} fontSize={'13px'}>
                                جمع سفارش
                            </Th>
                            <Th fontFamily={'inherit'} fontSize={'13px'}>
                                عملیات
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr fontSize={'13px'}>
                            <Td>102</Td>
                            <Td>اشکان مهدی زاده</Td>
                            <Td>در حال ارسال</Td>
                            <Td>1398/2/3</Td>
                            <Td>230000 تومان</Td>
                            <Td>
                                <IconButton
                                    color={'white'}
                                    bg={'primary'}
                                    aria-label="edit"
                                    icon={<HiPencil />}
                                />
                            </Td>
                        </Tr>
                        <Tr fontSize={'13px'}>
                            <Td>102</Td>
                            <Td>اشکان مهدی زاده</Td>
                            <Td>در حال ارسال</Td>
                            <Td>1398/2/3</Td>
                            <Td>230000 تومان</Td>
                            <Td>
                                <IconButton
                                    color={'white'}
                                    bg={'primary'}
                                    aria-label="edit"
                                    icon={<HiPencil />}
                                />
                            </Td>
                        </Tr>
                        <Tr fontSize={'13px'}>
                            <Td>102</Td>
                            <Td>اشکان مهدی زاده</Td>
                            <Td>در حال ارسال</Td>
                            <Td>1398/2/3</Td>
                            <Td>230000 تومان</Td>
                            <Td>
                                <IconButton
                                    color={'white'}
                                    bg={'primary'}
                                    aria-label="edit"
                                    icon={<HiPencil />}
                                />
                            </Td>
                        </Tr>
                        <Tr fontSize={'13px'}>
                            <Td>102</Td>
                            <Td>اشکان مهدی زاده</Td>
                            <Td>در حال ارسال</Td>
                            <Td>1398/2/3</Td>
                            <Td>230000 تومان</Td>
                            <Td>
                                <IconButton
                                    color={'white'}
                                    bg={'primary'}
                                    aria-label="edit"
                                    icon={<HiPencil />}
                                />
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </DefaultBox>
    )
}
