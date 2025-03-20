import { Box, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Adduser() {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        category: "",
        price: ""
    });
    const [image, setImage] = useState(null);


    function handleFileChange(e) {
        const file = e.target.files[0];
        setImage(file);
    }

    async function handleSubmit() {
        const formData = new FormData();
        formData.append("name", userdata.name);
        formData.append("email", userdata.email);
        formData.append("category", userdata.category);
        formData.append("price", userdata.price);
        if (image) {
            formData.append("file", image);
        }

        try {
            await axios.post("https://674ec223bb559617b26c87d9.mockapi.io/user", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Box sx={{ margin: "100px 200px", textAlign: "center" }}>
            <Box className="mb-3" sx={{ margin: "10px 20px" }}>
                <label htmlFor="category" className="form-label">Category :</label>
                <input style={{ margin: "0 0 0 20px", width: "80%" }} type="text" className="form-control"
                    value={userdata.category}
                    onChange={(e) => setUserdata({ ...userdata, category: e.target.value })}
                    id="category" />
            </Box>


            <Box className="mb-3" sx={{ margin: "10px 20px" }}>
                <label htmlFor="imageUpload" className="form-label">Image :</label>
                <input type="file" accept="image/*" style={{ margin: "0 0 0 20px", width: "80%" }}
                    onChange={handleFileChange}
                    id="imageUpload"  />
            </Box>

            <Box className="mb-3" sx={{ margin: "10px 20px" }}>
                <label htmlFor="name" className="form-label">Name :</label>
                <input style={{ margin: "0 0 0 20px", width: "80%" }} type="text" className="form-control"
                    value={userdata.name}
                    onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
                    id="name" />
            </Box>

            <Box className="mb-3" sx={{ margin: "10px 20px" }}>
                <label htmlFor="email" className="form-label">Price :</label>
                <input style={{ margin: "0 0 0 20px", width: "80%" }} type="email" className="form-control"
                    value={userdata.email}
                    onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
                    id="email"  />
            </Box>

            <Box className="mb-3" sx={{ margin: "10px 20px" }}>
                <label htmlFor="price" className="form-label">Action :</label>
                <input style={{ margin: "0 0 0 20px", width: "80%" }} type="text" className="form-control"
                    value={userdata.price}
                    onChange={(e) => setUserdata({ ...userdata, price: e.target.value })}
                    id="price" />
            </Box>

            <Button variant="contained" style={{ margin: "10px 20px", width: "20%" }} onClick={handleSubmit}>
                Submit
            </Button>
        </Box>
    );
}

export default Adduser;
