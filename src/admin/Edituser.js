import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
    const { id } = useParams(); // Get product ID from URL
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({
        name: "",
        category: "",
        price: "",
    });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/product/singleproduct/${id}`)
                .then((res) => {
                    setUserdata(res.data.data);
                    setImagePreview(res.data.data.image); // Show existing image
                })
                .catch((err) => console.log(err));
        }
    }, [id]); // ✅ Added dependency

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            const fileSize = file.size / 1024 / 1024; // Convert to MB
            if (fileSize > 2) {
                setError("File size should be less than 2MB.");
                return;
            }
            setError("");
            setImage(file);
            setImagePreview(URL.createObjectURL(file)); // Preview new image
        }
    }



    async function handleSubmit() {
        if (!userdata.name || !userdata.category || !userdata.price) {
            setError("All fields are required.");
            return;
        }

        const formData = new FormData();
        formData.append("name", userdata.name);
        formData.append("category", userdata.category);
        formData.append("price", userdata.price);

        if (image) {
            formData.append("image", image); // Append image only if updated
        }

        try {
            await axios.put(`http://localhost:8080/product/updateproduct/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            navigate("/allproduct"); // Navigate after update
        } catch (err) {
            setError("Failed to update. Please try again.");
            console.error(err);
        }
    }



    return (
        <Box sx={{
            margin: "50px auto",
            width: "400px",
            textAlign: "center",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px"
        }}>
            <Typography variant="h5" mb={2}>Edit Product</Typography>
            {error && <Typography color="error">{error}</Typography>}

            <TextField label="Name" fullWidth sx={{ mb: 2 }}
                       value={userdata.name}
                       onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
            />
            <TextField label="Category" fullWidth sx={{ mb: 2 }}
                       value={userdata.category}
                       onChange={(e) => setUserdata({ ...userdata, category: e.target.value })}
            />
            <TextField label="Price" type="text" fullWidth sx={{ mb: 2 }}
                       value={userdata.price}
                       onChange={(e) => setUserdata({ ...userdata, price: e.target.value })}
            />

            <input type="file" accept="image/*" onChange={handleFileChange} style={{ marginBottom: "10px" }} />

            {imagePreview && <Box sx={{ mt: 2 }}><img src={imagePreview} alt="Preview" width="100" /></Box>}

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={"/allproduct"}><Button variant="contained" sx={{ mt: 2 }}>All Product</Button></Link>
                <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>Update</Button>
            </Box>
        </Box>
    );
}

export default EditUser;
