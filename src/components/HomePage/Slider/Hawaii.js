import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Hawaii = () => {
    return (

        <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={5}
        >
            <img style={{ height: "300px" }} src='sasad.png' />
            <Box textAlign='left'>
                <Typography variant='h6'>ORIGIN</Typography>
                <Typography variant='h2'>Hawaii</Typography>
            </Box>
        </Stack>

    )
}

export default Hawaii