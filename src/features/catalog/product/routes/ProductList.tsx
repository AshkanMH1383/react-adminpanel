// import { useNavigate } from 'react-router-dom'

import { MainLayout, DefaultBox, HeadingComponent } from '@/components'
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Image,
    Input,
    Select,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import {
    HiListBullet,
    HiMiniFunnel,
    HiPencil,
    HiPlus,
    HiTrash,
} from 'react-icons/hi2'

type products = {
    id: number
    image: string
    name: string
    model: string
    price: number
    quantity: number
}

const products: Array<products> = [
    {
        id: 2001,
        image: './images/products/laptop1.webp',
        name: 'لپ تاپ 15.6 یانچی ایسوس',
        model: 'asus',
        price: 20560000,
        quantity: 12,
    },
    {
        id: 2002,
        image: './images/products/laptop2.webp',
        name: 'لپ تاپ اپل',
        model: 'apple',
        price: 74400000,
        quantity: 3,
    },
    {
        id: 2003,
        image: './images/products/laptop3.webp',
        name: 'لپ تاپ لنوو',
        model: 'lenovo',
        price: 14280000,
        quantity: 9,
    },
]

export default function ProductList() {
    //const navigate = useNavigate()

    return (
        <MainLayout
            className="common-dashboard"
            title="محصولات"
            description="لیست محصولات"
            cbreadcrumb={[
                {
                    title: 'محصولات',
                    href: '/product',
                },
            ]}
            settings={
                <>
                    <Button bg={'danger'} ml={'5px'} color={'white'} p={0}>
                        <HiTrash color={'white'} fontSize="22px" />
                    </Button>
                    <Button bg={'primary'} color={'white'} p={0}>
                        <HiPlus color={'white'} fontSize="24px" />
                    </Button>
                </>
            }
        >
            <Flex>
                <DefaultBox
                    w={'75%'}
                    ml={'15px'}
                    overflow={'auto'}
                    rightHeading={
                        <Flex>
                            <HiListBullet fontSize="22px" />
                            <HeadingComponent title={'آنالیز فروش'} mr={3} />
                        </Flex>
                    }
                >
                    <TableContainer w={'full'}>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th
                                        fontFamily={'inherit'}
                                        fontSize={'13px'}
                                    >
                                        <Checkbox />
                                    </Th>
                                    <Th
                                        fontFamily={'inherit'}
                                        fontSize={'13px'}
                                    >
                                        تصویر
                                    </Th>
                                    <Th
                                        fontFamily={'inherit'}
                                        fontSize={'13px'}
                                    >
                                        نام محصول
                                    </Th>
                                    <Th
                                        fontFamily={'inherit'}
                                        fontSize={'13px'}
                                    >
                                        مدل
                                    </Th>
                                    <Th
                                        fontFamily={'inherit'}
                                        fontSize={'13px'}
                                    >
                                        قیمت
                                    </Th>
                                    <Th
                                        fontFamily={'inherit'}
                                        fontSize={'13px'}
                                    >
                                        موجودی
                                    </Th>
                                    <Th
                                        fontFamily={'inherit'}
                                        fontSize={'13px'}
                                    >
                                        عملیات
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {products &&
                                    products.map((product, key) => (
                                        <Tr fontSize={'13px'} key={key}>
                                            <Td>
                                                <Checkbox />
                                            </Td>
                                            <Td>
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                />
                                            </Td>
                                            <Td>{product.name}</Td>
                                            <Td>{product.model}</Td>
                                            <Td>{product.price} تومان</Td>
                                            <Td>{product.quantity}</Td>
                                            <Td>
                                                <IconButton
                                                    color={'white'}
                                                    bg={'primary'}
                                                    aria-label="edit"
                                                    icon={<HiPencil />}
                                                />
                                            </Td>
                                        </Tr>
                                    ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </DefaultBox>
                <DefaultBox
                    w={'25%'}
                    overflow={'auto'}
                    rightHeading={
                        <Flex>
                            <HiMiniFunnel fontSize="22px" />
                            <HeadingComponent title={'فیلتر‌ها'} mr={3} />
                        </Flex>
                    }
                >
                    <Flex flexDir={'column'}>
                        <FormControl>
                            <FormLabel>نام محصول</FormLabel>
                            <Input type="email" placeholder="نام محصول" />
                        </FormControl>
                        <FormControl mt={'15px'}>
                            <FormLabel>مدل</FormLabel>
                            <Input type="email" placeholder="مدل" />
                        </FormControl>
                        <FormControl mt={'15px'}>
                            <FormLabel>قیمت</FormLabel>
                            <Input type="email" placeholder="قیمت" />
                        </FormControl>
                        <FormControl mt={'15px'}>
                            <FormLabel>تعداد</FormLabel>
                            <Input type="email" placeholder="تعداد" />
                        </FormControl>
                        <FormControl mt={'15px'}>
                            <FormLabel>وضعیت</FormLabel>
                            <Select>
                                <option></option>
                                <option>فعال</option>
                                <option>غیر فعال</option>
                            </Select>
                        </FormControl>
                        <Button
                            bg={'primary'}
                            color={'white'}
                            mt={4}
                            type="submit"
                        >
                            فیلتر کردن
                        </Button>
                    </Flex>
                </DefaultBox>
            </Flex>
        </MainLayout>
    )
}
