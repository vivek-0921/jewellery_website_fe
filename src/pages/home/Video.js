import React from 'react'
import video from '../../assets/Video/Video.mp4'
import { Box } from '@mui/material'
function Video() {
    return (
        <Box>
            <video src={video} style={{ height: { lg: '100vh', }, width: '100%', objectFit: 'cover' }} controls />
        </Box>
    )
}

export default Video
