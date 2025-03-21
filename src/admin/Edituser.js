import { Box, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edituser() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [userdata, setUserdata] = useState({
        name: " ",
        email: " "
    })


    useEffect(() => {
        axios.get(`http://localhost:8080/product/addproduct/${id}`)
            .then((res) => setUserdata(res.data))
            .catch((err) => console.log(err))
    }, [])


    function handleUpdate() {
        axios.put(`http://localhost:8080/product/addproduct/${id}`, userdata)
            .then(() => { navigate("/") })
            .catch((err) => console.log(err))
    }

    return (
        <Box>
            <Box className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
                <input type="text" className="form-control" value={userdata.name} onChange={(e) => setUserdata({ ...userdata, name: e.target.value })} id="exampleInputEmail1" aria-describedby="emailHelp" />
            </Box>
            <Box className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" value={userdata.email} onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
                    id="exampleInputPassword1" />
            </Box>
            <Button variant="contained" style={{ margin: "10px 20px", width: "20%" }} onClick={handleUpdate}>
                Updated
            </Button>
        </Box>

    )
}

export default Edituser
