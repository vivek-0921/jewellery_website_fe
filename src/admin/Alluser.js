import { Padding } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Alluser() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    function getData() {
        axios.get("https://674ec223bb559617b26c87d9.mockapi.io/user")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    function handleDelete(id) {
        axios.delete(`https://674ec223bb559617b26c87d9.mockapi.io/user/${id}`)
            .then(() => { getData(); navigate("/") })
            .catch((err) => console.log(err))
    }


    function handleEdit(id) {
        axios.get(`https://674ec223bb559617b26c87d9.mockapi.io/user/${id}`)
            .then(() => navigate(`/edituser/${id}`))
            .catch((err) => console.log(err))
    }

    return (
        <Box className='container'>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 6 }}>
                <h1>Admin</h1>
                <Link to="/adduser">
                    <Button variant="contained">Add Product</Button>
                </Link>
            </Box>
            <Box sx={{ justifyContent: "center", alignItems: "center", p: 5 }}>

                <table style={{ padding: "10px", margin: "30px", backgroundColor: "#f0f0f0", width: "100%", borderCollapse: "collapse" }}>
                    <tr style={{ textAlign: "center", backgroundColor: "#ddd" }}>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>No.</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Category</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Image</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Name</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Price</th>
                        <th style={{ padding: "10px", border: "1px solid #ccc" }}>Action</th>
                    </tr>

                    {users.map((item, index) => {
                        return (
                            <tr>
                                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{index + 1}</td>
                                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{item.Category}</td>
                                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{item.Image}</td>
                                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{item.Name}</td>
                                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{item.Price}</td>
                                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                                    <button className='btn btn-warning' onClick={() => handleEdit(item.id)}>EDIT</button>
                                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>DELETE</button>
                                </td>

                            </tr>
                        )
                    })}
                </table>
            </Box>
        </Box>
    )
}

export default Alluser
