import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import img1 from "../../assets/images/contact/Insta-1.jpg"
import img3 from "../../assets/images/contact/Insta-2.jpg"
import img2 from "../../assets/images/contact/Insta-4.jpg"
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

function Contactpage() {
    const mapRef = useRef(null); // Ref for map container
    const mapInstance = useRef(null); // Store Leaflet map instance

    useEffect(() => {
        if (!mapRef.current || mapInstance.current) return; // Prevent reinitialization

        mapInstance.current = L.map(mapRef.current).setView([28.6139, 77.2090], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance.current);

        L.marker([28.6139, 77.2090]).addTo(mapInstance.current)
            .bindPopup('<b>Hello!</b><br>This is our contact location.')
            .openPopup();

    }, []);

    return (
        <Box>
            <Box sx={{ padding: "100px 0 100px 0", backgroundColor: "#F7EBDC" }}>
                <h1 className='Marcellus' style={{ textAlign: 'center', fontSize: '36px', fontWeight: '500', marginBottom: '10px' }}>Contact</h1>
                <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                    <Link to='/'><Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px', "&:hover": { color: "#B38A69" }, }}>Home</Typography></Link>
                    <Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px' }}>/</Typography>
                    <Typography className='Marcellus' sx={{ marginRight: "3px", "&:hover": { color: "#B38A69" }, fontSize: '15px' }}>Contact</Typography>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#FFF9F4', padding: '50px 0 50px 0' }}>
                <Grid container>
                    <Grid item lg={6} sx={{ padding: { sm: '0 50px 0 50px', xs: '20px' }, width: '100%' }}>
                        <Box >
                            <Typography className='Marcellus' sx={{ fontSize: '20px', marginTop: '10px', letterSpacing: "1.5px", fontWeight: '200', display: 'flex', flexWrap: 'wrap' }}>Thoughts</Typography>
                            <Typography className='Marcellus' sx={{ fontSize: { sm: '40px', xs: "26px" }, marginTop: '10px', letterSpacing: "1.5px", fontWeight: '500', display: 'flex', flexWrap: 'wrap' }}>We Value Feedback</Typography>
                            <Typography className='Marcellus' sx={{ fontSize: { sm: '14px', xs: "12px" }, marginTop: '10px', letterSpacing: "1.5px", fontWeight: '500', display: 'flex', flexWrap: 'wrap', opacity: '0.7' }}>Donec elementum, sapien quis viverra laoreet, mauris lorem gravida ipsum, eu vehicula magna ligula sit amet lectus. Pellentesque faucibus dignissim urna eu dignissim. Nunc quis lorem posuere urna faucibus fringilla.</Typography>
                        </Box>
                        <Box sx={{ marginTop: '60px' }}>
                            <Typography className='Marcellus' sx={{ fontSize: '24px', marginTop: '10px', letterSpacing: "1.5px", fontWeight: '500' }}>Working Hours</Typography>
                            <Box sx={{ display: 'flex', textAlign: { sm: 'center', xs: "start" }, alignItems: 'center', marginTop: '20px' }}>
                                <AutoAwesomeIcon />
                                <Typography className='Marcellus' sx={{ paddingLeft: '30px', fontSize: '18px', marginTop: '10px', letterSpacing: "1.5px", fontWeight: '500', }}>Monday To Friday - 08:00am to 08.00pm</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', textAlign: { sm: 'center', xs: "start" }, alignItems: 'center', marginTop: '20px' }}>
                                <AutoAwesomeIcon />
                                <Typography className='Marcellus' sx={{ paddingLeft: '30px', fontSize: '18px', letterSpacing: "1.5px", fontWeight: '500', }}>Saturday - 08:00am to 02.00pm</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', textAlign: { sm: 'center', xs: "start" }, alignItems: 'center', marginTop: '20px' }}>
                                <AutoAwesomeIcon />
                                <Typography className='Marcellus' sx={{ paddingLeft: '30px', fontSize: '18px', letterSpacing: "1.5px", fontWeight: '500', }}>Sunday - Holiday</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', width: '100%', height: { sm: '200px', xs: "120px" }, marginTop: "50px" }}>
                            <img src={img3} style={{ height: { sm: 'auto', xs: "150px" }, width: { sm: 'auto', xs: "150px" }, padding: "15px" }} />
                            <img src={img2} style={{ height: { sm: 'auto', xs: "150px" }, width: { sm: 'auto', xs: "150px" }, padding: "15px" }} />
                            <img src={img1} style={{ height: { sm: 'auto', xs: "150px" }, width: { sm: 'auto', xs: "150px" }, padding: "15px" }} />
                        </Box>
                    </Grid>
                    <Grid item lg={6}>
                        <Box sx={{ backgroundColor: '#AC805D', height: '100%', marginRight: { sm: '30px', xs: '0px' }, padding: '30px' }}>
                            <TextField id="outlined-basic" placeholder='Name' variant="outlined" sx={{ width: '100%', borderRadius: "5px", margin: '30px 0px', backgroundColor: "#F5E7D6", '& .MuiOutlinedInput-root': { '&.Mui-focused': { color: 'black', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black', } } } }} />
                            <TextField id="outlined-basic" sx={{ width: '100%', margin: '30px 0px ', backgroundColor: "#F5E7D6", borderRadius: "5px", '& .MuiOutlinedInput-root': { '&.Mui-focused': { color: 'black', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black', } } } }} placeholder='Contact' variant="outlined" />
                            <TextField id="outlined-basic" sx={{ width: '100%', margin: '30px 0px ', backgroundColor: "#F5E7D6", borderRadius: "5px", '& .MuiOutlinedInput-root': { '&.Mui-focused': { color: 'black', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black', } } } }} placeholder='Message' variant="outlined" />
                            {/* <Button sx={{borderRadius:'none',backgroundColor:'black' , color:'white'}}>Send Message</Button> */}
                        </Box>
                    </Grid>
                </Grid>
                {/* Map Section */}
                <Box sx={{ width: '100%', height: '500px', marginTop: '50px' }}>
                    <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
                </Box>
            </Box>
        </Box>
    )
}

export default Contactpage