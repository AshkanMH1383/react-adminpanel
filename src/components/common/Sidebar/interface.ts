import { BoxProps } from '@chakra-ui/react'

export interface SidebarContentProps extends BoxProps {
    // menu: Array<IMenu>
    onClose?: () => void
}
