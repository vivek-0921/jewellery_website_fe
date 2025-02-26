import { Box, Container, Icon, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as img1 } from '../../src/assets/images/collection-list/rings.svg'
import { ReactComponent as img2 } from '../../src/assets/images/collection-list/bracelet.svg'
import { ReactComponent as img3 } from '../../src/assets/images/collection-list/chain.svg'
import { ReactComponent as img4 } from '../../src/assets/images/collection-list/cufflinks.svg'
import { ReactComponent as img5 } from '../../src/assets/images/collection-list/earrings.svg'
import { ReactComponent as img6 } from '../../src/assets/images/collection-list/gemstone.svg'
import { ReactComponent as img7 } from '../../src/assets/images/collection-list/gift.svg'
import { Link } from 'react-router-dom'


const products = [
    {
        to: '/rings',
        Icon: img1,
        title: 'Rings'
    },
    {
        to: '/bracelet',
        Icon: img2,
        title: 'Bracelet'
    },
    {
        to: '/chain',
        Icon: img3,
        title: 'Chain'
    },
    {
        to: '/cufflinks',
        Icon: img4,
        title: 'Cufflinks'
    },
    {
        to: '/earrings',
        Icon: img5,
        title: 'Earrings'
    },
    {
        to: '/gemstone',
        Icon: img6,
        title: 'Gemstone'
    },
    {
        to: '/gift',
        Icon: img7,
        title: 'Gift Set'
    },
];


function Collectionlist() {
    return (
        <>
            <Box sx={{
                padding: '100px 50px', display: 'flex', flexWrap: 'wrap', justifyContent: {md:'space-between' ,xs:"none" },
            }}>
                {
                    products.map((item, index) => {
                        const IconComponent = item.Icon;
                        return (
                            <Box key={index} sx={{ '&:hover': { color: '#C9A236' }}}>
                                <Link to={item.to} style={{ textDecoration: 'none' }}>
                                    <Box sx={{
                                        '&:hover': { border: '1px solid #C9A236', backgroundColor: 'white', color: '#353535' },color:'#C9A236' , border: '1px solid white', transition: "0.3s", height: '172px', width: '143px', backgroundColor: '#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <IconComponent style={{ fill:'currentcolor' , width: '50%', height: '50%' }} />
                                    </Box>
                                    <Typography sx={{ textAlign: 'center', padding: '10px 0', fontSize: '16px', '&:hover': { color: '#C9A236' }}}>
                                        {item.title}
                                    </Typography>
                                </Link>
                            </Box>
                        );
                    })
                }
            </Box>
        </>
    )
}

export default Collectionlist
