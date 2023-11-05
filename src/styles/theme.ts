import { extendTheme, defineStyleConfig } from '@chakra-ui/react'

const semanticTokens = {
    colors: {
        'bg-body': '#f4f4f4',

        white: '#fff',

        secondary: '#f4f4f4',

        'border-secondary': '#e9e9ef',

        primary: '#4356FF',

        danger: '#fd625e',
        dark: '#212123',
        dark1: '#111',
    },

    fontSizes: {
        title: '5rem',
        subtitle: '2rem',
    },

    letterSpacings: {},

    breakpoints: {
        mobile: '320px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1440px',
    },
}

const styles = {
    global: {
        fontFamily: 'shabnam-fd',
        body: {
            fontFamily: 'shabnam-fd',
            background: 'bg-body',
        },
    },
}

// components customize

const Table = defineStyleConfig({
    variants: {
        mytable: {
            border: '2px solid',
            borderColor: 'purple.500',
            color: 'purple.500',
        },
    },
})

const theme = extendTheme({
    components: {
        Table,
    },
    styles,
    semanticTokens,
})

export default theme
