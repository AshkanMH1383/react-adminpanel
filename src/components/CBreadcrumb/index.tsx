import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { HiMiniChevronLeft } from 'react-icons/hi2'

type CBreadcrumbProps = {
    cbreadcrumb?: Array<CBreadcrumb>
}

type CBreadcrumb = {
    title: string
    href: string
}
export const CBreadcrumb = ({ cbreadcrumb }: CBreadcrumbProps) => {
    return (
        <>
            <Breadcrumb
                className="breadcrumb"
                mr={4}
                spacing="8px"
                separator={<HiMiniChevronLeft color="gray.500" />}
            >
                <BreadcrumbItem>
                    <BreadcrumbLink>خانه</BreadcrumbLink>
                </BreadcrumbItem>

                {cbreadcrumb &&
                    cbreadcrumb.map((item, key) => (
                        <BreadcrumbItem key={key}>
                            <BreadcrumbLink href={item.href}>
                                {item.title}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    ))}

                {/* <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem> */}
            </Breadcrumb>
        </>
    )
}
