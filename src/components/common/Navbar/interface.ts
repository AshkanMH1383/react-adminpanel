import { BoxProps, FlexProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'

// export interface SidebarProps {
//     onClose?: any
//     isOpen?: any
// }
export interface IChildrenNav {
    name: string
    href?: string | undefined
    children?: Array<IChildrenNav> | undefined
}

export interface INavList {
    name: string
    icon: IconType
    href?: string | undefined
    children?: Array<IChildrenNav> | undefined
}

export interface SidebarContentProps extends BoxProps {
    // menu: Array<IMenu>
    onClose?: () => void
}

export interface NavItemProps extends FlexProps {
    key: number
    name: string
    href?: string
    icon?: IconType
    subNav?: Array<IChildrenNav> | undefined
}
