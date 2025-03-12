import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from "../../assets/images/Logo.svg";




const data = [
    {
        title: "ACCOUNT",
        h1: "Dashboard",
        h2: "Orders",
        h3: "Wishlist",
        h4: "Addresses"
    },
    {
        title: "CATALOG",
        h1: "Shop by category",
        h2: "Shop by brand",
        h3: "Promotions",
        h4: "Sitemap"
    },
    {
        title: "HELP",
        h1: "Features",
        h2: "FAQ",
        h3: "About us",
        h4: "Contact us"
    }
]
function Footer() {
    return (
        <Box sx={{backgroundColor:"#A87D5B" , marginTop:'-40px'}}>
            <Box sx={{padding:' 0 0 50px 0'  }}>
            <Container>
                <Grid container spacing={6} sx={{ marginTop: "40px" }}>
                    <Grid item md={4} xs={12}>
                        <img src={img1} style={{ height: '40px', width: "164px" }} />
                        <Typography sx={{ fontSize: "14px", color: "#444444", lineHeight: "22px", letterSpacing: "1px", fontWeight: "400", marginTop: "20px" }}>Unleash the radiance of your inner beauty with our premium jewelry brand - a perfect blend of sophistication and style.</Typography>
                    </Grid>
                    <Grid item md={5} xs={12} sx={{ display: "flex" }} >
                        {data.map((item, index) => {
                            return (
                                <Grid item md={4} xs={12} sx={{ marginRight: "23px" }} >
                                    <Typography sx={{ marginBottom: "25px", color: "#111111", fontWeight: "500" }}>{item.title}</Typography>
                                    <Typography sx={{ color: "#111111", fontSize: "14px", marginBottom: "10px", cursor: "pointer" }}>{item.h1}</Typography>
                                    <Typography sx={{ color: "#111111", fontSize: "14px", marginBottom: "10px", cursor: "pointer" }}>{item.h2}</Typography>
                                    <Typography sx={{ color: "#111111", fontSize: "14px", marginBottom: "10px", cursor: "pointer" }}>{item.h3}</Typography>
                                    <Typography sx={{ color: "#111111", fontSize: "14px", marginBottom: "10px", cursor: "pointer" }}>{item.h4}</Typography>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Typography sx={{ marginBottom: "25px", color: "#111111", fontWeight: "500" }}>CONTACT US</Typography>
                        <Typography sx={{ color: "#111111", fontSize: "14px", marginBottom: "10px", cursor: "pointer", lineHeight: "26px" }}>7031 N 35th Ave, Phoenix Arkansas, United States</Typography>
                        <Typography sx={{ color: "#111111", fontSize: "14px", marginBottom: "2px", cursor: "pointer", lineHeight: "26px" }}>Call us 8 AM - 10 PM </Typography>
                        <Typography sx={{ color: "#111111", fontSize: "14px", marginBottom: "10px", cursor: "pointer", lineHeight: "26px" }}>6668 5555 8464</Typography>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </Box>

        
        
    )
}
export default Footer