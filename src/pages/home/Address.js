import { Box, Container, Typography, Grid, Button, TextField, Radio } from '@mui/material'
import * as React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import img1 from '../../assets/images/address/address.svg'
import Modal from '@mui/material/Modal';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import DiscountIcon from '@mui/icons-material/Discount';


function Address() {
    const [value, setValue] = React.useState('home');

    const handleChange = (event) => {
        setValue((event.target).value);
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
        overflow: 'auto',
        height: { md: '500px', xs: "100vh" }
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ bgcolor: "white" }}>
            <Container >
                <Typography sx={{ borderBottom: "1px solid #D4D5D9", margin: '50px 0px 0 0  ', paddingBottom: "10px", paddingLeft: '20px', fontWeight: '600', fontSize: "22px" }}>Account</Typography>

                <Grid container sx={{ alignItems: 'center' }}  >
                    <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <ul style={{ backgroundColor: "white", padding: "10px 20px 60px 60px", borderRight: '1px solid #D4D5D9' }}>
                            {/* <Link to={'/account'} ><li style={{ display: 'flex', alignItems: 'center' , borderBottom: '1px solid #D4D5D9' ,padding:'10px 0'  }}><PersonIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> Personal Information </Typography></li></Link> */}
                            <Link to={'/overview'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><RemoveRedEyeIcon style={{ margin: '10px 25px 10px 0px' }} /> <Typography sx={{ fontSize: "17px" }}> Overview</Typography></li></Link>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Orders</Typography>

                                <Link to={'/order'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><ShoppingCartIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Orders            </Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Address</Typography>

                                <Link to={'/address'}><li style={{ color: '#AA7B49', display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><LocationOnIcon style={{ margin: '10px 25px 10px 0px', fontWeight: '600' }} /><Typography sx={{ fontSize: "20px", fontWeight: '600' }}> My Addresses         </Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Wishlist</Typography>

                                <Link to={'/whishlist'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><FavoriteIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> My Wishlist          </Typography></li></Link>
                            </Box>
                            <Box>
                                <Typography sx={{ marginTop: '10px', opacity: '0.6' }}>Discount</Typography>

                                <Link to={'/coupon'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><DiscountIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}>Coupon         </Typography></li></Link>
                            </Box>

                            <Link to={'/'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><LogoutIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> Log Out              </Typography></li></Link>
                        </ul>
                    </Grid>

                    <Grid item md={8} xs={12} >
                        <Box sx={{ textAlign: "center", marginTop: "50px", marginBottom: "100px" }}>
                            <img src={img1} style={{ height: '150px', width: '150px', marginTop: '70px' }} />
                            <Typography sx={{ fontWeight: "600", marginBottom: "10px" }}>Save your addresses now</Typography>
                            <Typography sx={{ opacity: '0.6', fontSize: '12px', marginBottom: "25px" }}>Add your home and office addresses and enjoy faster checkout</Typography>
                            <Button onClick={handleOpen} sx={{ marginBottom: '100px' }}>+ Add New Address</Button>
                            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                                <Box sx={style}>
                                    <Box sx={{ marginBottom: "15px" }}>
                                        <TextField label="Name" variant='standard' required sx={{ width: '100%' }} />
                                    </Box>
                                    <Box sx={{ marginBottom: "15px" }}>
                                        <TextField label="Mobile" variant='standard' required sx={{ width: '100%' }} />
                                    </Box>
                                    <Box sx={{ marginBottom: "15px" }}>
                                        <TextField label="Pincode" variant='standard' required sx={{ width: '100%' }} />
                                    </Box>
                                    <Box sx={{ marginBottom: "15px" }}>
                                        <TextField label="State" variant='standard' required sx={{ width: '100%' }} />
                                    </Box>
                                    <Box sx={{ marginBottom: "15px" }}>
                                        <TextField label="Address(House No , Building , Street , Area)" variant='standard' required sx={{ width: '100%' }} />
                                    </Box>
                                    <Box sx={{ marginBottom: "15px" }}>
                                        <TextField label="Locality/Town" variant='standard' required sx={{ width: '100%' }} />
                                    </Box>
                                    <Box sx={{ marginBottom: "23px" }}>
                                        <TextField label="City/District" variant='standard' required sx={{ width: '100%' }} />
                                    </Box>
                                    <Box sx={{ marginBottom: "15px" }}>
                                        <FormControl>
                                            <FormLabel id="demo-controlled-radio-buttons-group">Type of Adress</FormLabel>
                                            <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
                                                <FormControlLabel value="home" control={<Radio />} label="Home" />
                                                <FormControlLabel value="office" control={<Radio />} label="Office" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ marginBottom: "15px" }}>
                                        {
                                            (value === 'office' && <FormGroup >
                                                <FormControlLabel required control={<Checkbox defaultChecked />} label="Open on Saturday" />
                                                <FormControlLabel control={<Checkbox />} label="Open on Sunday" style={{ borderBottom: '1px solid black' }} />
                                            </FormGroup>)
                                        }
                                    </Box>
                                    <Box sx={{ marginBottom: "15px" }}>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Make this as my default address" />
                                    </Box>
                                    <Box>
                                        <Button variant='outlined' onClick={handleClose} sx={{ width: '45%', color: 'black', border: '1px solid black', marginRight: "10px" }}>Cancel</Button>
                                        <Button variant='outlined' sx={{ width: '45%', color: 'black', border: '1px solid black', bgcolor: '#60A7EA', marginLeft: '10px' }}>Save</Button>

                                    </Box>
                                </Box>
                            </Modal>
                        </Box>
                    </Grid>

                </Grid>
            </Container>

        </Box>
    )
}

export default Address;
