import React, { useState } from "react";
import { ButtonGroup, Button, TextField, Box } from "@mui/material";

function Extra() {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <Box>
                <ButtonGroup variant="contained">
                    <Button onClick={() => setQuantity(Math.max(1, quantity - 1))} sx={{backgroundColor:"#fff" ,color:"#000",border:"1px solid #000",borderRadius:"0px"}}>-</Button>
                    <TextField
                        type="number"
                        value={quantity} 
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        inputProps={{ min: 1, style: { textAlign: "center" ,border:"1px solid #000",borderRadius:"0px"} }}
                        size="small"
                        sx={{ width: 70, textAlign: "center" ,borderRadius:"0px"}}
                    />
                    <Button onClick={() => setQuantity(quantity + 1)} sx={{backgroundColor:"#fff" ,color:"#000",border:"1px solid #000",borderRadius:"0px"}}>+</Button>
                </ButtonGroup>
            </Box>
        </>
    )
}

export default Extra
