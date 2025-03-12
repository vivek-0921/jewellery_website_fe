import React from 'react';
import img1 from '../../assets/images/blog/img1.jpg';
import img2 from '../../assets/images/blog/img2.jpg';
import img3 from '../../assets/images/blog/img3.jpg';
import img4 from '../../assets/images/blog/img4.jpg';
import img5 from '../../assets/images/blog/img5.jpg';
import img6 from '../../assets/images/blog/img6.jpg';
import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';

const data = [
    {
        img: img1,
        date: "NOVEMBER 8, 2024",
        title: "DEVELOPER",
        title1: "Exploring The Art Of Crafting Exquisite Golden Jewels",
        description: "Torquent Erat Fringilla Eget Tellus Velit Eros Tempor; Ullamcorper Gravida.Curabitur Quis Nullam Nascetur Auctor.",
    },
    {
        img: img2,
        date: "NOVEMBER 8, 2024",
        title: "DEVELOPER",
        title1: "10 Trendy Anklet Styles You’ll Want to Rock This Year",
        description: "Efficitur mattis suscipit tempor mus montes lobortis; semper nostra feugiat. At lectus bibendum mus netus dis gravida nascetur cras.",
    },
    {
        img: img3,
        date: "NOVEMBER 8, 2024",
        title: "DEVELOPER",
        title1: "The Ultimate Guide to Choosing the Perfect Diamond Ring",
        description: "Neque habitant curae sed quisque quis fringilla dapibus nam. Id blandit nisl euismod cras sed porta scelerisque. Pellentesque torquent.",
    },
    {
        img: img4,
        date: "NOVEMBER 8, 2024",
        title: "DEVELOPER",
        title1: "Celebrities’ Favorite Bracelets: Steal The Style Of A-List Icons",
        description: "Hendrerit vestibulum nullam nullam molestie orci risus sociosqu curae. Turpis urna hendrerit ornare, viverra facilisi lobortis.",
    },
    {
        img: img5,
        date: "NOVEMBER 8, 2024",
        title: "DEVELOPER",
        title1: "10 Must-Have Bracelets To Elevate Your Jewelry Collection",
        description: "Per quisque dui sociosqu odio tempus elementum. Vehicula senectus risus malesuada diam dapibus natoque.",
    },
    {
        img: img6,
        date: "OCTOBER 5, 2024",
        title: "DEVELOPER",
        title1: "Golden Jewels for Every Occasion: From Casual to Couture",
        description: "Class mauris vel laoreet class; faucibus per volutpat nascetur. Elit arcu rutrum sapien amet urna quis bibendum dictumst.",
    }
]

function Blog() {

    return (
        <>
            <Box sx={{ padding: "100px 0 100px 0", backgroundColor: "#F7EBDC" }}>
                <h1 className='Marcellus' style={{ textAlign: 'center', fontSize: '36px', fontWeight: '500', marginBottom: '10px' }}>Blog</h1>
                <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                    <Link to='/'><Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px', "&:hover": { color: "#B38A69" }, }}>Home</Typography></Link>
                    <Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px' }}>/</Typography>
                    <Typography className='Marcellus' sx={{ marginRight: "3px", "&:hover": { color: "#B38A69" }, fontSize: '15px' }}>Blog</Typography>
                </Box>
            </Box>
            <Box sx={{ padding: "80px 10px", display: 'flex', alignItems: "center", justifyContent: 'center', backgroundColor: "#FFF9F4" }}>
                <Grid container spacing={0}>
                    {data.map((item, index) => {
                        return (
                            <Grid item xs={6}>
                                <Box sx={{ padding: "12px", margin: "20px 0 0 0" }}>
                                    <img src={item.img} style={{ width: "685px", height: "444px" }} />
                                    <Box sx={{ display: "flex", alignItems: "center", color: "#585858" }}>
                                        <Typography className='Marcellus' sx={{ fontSize: "16px", margin: "20px 3px 15px 0", padding: "0 20px 0 0", letterSpacing: "3px" }}>{item.date}</Typography>
                                        <Typography className='Marcellus' sx={{ fontSize: "16px", cursor: "pointer", "&:hover": { color: '#AB805D' }, transition: "all 0.4s ease", letterSpacing: "2px", margin: "20px 3px 15px 0" }}>{item.title}</Typography>
                                    </Box>
                                    <Typography className='Marcellus' sx={{ cursor: "pointer", fontSize: "25px", margin: "0 0 10px ", "&:hover": { color: '#AB805D' }, transition: "all 0.4s ease" }}>{item.title1}</Typography>
                                    <Typography className='Marcellus' sx={{ fontSize: "16px", color: "#585858", lineHeight: "1.875", margin: "5px 0 20px 0" }}>{item.description}</Typography>
                                    <Button variant="contained" className='Marcellus' sx={{ backgroundColor: "#000", textTransform: "capitalize", fontSize: "18px", borderRadius: "0px", padding: "13px 30px", "&:hover": { backgroundColor: "#AB805D" }, transition: "all 0.4s ease" }} >Read More
                                        <ArrowCircleRightIcon sx={{ margin: "0px 0 0 13px", fontSize: "30px", "&:hover": { fill: "currentColor" } }} />
                                    </Button>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>



            

        </>
    )
}

export default Blog
