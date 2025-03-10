// import React, { useState } from 'react'
// import { Box, Button, Container, Input, Typography } from '@mui/material'
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom'
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import EmailIcon from '@mui/icons-material/Email';
// import HttpsIcon from '@mui/icons-material/Https';
// import img from '../../assets/images/Register/img1.avif'
// import img1 from '../../assets/images/Register/img2.jpg'



// function Signin() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     function handleSubmit() {
//         axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU1ju2jJnMoU9_55SGiHGoG3oNkBP0P6U', { email, password })
//             .then((res) => { navigate('/'); })
//             .catch((err) => console.log(err));
//     }

//     return (
//         <Box sx={{ backgroundImage: `url(${img1})`, backgroundRepeat: "no-repeat", height: '100vh',width:'100%', objectFit: "cover" , backgroundPosition: "center",}}>
//             <Container ><Typography fontSize={'12px'} style={{ padding: '12px 0px', display: 'flex', alignItems: 'center' }}><Link to={'/'}>Home</Link> <KeyboardArrowRightIcon sx={{ fontSize: 'medium' }} /> My Account</Typography></Container>
//             <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }} >
//                 {/* <h1 style={{ fontWeight: '400', margin: '20px 0' }}>MY ACCOUNT </h1> */}
//                 <Box sx={{
//                     margin: { sm: '52px 0', xs: '70px 0px  ' }, justifyContent: "center", alignItems: 'center', height: { sm: 'auto', xs: '100%' }, width: { lg: '450px', sm: '350px', xs: '100%' }, padding: { sm: '30px', xs: '0px 10px' }, bgcolor: 'white', borderRadius: '16px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
//                     backdropFilter: 'blur(7.7px)', WebkitBackdropFilter: 'blur(7.7px)', border: '1px solid rgba(255, 255, 255, 0.61)', background: 'rgba(255, 255, 255, 0.32)',
//                 }}>
//                     <h2 style={{ padding: '0 0 24px', fontWeight: '200', marginTop: '30px', textTransform: "capitalize" }}>Login</h2>

//                     <Box >
//                         <Typography sx={{ padding: '20px 0px' }}>Email Address *</Typography>
//                         <Box display={'flex'}>
//                             <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" sx={{ border: '1px solid black', width: '100%', margin: '0 0 20px 0', paddingLeft: '10px', border: 'none' }} required />
//                             <EmailIcon />
//                         </Box>
//                     </Box>

//                     <Box>
//                         <Typography sx={{ padding: '20px 0px' }}>Password *</Typography>
//                         <Box display={'flex'}>
//                             <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password " sx={{ border: '1px solid black', width: '100%', margin: '0 0 20px 0', paddingLeft: '10px', border: 'none' }} required />
//                             <HttpsIcon />
//                         </Box>

//                     </Box>

//                     <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
//                         <Button onClick={handleSubmit} variant="contained" sx={{ bgcolor: '#2973B2', marginBottom: '40px', padding: '7px 17px' }}>
//                             LOGIN
//                         </Button>
//                         <Link to={'/register'} >
//                             <Typography sx={{ fontSize: "12px", marginBottom: '40px' }}>REGISTER ?</Typography>
//                         </Link>
//                     </Box>
//                 </Box>
//             </Container>
//         </Box>
//     );
// }
// export default Signin;

import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from 'axios'
import img1 from "../../assets/images/Register/img3.jpg"

import { Link, useNavigate } from "react-router-dom";
function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handlesubmit() {
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBep6Lb_jy0TtxxYxmxmRr6Q3rLcQIVqws", { email, password })
            .then((res) => { navigate('/') })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <Box sx={{ height: "100vh", backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

                <Container sx={{ display: "flex", alignItems: "start", justifyContent: "start" }}>
                    <Box sx={{ width: { lg: "450px", xs: "350px" }, marginTop: "50px", backgroundColor: "rgba(255, 255, 255, 0.25)", boxShadow: "0 8px 30px 0 rgba(31, 38, 135, 0.37)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(14px)", borderRadius: "10px", padding: { lg: "10px 30px 25px 30px", sx: "10px" }, border: "2px solid rgba(255, 255, 255, 0.18)" }}>
                        <Box sx={{ textAlign: "end", margin: "20px 10px " }} >
                            <Link to="/register">
                                <Button className='Marcellus' variant="text" style={{ textTransform: "capitalize", color: "black", fontWeight: "bold" }}>Register</Button>
                            </Link>
                            <Button className='Marcellus' variant="contained" style={{ textTransform: "capitalize", backgroundColor: "black", fontWeight: "bold", borderRadius: "50px" }}>Sign in</Button>
                        </Box>
                        <Box sx={{ margin: "30px " }}>
                            <Typography className='Marcellus' style={{ fontSize: "43px", borderBottom: "1px solid black", marginBottom: "30px", paddingBottom: "10px", fontWeight: "600", margin: "0 0 10px", color: "black" }}>Log In</Typography>
                            <Typography className='Marcellus' sx={{ fontSize: "15px", color: "white", margin: "0 0 8px", letterSpacing: "0.5px", fontWeight: "500" }}>Email address * </Typography>
                            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius:"7px" , padding: '12px 16px', margin: "0 0 16px", width: "100%" }} />
                            <Typography className='Marcellus' sx={{ fontSize: "15px", color: "white", margin: "0 0 8px", letterSpacing: "0.5px", fontWeight: "500" }}>Password *</Typography>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius:"7px" , padding: '12px 16px', margin: "0 0 16px", width: "100%" }} />
                            <Box>
                                <Link to="/login"><Button className='Marcellus' variant="contained" onClick={handlesubmit} style={{ width: "100%", backgroundColor: "black", borderRadius: "50px", marginTop: "20px" }}>LOG IN</Button></Link></Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default Signin;