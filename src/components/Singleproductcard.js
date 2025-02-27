
import React, { useState } from 'react'
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

const data = [
    { img: img1 },
    { img: img2 },
    { img: img3 }
]

function Singleproductcard() {
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
            <Box sx={{ backgroundColor: "#FFF9F4", padding: "100px 60px" }}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Swiper loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} speed={2000} modules={[Pagination]} className="mySwiper">
                            {data.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <Box sx={{ width: "670px", height: "845px", backgroundImage: `url(${item.img})`, backgroundSize: "cover" }}></Box>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <Box sx={{ display: "flex" }}>
                            {data.map((item, index) => {
                                return (
                                    <Box sx={{ width: "213px", height: "213px", backgroundImage: `url(${item.img})`, backgroundSize: "cover", margin: "15px 16px 0 0" }}></Box>
                                )
                            })}
                        </Box>
                    </Grid>

                    <Grid item md={6}>
                        <Typography className='Marcellus' sx={{ fontSize: "43px", fontWeight: "500", marginBottom: "18px" }}>Aircraft Hair Pin</Typography>
                        <Typography className='Marcellus' sx={{ fontSize: "20px", fontWeight: "500" }}>23.00$ - 25.00$</Typography>
                        <Box sx={{ margin: "20px 0", display: "flex" }}>
                            <Rating name="size-medium" defaultValue={3} size="small" style={{ margin: "0 15px 0 0" }} />
                            <Typography className='Marcellus' sx={{ color: "#585858", fontSize: "15px" }}>(1 Customer Review) </Typography>
                        </Box>
                        <Box sx={{ border: "1px solid #D4D2CF", height: "1px", width: "100%" }}> </Box>
                        <Box sx={{ color: "#585858", fontSize: "16px", display: "flex", padding: "30px 0 0 0" }}>
                            <Typography className='Marcellus' sx={{ padding: "0 20px 0 0" }}>SKU: MAUO-158-kj-256-70-1 </Typography>
                            <Typography className='Marcellus'  >|</Typography>
                            <Typography className='Marcellus' sx={{ padding: "0 0 0 10px" }}>Available in stock (items)</Typography>
                        </Box>
                        <Typography className='Marcellus' sx={{ color: "#585858", fontSize: "16px", margin: "24px 0 35px", lineHeight: "1.5" }}>This 10k Caret Solded features four asymmetric organic hand-cut London Blue Topaz Gold that each have their own unique beauty style.</Typography>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography className='Marcellus' sx={{ color: "#585858", fontSize: "17px", cursor: "pointer" }}>Select Options</Typography>
                            <Typography className='Marcellus' sx={{ color: "#000", fontSize: "17px", margin: "0 130px 0 0", cursor: "pointer" }}>Diamond Ring</Typography>
                            <Typography className='Marcellus' sx={{ color: "#585858", fontSize: "17px" }}>23.00$ - 28.00$</Typography>
                            <Typography className='Marcellus' sx={{ border: "2px solid #80BD7A", padding: "1px 3px", fontSize: "14px", color: "#008000" }}>20 in Stock</Typography>
                        </Box>
                        <Box sx={{ border: "1px solid #D4D2CF", margin: "20px 0 0 0", height: "1px", width: "100%" }}></Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0 0 " }}>

                            <Typography className='Marcellus' sx={{ color: "#585858", fontSize: "17px", cursor: "pointer" }}>
                                inc dec
                            </Typography>
                            <Typography className='Marcellus' sx={{ color: "#000", fontSize: "17px", margin: "0 130px 0 0", cursor: "pointer" }}> Gild Hoop Earring</Typography>
                            <Typography className='Marcellus' sx={{ color: "#585858", fontSize: "17px" }}><strike className='Marcellus'  >27.00$</strike> 25.00$</Typography>
                            <Typography className='Marcellus' sx={{ border: "2px solid #80BD7A", padding: "1px 3px", fontSize: "14px", color: "#008000" }}>25 in Stock</Typography>
                        </Box>
                        <Box sx={{ padding: "20px 0" }}>
                            <Button className='Marcellus' sx={{ backgroundColor: "#000", color: "#fff", borderRadius: "0", textTransform: "capitalize", padding: "6px 28px" , fontSize:"17px", fontWeight:"500",transition: "all 0.5s ease",'&:hover': {backgroundColor: "#AC805D", color: "#fff"} }}>Add To Cart</Button>
                            <Box sx={{width:"20px" , height:"20px" , backgroundColor:"#000" , }}><FavoriteBorderIcon/></Box>
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
