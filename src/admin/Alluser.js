import {Box, Button} from "@mui/material";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Alluser() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    function getData() {
        axios.get("http://localhost:8080/product/allproduct")
            .then((res) => setUsers(res.data))
            .then((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    async function handleDelete(id) {
        await axios.delete(`http://localhost:8080/product/deleteproduct/${id}`)
            .then(() => {
                getData();
                navigate("/allproduct");
            })
            .catch((err) => console.log(err))
    }

    function handleEdit(id) {
        navigate(`/edituser/${id}`)
        // axios.get(`http://localhost:8080/product/allproduct/${id}`)
        //     // .then(() => navigate(`/edituser/${id}`))
        //     .catch((err) => console.log(err))
    }

    return (
        <Box className='container'>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", p: 6}}>
                <h1>Admin</h1>
                <Link to="/adduser">
                    <Button variant="contained">Add Product</Button>
                </Link>
            </Box>
            <Box sx={{justifyContent: "center", alignItems: "center", p: 5}}>

                <table style={{
                    padding: "10px",
                    margin: "30px",
                    backgroundColor: "#f0f0f0",
                    width: "100%",
                    borderCollapse: "collapse"
                }}>
                    <tr style={{textAlign: "center", backgroundColor: "#ddd"}}>
                        <th style={{padding: "10px", border: "1px solid #ccc"}}>No.</th>
                        <th style={{padding: "10px", border: "1px solid #ccc"}}>Category</th>
                        <th style={{padding: "10px", border: "1px solid #ccc"}}>Image</th>
                        <th style={{padding: "10px", border: "1px solid #ccc"}}>Name</th>
                        <th style={{padding: "10px", border: "1px solid #ccc"}}>Price</th>
                        <th style={{padding: "10px", border: "1px solid #ccc"}}>Action</th>
                    </tr>

                    {users.map((item, index) => {
                        return (
                            <tr>
                                <td style={{padding: "10px", border: "1px solid #ccc"}}>{index + 1}</td>
                                <td style={{padding: "10px", border: "1px solid #ccc"}}>{item.category}</td>
                                <td style={{padding: "10px", border: "1px solid #ccc"}}>{item.image}</td>
                                <td style={{padding: "10px", border: "1px solid #ccc"}}>{item.name}</td>
                                <td style={{padding: "10px", border: "1px solid #ccc"}}>{item.price}</td>
                                <td style={{padding: "10px", border: "1px solid #ccc"}}>
                                    <Button variant="contained" sx={{backgroundColor: "green", marginRight: "10px"}}
                                            onClick={() => handleEdit(item._id)}>EDIT</Button>
                                    <Button sx={{color: "red"}} onClick={() => handleDelete(item._id)}>DELETE</Button>
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