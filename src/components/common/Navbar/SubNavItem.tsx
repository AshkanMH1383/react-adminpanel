import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Text,
} from '@chakra-ui/react'
import { NavItemProps, IChildrenNav } from './interface'
import { Link, useLocation } from 'react-router-dom'

export const SubNavItem = ({ name, href, subNav }: NavItemProps) => {
    const location = useLocation()
    return (
        <Accordion
            p={0}
            py={1}
            defaultIndex={[0]}
            allowMultiple
            border={'unset'}
        >
            {subNav ? (
                <AccordionItem p={0} border={'unset'} color={'white'}>
                    <AccordionButton w={'full'} p={0} _hover={{ bg: 'none' }}>
                        <Text fontSize={'16px'}>{name}</Text>
                        <AccordionIcon mr="auto" />
                    </AccordionButton>
                    <AccordionPanel py={1} pr={5}>
                        {subNav.map((item: IChildrenNav, key: number) => (
                            <SubNavItem
                                key={key}
                                name={item.name}
                                href={item.href}
                                subNav={item.children}
                            />
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            ) : (
                <Link to={href ? href : '/'}>
                    <Flex
                        py="1"
                        color={location.pathname == href ? 'primary' : 'white'}
                    >
                        <Text whiteSpace={'nowrap'} fontSize={'16px'}>
                            {name}
                        </Text>
                    </Flex>
                </Link>
            )}
        </Accordion>
    )
}
