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

function Accountedit() {

    const navigate = useNavigate();
    const { id } = useParams();

    const {
        reset,
        control,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    useEffect(() => {
        axios.get(`https://6746e4d238c8741641d494c4.mockapi.io/demo/${id}`)
            .then((res) => reset(res.data))
            .catch((err) => console.log(err))
    }, [id, reset])
    function onsubmit(data) {
        axios.put(`https://6746e4d238c8741641d494c4.mockapi.io/demo/${id}`, data)
            .then((res) => navigate('/'))
            .catch((err) => console.log(err))
    }
    // }, [reset])


    return (
        <Box sx={{ bgcolor: "white" }}>
            <Container >
                <Typography sx={{ borderBottom: "1px solid #D4D5D9", margin: '50px 0px 0 0  ', paddingBottom: "10px", paddingLeft: '20px', fontWeight: '600', fontSize: "22px" }}>Account</Typography>

                <Grid container sx={{ alignItems: 'center' }}  >
                    <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <ul style={{ backgroundColor: "white", marginRight: '40px', padding: "10px 20px 60px 60px", borderRight: '1px solid #D4D5D9' }}>
                            {/* <Link to={'/account/1 '} Categ><li style={{color:'#AA7B49' , display: 'flex', alignItems: 'center' , borderBottom: '1px solid #D4D5D9' ,padding:'10px 0'  }}><PersonIcon style={{ margin: '10px 25px 10px 0px' , fontWeight:'600'  }} /><Typography sx={{ fontSize: "20px", fontWeight:'600'  }}> Personal Information </Typography></li></Link> */}
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

                                <Link to={'/coupon'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0 10px 15px' }}><DiscountIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}>Coupon         </Typography></li></Link>
                            </Box>

                            <Link to={'/'}><li style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #D4D5D9', padding: '10px 0' }}><LogoutIcon style={{ margin: '10px 25px 10px 0px' }} /><Typography sx={{ fontSize: "17px" }}> Log Out              </Typography></li></Link>
                        </ul>
                    </Grid>
                    <Grid item md={8} xs={12} >
                        <Container maxWidth="lg" >

                            <Box sx={{ margin: '20px 0', padding: { md: '50px 150px', xs: "30px 10px" }, borderRadius: '8px', border: '1px solid #D4D4D9' }}>
                                <Typography variant="h4" sx={{ marginBottom: '20px', color: '#AA7B49', textAlign: 'start', fontWeight: '600', fontSize: "26px", paddingBottom: '12px', opacity: '1', borderBottom: "1px solid #d3d3d3" }}>
                                    Profile Details
                                </Typography>
                                <form onSubmit={handleSubmit(onsubmit)}>
                                    <Box sx={{ marginBottom: '5px' }}>
                                        <TextField
                                            fullWidth
                                            label="Firstname"
                                            variant="filled"
                                            {...register('firstname', { required: 'Firstname is required' })}
                                            error={!!errors.firstname}
                                            helperText={errors.firstname ? 'Enter Your Firstname' : ''}

                                        />
                                    </Box>

                                    <Box sx={{ marginBottom: '5px' }}>
                                        <TextField
                                            fullWidth
                                            label="Lastname"
                                            variant="filled"
                                            {...register('lastname', { required: 'Lastname is required' })}
                                            error={!!errors.lastname}
                                            helperText={errors.lastname ? 'Enter Your Lastname' : ''}
                                        />
                                    </Box>

                                    <Box sx={{ marginBottom: '5px' }}>
                                        <TextField
                                            fullWidth
                                            label="Contact"
                                            variant="filled"
                                            {...register('contact', {
                                                required: 'Contact is required',
                                                pattern: { value: /^[0-9]+$/, message: 'Only numbers allowed' },
                                                minLength: { value: 10, message: 'Min 10 digits required' },
                                                maxLength: { value: 10, message: 'Max 10 digits only' }
                                            })}
                                            error={!!errors.contact}
                                            helperText={errors.contact ? errors.contact.message : ''}
                                        />
                                    </Box>

                                    <Box sx={{ marginBottom: '5px' }}>
                                        <TextField
                                            fullWidth
                                            label="Email"

                                            variant="filled"
                                            type="email"
                                            {...register('email', { required: 'Email is required' })}
                                            error={!!errors.email}
                                            helperText={errors.email ? 'Enter Your Email' : ''}
                                        />
                                    </Box>

                                    <Box sx={{ marginBottom: '5px' }}>
                                        <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>Gender</Typography>

                                        <Controller
                                            name="gender"
                                            control={control}
                                            // defaultValue="male" 
                                            rules={{ required: 'Gender is required' }}
                                            render={({ field }) => (
                                                <RadioGroup {...field} row id="gender">
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                    <FormControlLabel value="others" control={<Radio />} label="Others" />
                                                </RadioGroup>
                                            )}
                                        />
                                        {errors.gender && <Typography color="error">{errors.gender.message}</Typography>}
                                    </Box>

                                    <Box sx={{ marginBottom: '1rem' }}>
                                        <TextField
                                            fullWidth
                                            label="Age"
                                            variant="filled"
                                            type="number"
                                            {...register('age', {
                                                required: 'Age is required',
                                                min: { value: 10, message: 'Age must be above 10' },
                                                max: { value: 50, message: 'Age must be below 50' }
                                            })}
                                            error={!!errors.age}
                                            helperText={errors.age ? errors.age.message : ''}
                                        />
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            type="submit"
                                            color='white'

                                            disabled={isSubmitting}
                                            maxWidth='sm'
                                            sx={{ backgroundColor: '#AA7B49', border: 'none', color: 'black', width: "100%", padding: '0.75rem 2rem', fontSize: '1rem' }}
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default Accountedit;
