import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from 'axios'
import img1 from "../../assets/images/Register/img3.jpg"
import img2 from "../../assets/images/Register/img2.jpg"
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handlesubmit() {
    await axios.post("http://localhost:8080/auth/register", { email, password })
      .then((res) => {
        if (res.data.status === 200) { navigate("/login") }
        else {
          setError(res.data.message)
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <Box sx={{ height: "100vh", backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <Container sx={{ display: "flex", alignItems: "start", justifyContent: "start" }}>
          <Box sx={{ width: { sm: "450px", xs: "350px" }, marginTop: "50px", backgroundColor: "rgba(255, 255, 255, 0.25)", boxShadow: "0 8px 30px 0 rgba(31, 38, 135, 0.37)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(14px)", borderRadius: "10px", padding: { lg: "10px 30px 25px 30px", sx: "10px" }, border: "2px solid rgba(255, 255, 255, 0.18)" }}>
            <Box sx={{ textAlign: "end", margin: "20px 10px " }} >
              <Link to="/login">
                <Button className='Marcellus' variant="text" style={{ textTransform: "capitalize", color: "black", fontWeight: "bold" }}>Sign in</Button>
              </Link>
              <Button className='Marcellus' variant="contained" style={{ textTransform: "capitalize", backgroundColor: "black", fontWeight: "bold", borderRadius: "50px" }}>Register</Button>
            </Box>
            <Box sx={{ margin: "30px " }}>
              <Typography className='Marcellus' style={{ fontSize: "43px", borderBottom: "1px solid black", marginBottom: "30px", paddingBottom: "10px", fontWeight: "600", margin: "0 0 10px", color: "black" }}>Register</Typography>
              <Typography className='Marcellus' sx={{ fontSize: "15px", color: "white", margin: "0 0 8px", letterSpacing: "0.5px", fontWeight: "500" }}>Email address * </Typography>
              <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '12px 16px', margin: "0 0 16px", width: "100%", borderRadius: "7px" }} />
              <Typography className='Marcellus' sx={{ fontSize: "15px", color: "white", margin: "0 0 8px", letterSpacing: "0.5px", fontWeight: "500" }}>Password *</Typography>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '12px 16px', margin: "0 0 16px", width: "100%", borderRadius: "7px" }} />
              {
                error && <Typography style={{ color: "red" }}>{error}</Typography>
              }
              <Box>
                <Button className='Marcellus' variant="contained" onClick={handlesubmit} style={{ width: "100%", backgroundColor: "black", borderRadius: "50px", marginTop: "20px" }}>REGISTER</Button></Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default Signup;