import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const VietNam = () => {
    return (

        <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-end"
            spacing={5}
        >
            <img style={{ height: "300px" }} src='sasad.png' />
            <Box textAlign='right'>
                <Typography variant='h6'>REPRESENTATIVE</Typography>
                <Typography variant='h2'>Viet Nam</Typography>
            </Box>
        </Stack>

    )
}

export default VietNam