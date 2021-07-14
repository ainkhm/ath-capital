export default (theme) => ({
    root: {
        display: 'flex',
        marginBottom: 20,
        '&:last-child': {
            marginBottom: 0
        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        padding: 10,
        paddingBottom: `10px !important`
    },
    cover: {
        width: 69,
    },

    playIcon: {
        height: 38,
        width: 38,
    },
})
