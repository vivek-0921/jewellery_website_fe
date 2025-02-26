import { Box, Container, Typography, Grid, Button } from '@mui/material'
import * as React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal';
import { Autocomplete, TextField } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DiscountIcon from '@mui/icons-material/Discount';


function Order() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = React.useState('');
    const options = [
        'Apple',
        'Banana',
        'Orange',
        'Grapes',
        'Strawberry',
        'Blueberry',
        'Watermelon',
        'Peach',
        'Pineapple',
        'Mango',
    ];
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow: 'auto',
        height: { sm: '500px', xs: "100vh" }

    };

    return (
        <Box sx={{ bgcolor: "white" }}>
            <Container >
                <Typography sx={{ borderBottom: "1px solid #D4D5D9", margin: '50px 0px 0 0  ', paddingBottom: "10px", paddingLeft: '20px', fontWeight: '600', fontSize: "22px" }}>Account</Typography>

                <Grid container sx={{ alignItems: 'start' }}  >
                    <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <ul style={{ marginTop: "0px", marginRight: '40px', backgroundColor: "white",padding: "10px 20px 60px 60px", borderRight: '1px solid #D4D5D9' }}>
                            {/* <Link to={'/account'} ><li style={{ display: 'flex', alignItems: 'center' , borderBottom: '1px solid #D4D5D9' ,padding:'10px 0'  }}><PersonIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> Personal Information </Typography></li></Link> */}



                            <Link to={'/overview'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><RemoveRedEyeIcon style={{ margin: '10px 25px 10px 0px' }} /> <Typography sx={{ fontSize: "17px" }}> Overview</Typography></li></Link>

                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Orders</Typography>

                                <Link to={'/order'}><li style={{ color: '#AA7B49', display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><ShoppingCartIcon style={{ margin: '10px 25px 10px 0px', fontWeight: '600' }} /><Typography sx={{ fontSize: "20px", fontWeight: '600' }}> My Orders</Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Address</Typography>

                                <Link to={'/address'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><LocationOnIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Addresses</Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Wishlist</Typography>

                                <Link to={'/whishlist'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><FavoriteIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Wishlist</Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Discount</Typography>

                                <Link to={'/coupon'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><DiscountIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}>Coupon         </Typography></li></Link>
                            </Box>



                            <Link to={'/'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><LogoutIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> Log Out</Typography></li></Link>


                        </ul>
                    </Grid>

                    <Grid item md={8} xs={12} >

                        <Box sx={{ justifyContent: "space-between", display: "flex", marginTop: '50px' }}>
                            <Box>
                                <Typography sx={{ fontWeight: "600", fontSize: { md: '20px', xs: "14px" } }}>All orders</Typography>
                                <Typography sx={{ fontSize: { md: "16px", xs: "12px" } }}>from anytime</Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "start" }}>
                                <Box sx={{ marginRight: "20px" }}>
                                    <Autocomplete sx={{ width: { sm: '250px', xs: "140px" }, height: "10px", marginLeft: "10px", padding: '0px' }} value={value} onChange={(event, newValue) => setValue(newValue || '')} inputValue={value} onInputChange={(event, newInputValue) => setValue(newInputValue || '')} options={options} renderInput={(params) => <TextField {...params} label="Search " variant="outlined" />} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button onClick={handleOpen}><FilterAltIcon sx={{ height: { sm: '50px', xs: "25px" }, width: { sm: '50px', xs: "25px" }, padding: { sm: '10px', xs: "2px" }, color: "grey" }} />
                                        Filter</Button>
                                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"><Box sx={style}>
                                        <Box>
                                            <h2 style={{ marginBottom: '20px' }}>Filter Orders</h2>
                                            <FormControl>
                                                <FormLabel id="demo-radio-buttons-group-label" sx={{ color: 'grey', fontWeight: "600", marginBottom: "10px" }}>Status</FormLabel>
                                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="all" name="radio-buttons-group">
                                                    <FormControlLabel value="all" control={<Radio />} label="All" />
                                                    <FormControlLabel value="on the way" control={<Radio />} label="On the way" />
                                                    <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
                                                    <FormControlLabel value="cancel" control={<Radio />} label="Cancelled" sx={{ borderBottom: "1px solid grey", paddingBottom: '10px', width: '265%' }} />
                                                </RadioGroup>
                                            </FormControl>
                                            <br />
                                            <FormControl >
                                                <FormLabel id="demo-radio-buttons-group-label" sx={{ color: 'grey', fontWeight: "600", marginBottom: "10px", marginTop: "20px" }}>Time</FormLabel>
                                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Anytime" name="radio-buttons-group">
                                                    <FormControlLabel value="Anytime" control={<Radio />} label="Anytime" />
                                                    <FormControlLabel value="Last 30 days" control={<Radio />} label="Last 30 days" />
                                                    <FormControlLabel value="Last 6 months" control={<Radio />} label="Last 6 months" />
                                                    <FormControlLabel value="Last year" control={<Radio />} label="Last year" sx={{ borderBottom: "1px solid grey", paddingBottom: '10px', width: '230%' }} />
                                                </RadioGroup>
                                            </FormControl>
                                            <Box>
                                                <Button variant='outlined' onClick={handleClose} sx={{ width: '45%', color: 'black', border: '1px solid black', marginRight: "10px", marginTop: "20px" }}>Cancel</Button>
                                                <Button variant='outlined' sx={{ width: '45%', color: 'black', border: '1px solid black', bgcolor: '#60A7EA', marginLeft: '10px', marginTop: "20px" }}>Save</Button>

                                            </Box>
                                        </Box>
                                    </Box>
                                    </Modal>
                                </Box>
                            </Box>


                        </Box>
                        <Box>

                            <Box >
                                <Box sx={{ marginTop: '50px', textAlign: "start", display: 'flex', marginBottom: "10px" }} >
                                    <Box>
                                        <LocalShippingIcon sx={{ backgroundColor: "black", color: "white", height: "50px", width: "50px", padding: '12px', borderRadius: "50%" }} />
                                    </Box>
                                    <Box >
                                        <Typography sx={{ marginLeft: '10px ', fontWeight: "600", color: "green" }}>Delivered</Typography>
                                        <Typography sx={{ marginLeft: '10px ', fontWeight: "400", color: "grey", fontSize: "12px" }}>On Tue ,15 Nov 2022</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ backgroundColor: "#F5F5F5", width: "auto", padding: '10px 10px' }}>
                                    <Box sx={{ display: "flex" }}>
                                        <Box sx={{ height: { md: "70px", xs: '80px' }, width: { md: "43px", xs: "79px" }, marginTop: '9px' }}>
                                            <img style={{ height: "70px", width: "43px", borderRadius: "12px", border: "1px solid black", marginLeft: { md: "20px", xs: '0px' } }} />

                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600", fontSize: "12px", margin: '8px 0 2px 8px' }}> U.S.POLO Assn.</Typography>
                                            <Typography sx={{ fontSize: "12px", margin: '0px 0 2px 8px', alignItems: "center", display: "flex" }}> U.S.POLO Assn Men Charcoal Back Grey Tailored Fit Checked Pure Cotton Casual Shirt <KeyboardArrowRightIcon sx={{ marginLeft: '10px' }} /></Typography>
                                            <Typography sx={{ fontSize: "12px", margin: '0px 0 2px 8px' }}> Size : 40</Typography>
                                        </Box>
                                    </Box>
                                    <Box >
                                        <Typography sx={{ margin: "20px 10px", color: 'grey', fontSize: "14px" }}>* Exchange/Return window closed On Tue ,29 Nov 2022</Typography>
                                        <Stack spacing={1} sx={{ marginLeft: '10px' }}>
                                            <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                        </Stack>
                                        <Typography sx={{ margin: "10px 10px", color: 'black', fontSize: "14px" }}>Rate & Review </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '50px', textAlign: "start", display: 'flex', marginBottom: "10px" }} >
                                    <Box>
                                        <LocalShippingIcon sx={{ backgroundColor: "black", color: "white", height: "50px", width: "50px", padding: '12px', borderRadius: "50%" }} />
                                    </Box>
                                    <Box >
                                        <Typography sx={{ marginLeft: '10px ', fontWeight: "600", color: "green" }}>Delivered</Typography>
                                        <Typography sx={{ marginLeft: '10px ', fontWeight: "400", color: "grey", fontSize: "12px" }}>On Tue ,15 Nov 2022</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ backgroundColor: "#F5F5F5", width: "auto", padding: '10px 10px' }}>
                                    <Box sx={{ display: "flex" }}>
                                        <Box sx={{ height: { md: "70px", xs: '80px' }, width: { md: "43px", xs: "79px" }, marginTop: '9px' }}>
                                            <img style={{ height: "70px", width: "43px", borderRadius: "12px", border: "1px solid black", marginLeft: { md: "20px", xs: '0px' } }} />

                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600", fontSize: "12px", margin: '8px 0 2px 8px' }}> U.S.POLO Assn.</Typography>
                                            <Typography sx={{ fontSize: "12px", margin: '0px 0 2px 8px', alignItems: "center", display: "flex" }}> U.S.POLO Assn Men Charcoal Back Grey Tailored Fit Checked Pure Cotton Casual Shirt <KeyboardArrowRightIcon sx={{ marginLeft: '10px' }} /></Typography>
                                            <Typography sx={{ fontSize: "12px", margin: '0px 0 2px 8px' }}> Size : 40</Typography>
                                        </Box>
                                    </Box>
                                    <Box >
                                        <Typography sx={{ margin: "20px 10px", color: 'grey', fontSize: "14px" }}>* Exchange/Return window closed On Tue ,29 Nov 2022</Typography>
                                        <Stack spacing={1} sx={{ marginLeft: '10px' }}>
                                            <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                        </Stack>
                                        <Typography sx={{ margin: "10px 10px", color: 'black', fontSize: "14px" }}>Rate & Review </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>

                </Grid>
            </Container>

        </Box>
    )
}

export default Order;
