import { Box, Container, Typography, TextField, Button, FormControlLabel, RadioGroup, Radio, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DiscountIcon from '@mui/icons-material/Discount';

import axios from 'axios';

function Coupon() {


    return (
        <Box sx={{ bgcolor: "white" }}>
            <Container >
                <Typography sx={{ borderBottom: "1px solid #D4D5D9", margin: '50px 0px 0 0  ', paddingBottom: "10px", paddingLeft: '20px', fontWeight: '600', fontSize: "22px" }}>Account</Typography>

                <Grid container sx={{ alignItems: 'center' }}  >
                    <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <ul style={{ backgroundColor: "white", marginRight: '40px', padding: "60px", padding: "10px 20px 60px 60px", borderRight: '1px solid #D4D5D9' }}>
                            {/* <Link to={'/account'} Categ><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><PersonIcon style={{ margin: '10px 25px 10px 0px', fontWeight: '600' }} /><Typography sx={{ fontSize: "17px" }}> Personal Information </Typography></li></Link> */}
                            <Link to={'/overview'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><RemoveRedEyeIcon style={{ margin: '10px 25px 10px 0px' }} /> <Typography sx={{ fontSize: "17px" }}> Overview</Typography></li></Link>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Orders</Typography>

                                <Link to={'/order'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><ShoppingCartIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Orders            </Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Address</Typography>

                                <Link to={'/address'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><LocationOnIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Addresses         </Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Wishlist</Typography>

                                <Link to={'/whishlist'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><FavoriteIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Wishlist          </Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Discount</Typography>

                                <Link to={'/coupon'}><li style={{ color: '#AA7B49', display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><DiscountIcon style={{ margin: '10px 25px 10px 0px', fontWeight: '600' }} /><Typography sx={{ fontSize: "20px", fontWeight: '600' }}>Coupon         </Typography></li></Link>
                            </Box>
                            <Link to={'/'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><LogoutIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> Log Out              </Typography></li></Link>
                        </ul>
                    </Grid>
                    <Grid item md={8} xs={12} >

                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default Coupon;
