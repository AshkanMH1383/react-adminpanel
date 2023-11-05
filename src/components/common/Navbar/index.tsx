import {
    Flex,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Icon,
    Text,
    chakra,
    Box,
} from '@chakra-ui/react'
import { IChildrenNav, INavList } from './interface'

import { HiOutlineBookmark, HiOutlineSquares2X2 } from 'react-icons/hi2'
import { NavLink, useLocation } from 'react-router-dom'
import { SubNavItem } from './SubNavItem'

import './style.scss'

const NavList: Array<INavList> = [
    {
        name: 'داشبورد',
        icon: HiOutlineSquares2X2,
        href: '/',
    },

    {
        name: 'کاتالوگ',
        icon: HiOutlineBookmark,
        children: [
            {
                name: 'محصولات',
                href: '/products',
            },

            {
                name: 'دسته‌بندی',
                href: '/categories',
            },
        ],
    },
]

const NavListStyle = chakra('div', {
    baseStyle: {
        paddingX: '4',
        paddingY: '0',
        border: 'unset',
    },
})

const NavItemL0 = chakra('div', {
    baseStyle: {
        color: 'bg-body',
        w: '100%',

        border: 'unset',
        borderRadius: '0.6rem',
        paddingX: 6,
        paddingY: 5,
        marginTop: 1,
        _hover: { bg: 'primary', color: 'white' },

        _expanded: {
            bg: 'primary',
            color: 'white',
        },
    },
})
export const Navbar = () => {
    // const [active, setActive] = useState()
    const location = useLocation()

    return (
        <Flex flexDir="column">
            <Accordion allowMultiple as={NavListStyle}>
                {NavList.map((item: INavList, key: number) => (
                    <Box key={key}>
                        {item.children ? (
                            <AccordionItem border={'unset'}>
                                <AccordionButton
                                    className="navItem"
                                    as={NavItemL0}
                                    px={'12px'}
                                    py={'10px'}
                                    mt={2}
                                >
                                    {item.icon && (
                                        <Icon
                                            ml="3"
                                            fontSize="23"
                                            as={item.icon}
                                        />
                                    )}

                                    <Text fontSize={'17px'}>{item.name}</Text>
                                    <AccordionIcon mr="auto" />
                                </AccordionButton>
                                <AccordionPanel
                                    mt={2}
                                    py={1}
                                    pl={2}
                                    pr="44px"
                                    borderRadius="0.6rem"
                                    bg={'dark'}
                                >
                                    {item.children.map(
                                        (val: IChildrenNav, key: number) => (
                                            <SubNavItem
                                                key={key}
                                                name={val.name}
                                                href={val.href}
                                                subNav={val.children}
                                            />
                                        )
                                    )}
                                </AccordionPanel>
                            </AccordionItem>
                        ) : (
                            <NavLink to={item.href ? item.href : ''} key={key}>
                                <Flex
                                    border={'unset'}
                                    w={'full'}
                                    px={'12px'}
                                    py={'10px'}
                                    color={'white'}
                                    bg={
                                        location.pathname == item.href
                                            ? 'primary'
                                            : 'unset'
                                    }
                                    borderRadius="0.6rem"
                                    _hover={{
                                        bg: 'primary',
                                    }}
                                >
                                    {item.icon && (
                                        <Icon
                                            ml="3"
                                            fontSize="23"
                                            _groupHover={{
                                                color: 'white',
                                            }}
                                            as={item.icon}
                                        />
                                    )}

                                    <Text fontSize={'17px'}>{item.name}</Text>
                                </Flex>
                            </NavLink>
                        )}
                    </Box>
                ))}
            </Accordion>
        </Flex>
    )
}
