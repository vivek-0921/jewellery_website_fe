import { Box, Container, Typography, Grid, Button, TextField, Radio } from '@mui/material'
import * as React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import img1 from '../../assets/images/trial.webp'
import CloseIcon from '@mui/icons-material/Close';
import { Opacity } from '@mui/icons-material';
import DiscountIcon from '@mui/icons-material/Discount';


function Wishlist() {
    return (
        <Box sx={{ bgcolor: "white" }}>
            <Container >
                <Typography sx={{ borderBottom: "1px solid #D4D5D9", margin: '50px 0px 0 0  ', paddingBottom: "10px", paddingLeft: '20px', fontWeight: '600', fontSize: "22px" }}>Account</Typography>

                <Grid container sx={{ alignItems: 'start' }}  >
                    <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <ul style={{ marginRight: '40px', backgroundColor: "white", padding: "10px 20px 60px 60px", borderRight: '1px solid #D4D5D9' }}>
                            {/* <Link to={'/account'} ><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9' ,padding:'10px 0' }}><PersonIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> Personal Information </Typography></li></Link> */}
                            <Link to={'/overview'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><RemoveRedEyeIcon style={{ margin: '10px 25px 10px 0px' }} /> <Typography sx={{ fontSize: "17px" }}> Overview</Typography></li></Link>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Orders</Typography>

                                <Link to={'/order'}><li style={{ display: 'flex' ,alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><ShoppingCartIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Orders</Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Address</Typography>

                                <Link to={'/address'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><LocationOnIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Addresses</Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Wishlist</Typography>

                                <Link to={'/whishlist'}><li style={{ color: '#AA7B49', display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><FavoriteIcon style={{ margin: '10px 25px 10px 0px', fontWeight: '600' }} /><Typography sx={{ fontSize: "20px", fontWeight: '600' }}> My Wishlist</Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Discount</Typography>

                                <Link to={'/coupon'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><DiscountIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}>Coupon         </Typography></li></Link>
                            </Box>

                            <Link to={'/logout'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><LogoutIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> Log Out</Typography></li></Link>
                        </ul>
                    </Grid>

                    <Grid item md={8} xs={12}>
                        <Box sx={{ fontWeight: "600", fontSize: "24px", marginTop: '50px', marginBottom: "30px" }}>My Wishlist </Box>


                        <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
                            <Box sx={{ height: "auto", width: "220px", textAlign: "center", border: '1px solid #E9E9EB', margin: '5px 20px 15px 0px'}}>
                                <Box sx={{ position: 'relative' }}>
                                    <img src={img1} style={{ objectFit: "contain", height: "294px", width: "220px" }} />
                                    <CloseIcon sx={{ borderRadius: "50%", backgroundColor: "#AFB4A6", color: '#545866', padding: '3px', position: 'absolute', left: '85.5%', top: '4.5%' }} />
                                </Box>
                                <Typography sx={{ margin: "10px 0 5px", padding: '0 4px', fontSize: '15px' }}>HRX by Hrithik Roshan Unis</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: "20px" }}>
                                    <Typography sx={{ fontSize: '13px', textAlign: 'center' }}>Rs.1,099 </Typography>
                                    <strike style={{ margin: ' 3px  0 0 0px', fontSize: '11px', opacity: '0.6', textAlign: 'center' }} >Rs.6,999</strike>
                                    <Typography sx={{ fontSize: '12px', textAlign: 'center', color: '#FF977F' }}>(Rs.5900 OFF)</Typography>
                                </Box>
                                <Box width={'100%'}>
                                    <Button sx={{ border: '1px solid #E9E9EB', color: '#AA7B49', width: '100%' }} >MOVE TO BAG</Button>
                                </Box>
                            </Box>


                            <Box sx={{ height: "auto", width: "220px", textAlign: "center", border: '1px solid #E9E9EB', margin: '5px 20px 15px 0px' }}>
                                <Box sx={{ position: 'relative' }}>
                                    <img src={img1} style={{ objectFit: "contain", height: "294px", width: "220px" }} />
                                    <CloseIcon sx={{ borderRadius: "50%", backgroundColor: "#AFB4A6", color: '#545866', padding: '3px', position: 'absolute', left: '85.5%', top: '4.5%' }} />
                                </Box>
                                <Typography sx={{ margin: "10px 0 5px", padding: '0 4px', fontSize: '15px' }}>HRX by Hrithik Roshan Unis</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: "20px" }}>
                                    <Typography sx={{ fontSize: '13px', textAlign: 'center' }}>Rs.1,099 </Typography>
                                    <strike style={{ margin: ' 3px  0 0 0px', fontSize: '11px', opacity: '0.6', textAlign: 'center' }} >Rs.6,999</strike>
                                    <Typography sx={{ fontSize: '12px', textAlign: 'center', color: '#FF977F' }}>(Rs.5900 OFF)</Typography>
                                </Box>
                                <Box width={'100%'}>
                                    <Button sx={{ border: '1px solid #E9E9EB', color: '#AA7B49', width: '100%' }} >MOVE TO BAG</Button>
                                </Box>
                            </Box>

                            <Box sx={{ height: "auto", width: "220px", textAlign: "center", border: '1px solid #E9E9EB', margin: '5px 20px 15px 0px' }}>
                                <Box sx={{ position: 'relative' }}>
                                    <img src={img1} style={{ objectFit: "contain", height: "294px", width: "220px" }} />
                                    <CloseIcon sx={{ borderRadius: "50%", backgroundColor: "#AFB4A6", color: '#545866', padding: '3px', position: 'absolute', left: '85.5%', top: '4.5%' }} />
                                </Box>
                                <Typography sx={{ margin: "10px 0 5px", padding: '0 4px', fontSize: '15px' }}>HRX by Hrithik Roshan Unis</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: "20px" }}>
                                    <Typography sx={{ fontSize: '13px', textAlign: 'center' }}>Rs.1,099 </Typography>
                                    <strike style={{ margin: ' 3px  0 0 0px', fontSize: '11px', opacity: '0.6', textAlign: 'center' }} >Rs.6,999</strike>
                                    <Typography sx={{ fontSize: '12px', textAlign: 'center', color: '#FF977F' }}>(Rs.5900 OFF)</Typography>
                                </Box>
                                <Box width={'100%'}>
                                    <Button sx={{ border: '1px solid #E9E9EB', color: '#AA7B49', width: '100%' }} >MOVE TO BAG</Button>
                                </Box>
                            </Box>

                            <Box sx={{ height: "auto", width: "220px", textAlign: "center", border: '1px solid #E9E9EB', margin: '5px 20px 15px 0px' }}>
                                <Box sx={{ position: 'relative' }}>
                                    <img src={img1} style={{ objectFit: "contain", height: "294px", width: "220px" }} />
                                    <CloseIcon sx={{ borderRadius: "50%", backgroundColor: "#AFB4A6", color: '#545866', padding: '3px', position: 'absolute', left: '85.5%', top: '4.5%' }} />
                                </Box>
                                <Typography sx={{ margin: "10px 0 5px", padding: '0 4px', fontSize: '15px' }}>HRX by Hrithik Roshan Unis</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: "20px" }}>
                                    <Typography sx={{ fontSize: '13px', textAlign: 'center' }}>Rs.1,099 </Typography>
                                    <strike style={{ margin: ' 3px  0 0 0px', fontSize: '11px', opacity: '0.6', textAlign: 'center' }} >Rs.6,999</strike>
                                    <Typography sx={{ fontSize: '12px', textAlign: 'center', color: '#FF977F' }}>(Rs.5900 OFF)</Typography>
                                </Box>
                                <Box width={'100%'}>
                                    <Button sx={{ border: '1px solid #E9E9EB', color: '#AA7B49', width: '100%' }} >MOVE TO BAG</Button>
                                </Box>
                            </Box>





                        </Box>
                    </Grid>

                </Grid>
            </Container>

        </Box>
    )
}

export default Wishlist;
