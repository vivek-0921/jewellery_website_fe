
import React, { useState } from 'react'
import { ButtonGroup, TextField } from "@mui/material";
import { Link } from 'react-router-dom'
import { Container, Paper, Tabs, Tab, Card, CardContent } from '@mui/material';
import img0 from '../../src/assets/images/singleproduct/singleimg1.jpg'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import img1 from '../../src/assets/images/singleproduct/product1.jpg'
import img2 from '../../src/assets/images/singleproduct/product2.jpg'
import img3 from '../../src/assets/images/singleproduct/product3.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const data = [
    { img: img1 },
    { img: img2 },
    { img: img3 }
]

function Singleproductcard() {
    const [quantity, setQuantity] = useState(1);
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <>
            <Box sx={{ padding: "100px 0 100px 0", backgroundColor: "#F7EBDC" }}>
                <h1 className='Marcellus' style={{ textAlign: 'center', fontSize: '36px', fontWeight: '500', marginBottom: '10px' }}>Shop</h1>
                <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                    <Link to='/'><Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px', "&:hover": { color: "#B38A69" }, }}>Home</Typography></Link>
                    <Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px' }}>/</Typography>
                    <Link to='/filterbycategory'><Typography className='Marcellus' sx={{ marginRight: "3px", "&:hover": { color: "#B38A69" }, fontSize: '15px' }}>Pentent</Typography></Link>
                    <Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px' }}>/</Typography>
                    <Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px', opacity: 0.7 }}>Aircraft Hair Pin</Typography>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#FFF9F4", padding: { sm: "100px 60px", xs: "50px 10px" } }}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Swiper loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} speed={2000} modules={[Pagination]} className="mySwiper">
                            {data.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <Box sx={{ width: { sm: "670px", xs: "370px" }, height: { sm: "845px", xs: "570px" }, backgroundImage: `url(${item.img})`, backgroundSize: "cover" }}></Box>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            {data.map((item, index) => {
                                return (
                                    <Box sx={{ width: { sm: "213px", xs: "110px" }, height: { sm: "213px", xs: "150px" }, marginTop: "20px", backgroundImage: `url(${item.img})`, backgroundSize: "cover" }}></Box>
                                )
                            })}
                        </Box>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Box sx={{ padding: { sm: "20px 30px", xs: "40px 30px" } }}>
                            <Typography className='Marcellus' sx={{ fontSize: { lg: "43px", xs: "38px" }, fontWeight: "500", marginBottom: "18px" }}>Aircraft Hair Pin</Typography>
                            <Typography className='Marcellus' sx={{ fontSize: "20px", fontWeight: "500" }}>23.00$ - 25.00$</Typography>
                            <Box sx={{ margin: "20px 0", display: "flex" }}>
                                <Rating name="size-medium" defaultValue={3} size="small" style={{ margin: "0 15px 0 0" }} />
                                <Typography className='Marcellus' sx={{ color: "#585858", fontSize: "15px" }}>(1 Customer Review) </Typography>
                            </Box>
                            <Box sx={{ border: "1px solid #D4D2CF", height: "1px", width: "100%" }}> </Box>
                            <Box sx={{ color: "#585858", display: "flex", padding: "30px 0 0 0" }}>
                                <Typography className='Marcellus' sx={{ padding: "0 20px 0 0", fontSize: { md: "16px", xs: "11px" } }}>SKU: MAUO-158-kj-256-70-1 </Typography>
                                <Typography className='Marcellus' sx={{ fontSize: { md: "16px", xs: "11px" } }}  >|</Typography>
                                <Typography className='Marcellus' sx={{ padding: "0 0 0 10px", fontSize: { md: "16px", xs: "11px" } }}>Available in stock (items)</Typography>
                            </Box>
                            <Typography className='Marcellus' sx={{ color: "#585858", fontSize: { sm: "16px", xs: "14px" }, margin: "24px 0 35px", lineHeight: "1.5" }}>This 10k Caret Solded features four asymmetric organic hand-cut London Blue Topaz Gold that each have their own unique beauty style.</Typography>

                            <Box sx={{ display: "flex", justifyContent: { sm: "space-between" }, flexWrap: { xs: "wrap" } }}>
                                <Typography className='Marcellus' sx={{ color: "#585858", fontSize: { sm: "17px", xs: "10px" }, cursor: "pointer", margin: { sm: "0 30px 0 0", xs: "0 10px 0 0" } }}>Select Options</Typography>
                                <Typography className='Marcellus' sx={{ color: "#000", fontSize: { sm: "17px", xs: "10px" }, margin: { sm: "0 90px 0 0", xs: "0 20px 0 0" }, cursor: "pointer" }}>Diamond Ring</Typography>
                                <Typography className='Marcellus' sx={{ color: "#585858", fontSize: { sm: "17px", xs: "10px" }, margin: { xs: "0 4px 0 0" } }}>23.00$ - 28.00$</Typography>
                                <Typography className='Marcellus' sx={{ border: "2px solid #80BD7A", padding: "1px 3px", fontSize: { sm: "14px", xs: "10px" }, color: "#008000" }}>20 in Stock</Typography>
                            </Box>
                            <Box sx={{ border: "1px solid #D4D2CF", margin: "20px 0 0 0", height: "1px", width: "100%" }}></Box>

                            <Box sx={{ display: "flex", justifyContent: { sm: "space-between" }, flexWrap: { xs: "wrap" }, margin: "20px 0 0 0" }}>
                                <Typography className='Marcellus' sx={{ color: "#585858", fontSize: { sm: "17px", xs: "10px" }, cursor: "pointer", margin: { sm: "0 30px 0 0", xs: "0 10px 0 0" } }}>
                                    <Box>
                                        <ButtonGroup variant="contained">
                                            <Button onClick={() => setQuantity(Math.max(1, quantity - 1))} sx={{ backgroundColor: "#fff", color: "#000", border: "1px solid #000", borderRadius: "0px" }}>-</Button>
                                            <TextField 
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                                inputProps={{ min: 1, style: { textAlign: "center", border: "1px solid #000", borderRadius: "0px" } }}
                                                size="small"
                                                sx={{ width: 70, textAlign: "center", borderRadius: "0px" }}/>
                                            <Button onClick={() => setQuantity(quantity + 1)} sx={{ backgroundColor: "#fff", color: "#000", border: "1px solid #000", borderRadius: "0px" }}>+</Button>
                                        </ButtonGroup>
                                    </Box>
                                </Typography>
                                <Typography className='Marcellus' sx={{ color: "#000", fontSize: { sm: "17px", xs: "10px" }, margin: { sm: "0 1px 0 0", xs: "0 3px 0 0" }, cursor: "pointer" }}> Gild Hoop Earring</Typography>
                                <Typography className='Marcellus' sx={{ color: "#585858", fontSize: { sm: "17px", xs: "10px" }, margin: { xs: "0 1px 0 0" } }}><strike className='Marcellus'>27.00$</strike> 25.00$</Typography>
                                <Typography className='Marcellus' sx={{ border: "2px solid #80BD7A" ,fontSize: { sm: "14px", xs: "10px" }, color: "#008000"}}>25 in Stock</Typography>
                            </Box>
                            <Box sx={{ padding: "20px 0", display: "flex", alignItems: "center" }}>
                                <Button className='Marcellus' sx={{ backgroundColor: "#000", color: "#fff", borderRadius: "0", textTransform: "capitalize", padding: "6px 28px", fontSize: "17px", fontWeight: "500", transition: "all 0.4s ease", '&:hover': { backgroundColor: "#AC805D", color: "#fff" } }}>Add To Cart</Button>
                                <Box sx={{ width: "45px", height: "40px", backgroundColor: "#000", margin: "0 0 0 10px", alignItems: "center", justifyContent: "center", display: "flex", '&:hover': { backgroundColor: "#AC805D", color: "#fff", transition: "all 0.4s ease", cursor: "pointer" } }}><FavoriteBorderIcon sx={{ color: "#fff", }} /></Box>
                            </Box>
                            <Box sx={{ margin: "15px 10px 10px 0" }}>
                                <Typography className='Marcellus' sx={{ display: "flex", fontSize: "16px", color: "#585858" }}><TaskAltIcon sx={{ margin: "3px 10px 0 0", fontSize: "16px" }} />Free Delivery & Free Shipping</Typography>
                            </Box>
                            <Box sx={{ margin: "15px 10px 10px 0" }}>
                                <Typography className='Marcellus' sx={{ display: "flex", fontSize: "16px", color: "#585858" }}><TaskAltIcon sx={{ margin: "3px 10px 0 0", fontSize: "16px" }} />Secure Online Payment</Typography>
                            </Box>
                            <Box sx={{ border: "1px solid #D4D2CF", margin: "30px 0 ", height: "1px", width: "100%" }}></Box>

                            <Box sx={{ display: { sm: "flex", xs: "block" }, alignItems: "center", justifyContent: { sm: "space-between" } }}>
                                <Typography className='Marcellus' sx={{ fontSize: { sm: "24px", xs: "20px" }, margin: { xs: "0 0 20px 0" } }}>Pick Up Available At Los Angles</Typography>
                                <Typography className='Marcellus' sx={{ cursor: "pointer", textDecoration: "underline", '&:hover': { color: "#AC805D", transition: "all 0.4s ease" } }}>View store information</Typography>
                            </Box>
                            <Box className='Marcellus' sx={{ fontSize: "16px", margin: "15px 0 50px 0", color: "#585858" }}>Usually Ready in 24 Hours</Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography className='Marcellus' sx={{ fontSize: "20px", color: "#585858" }}>Share:</Typography>
                                <Box sx={{ display: "flex", }}>
                                    <Typography sx={{ textAlign: "center", margin: "2px 9px 0 10px" }}><AlternateEmailIcon /></Typography>
                                    <Typography sx={{ textAlign: "center", margin: "2px 9px 0 10px" }}><InstagramIcon /></Typography>
                                    <Typography sx={{ textAlign: "center", margin: "2px 9px 0 10px" }}><FacebookIcon /></Typography>
                                    <Typography sx={{ textAlign: "center", margin: "2px 9px 0 10px" }}><YouTubeIcon /></Typography>
                                    <Typography sx={{ textAlign: "center", margin: "2px 9px 0 10px" }}><XIcon /></Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <Box>
                <Tabs value={selectedTab} onChange={handleTabChange} aria-label="product tabs">
                    <Tab sx={{ margin: '30px 0 10px 10px ', color: '#B38A69' }} label="Description" />
                    <Tab sx={{ margin: '30px 0 10px 0 ', color: '#B38A69' }} label="Additional information" />
                </Tabs>
                {selectedTab === 0 && (
                    <Grid container>
                        <Grid item lg={7}>
                            <Typography className='Marcellus' variant="body1" sx={{ padding: '40px 30px', opacity: '0.7', letterSpacing: "1.2px" }}>
                                Ut faucibus libero urna, id condimentum magna lacinia vitae. Nullam diam magna, auctor ut risus eget, scelerisque aliquam magna. Nam eu consectetur urna, dapibus tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat mi, placerat vel sem nec, elementum pharetra purus. Integer eget lacus non magna interdum scelerisque. Aliquam lacus tellus, aliquam quis sem vitae, hendrerit blandit velit. Cras egestas nec mauris sit amet accumsan. Cras aliquam ex ligula, eget maximus tortor suscipit non. Vestibulum mauris est, iaculis et interdum ac, sagittis pretium nibh. Ut nec urna mollis, rhoncus arcu volutpat, tempor ex. Nulla ultrices gravida urna ac varius. Phasellus fermentum, arcu et consectetur mattis, dui elit interdum velit, ut blandit lacus orci ac justo.
                                Nullam diam magna, auctor ut risus eget, scelerisque aliquam magna. Nam eu consectetur urna, dapibus tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus libero urna, id condiment ummagna lacinia vitae. Vestibulum erat mi, placerat vel sem nec, elementum pharetra purus. Integer eget lacus non magna interdum scelerisque.
                            </Typography>
                        </Grid>
                        <Grid item lg={5} >
                            <Box>
                                <img src={img0} style={{ height: 'auto', width: "100%", padding: '40px 20px 20px' }} />
                            </Box>
                        </Grid>
                    </Grid>
                )}
                {selectedTab === 1 && (
                    <Box sx={{ padding: '40px 20px' }}>
                        <Grid container>
                            <Grid item lg={3}>
                                <Typography className='Marcellus' sx={{ border: '1px solid #DDDDDD', padding: '10px', textAlign: "center", marginTop: "1px", fontWeight: '600' }}>Weight</Typography>
                                <Typography className='Marcellus' sx={{ border: '1px solid #DDDDDD', padding: '10px', textAlign: "center", marginTop: "1px", fontWeight: '600' }}>Dimensions</Typography>
                                <Typography className='Marcellus' sx={{ border: '1px solid #DDDDDD', padding: '10px', textAlign: "center", marginTop: "1px", fontWeight: '600' }}>Weight</Typography>
                            </Grid>
                            <Grid item lg={9} >
                                <Typography className='Marcellus' sx={{ border: '1px solid #DDDDDD', padding: '10px', textAlign: "center", marginTop: "1px", opacity: 0.7, marginLeft: '1px' }}>0.5 kg</Typography>
                                <Typography className='Marcellus' sx={{ border: '1px solid #DDDDDD', padding: '10px', textAlign: "center", marginTop: "1px", opacity: 0.7, marginLeft: '1px' }}>    24 × 1 × 2 cm</Typography>
                                <Typography className='Marcellus' sx={{ border: '1px solid #DDDDDD', padding: '10px', textAlign: "center", marginTop: "1px", opacity: 0.7, marginLeft: '1px' }}>10g, 15g, 20g</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </Box>

        </>
    )
}

export default Singleproductcard
