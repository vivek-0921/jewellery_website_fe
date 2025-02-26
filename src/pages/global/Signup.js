// import React, { useState } from 'react'
// import { Box, Button, Container, Input, Typography } from '@mui/material'
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom'
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// function Signup() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     function handleSubmit() {
//         axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU1ju2jJnMoU9_55SGiHGoG3oNkBP0P6U', { email, password })
//             .then((res) =>{ navigate('/login'); })
//             .catch((err) => console.log(err));
//     }

//     return (
//         <Box sx={{ bgcolor: '#77B254', height: "auto"  }}>
//             <Container ><Typography fontSize={'12px'} style={{ padding: '12px 0px', display: 'flex', alignItems: 'center' }}><Link to={'/'}>Home</Link> <KeyboardArrowRightIcon sx={{ fontSize: 'medium' }} /> My Account</Typography></Container>
//             <Container sx={{ display: 'flex' , flexDirection: 'column', alignItems: 'center', padding: '20px 0' }} >
//                 {/* <h1 style={{ fontWeight: '400', margin: '20px 0' }}>MY ACCOUNT </h1> */}
//                 <Box sx={{
//                     margin:{sm:'52px 0' , xs:'10px -10px  '},justifyContent: "center", alignItems: 'center', height: 'auto', width: {lg:'450px' , sm:'350px' , xs:'250px'}, padding: {sm:'30px' , xs:'0px 10px'}, bgcolor: 'white', borderRadius: '16px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
//                     backdropFilter: 'blur(7.7px)', WebkitBackdropFilter: 'blur(7.7px)', border: '1px solid rgba(255, 255, 255, 0.61)', background: 'rgba(255, 255, 255, 0.32)',
//                 }}>
//                     <h2 style={{ padding: '0 0 24px', fontWeight: '200', marginTop: '30px', textTransform: "capitalize" }}>Register</h2>

//                     <Box>
//                         <Typography sx={{ padding: '20px 0px' }}>Email Address *</Typography>
//                         <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" sx={{ border: '1px solid black', width: '100%', margin: '0 0 20px 0', paddingLeft: '10px', border: 'none' }} required />
//                     </Box>

//                     <Box>
//                         <Typography sx={{ padding: '20px 0px' }}>Password *</Typography>
//                         <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" sx={{ border: '1px solid black', width: '100%', margin: '0 0 20px 0', paddingLeft: '10px', border: 'none' }} required />
//                     </Box>

//                     <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
//                         <Button onClick={handleSubmit} variant="contained" sx={{ bgcolor: '#2973B2', marginBottom: '40px', padding: '7px 17px' }}>
//                             REGISTER
//                         </Button>
//                         <Link to={'/login'} >
//                             <Typography sx={{ fontSize: "12px", marginBottom: '40px' }}> LOGIN ?</Typography>
//                         </Link>
//                     </Box>
//                 </Box>
//             </Container>
//         </Box>
//     );
// }

// export default Signup;
import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handlesubmit() {
    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBep6Lb_jy0TtxxYxmxmRr6Q3rLcQIVqws", { email, password })
      .then((res) => { navigate('/login') })
      .catch((err) => console.log(err))
  }
  return (
    <>
    <Box sx={{height:"100vh",backgroundColor:"#DCD7C9"}}>
    <Container>
         <Link to="/"> <Typography style={{paddingTop:"10px",fontSize:"15px", fontWeight:"500"}}>Home</Typography></Link>
          <Typography></Typography>
        </Container>
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Box sx={{ width: {lg:"650px",xs:"350px"} ,marginTop:"50px",backgroundColor: "rgba(255, 255, 255, 0.25)",boxShadow: "0 8px 30px 0 rgba(31, 38, 135, 0.37)",backdropFilter: "blur(4px)",WebkitBackdropFilter: "blur(4px)",  borderRadius:"25px",padding:{lg:"10px 50px 25px 50px",sx:"10px"},border: "1px solid rgba(255, 255, 255, 0.18)"}}>
          <Box sx={{ textAlign: "end", margin: "30px 10px " }} >
            <Link to="/login">
              <Button variant="text" style={{ textTransform: "capitalize",color:"black",fontWeight:"bold" }}>Sign in</Button>
            </Link>
            <Button variant="contained" style={{ textTransform: "capitalize",backgroundColor:"black",fontWeight:"bold" ,borderRadius:"50px"}}>Register</Button>
          </Box>
          <Box sx={{ margin: "30px " }}>
            <Typography style={{ fontSize: "45px", fontWeight: "bold",margin:"0 0 10px" }}>Register</Typography>
          <Typography sx={{ fontSize: "14px", margin: "0 0 8px", letterSpacing: "0.5px",fontWeight:"500" }}>Email address * </Typography>
         <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '12px 16px', margin: "0 0 16px", width: "100%" }} />
          <Typography sx={{ fontSize: "14px", margin: "0 0 8px", letterSpacing: "0.5px",fontWeight:"500" }}>Password *</Typography>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '12px 16px', margin: "0 0 16px", width: "100%" }} />
          <Box>
          <Link to="/login"><Button variant="contained" onClick={handlesubmit} style={{ width: "100%",backgroundColor:"black",borderRadius:"50px",marginTop:"20px" }}>REGISTER</Button></Link></Box>
        </Box>
        </Box>
      </Container>
    </Box>
    </>
  );
}
export default Signup;