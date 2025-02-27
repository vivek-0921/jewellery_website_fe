import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as img1 } from '../../src/assets/images/shopbycategory/img1.svg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import img2 from '../../src/assets/images/shopbycategory/img2.webp';
import img3 from '../../src/assets/images/shopbycategory/img3.jpg';
import img4 from '../../src/assets/images/shopbycategory/img4.webp';
import img5 from '../../src/assets/images/shopbycategory/img5.webp';
import img6 from '../../src/assets/images/shopbycategory/img6.jpg';
import img7 from '../../src/assets/images/shopbycategory/img7.jpg';
import img8 from '../../src/assets/images/shopbycategory/img8.jpg';
import img9 from '../../src/assets/images/shopbycategory/img9.jpg';
import img10 from '../../src/assets/images/shopbycategory/img10.jpg';
import img11 from '../../src/assets/images/shopbycategory/img11.jpg';
import img12 from '../../src/assets/images/shopbycategory/img12.jpg';
import img13 from '../../src/assets/images/shopbycategory/img13.jpg';
const data = [
    { img: img2, title: "Mangalsutras" },
    { img: img3, title: "Gold Coins" },
    { img: img4, title: "Earrings" },
    { img: img5, title: "Finger Rings" },
    { img: img6, title: "Pendants" },
    { img: img7, title: "Nose Pins" },
    { img: img8, title: "Chains" },
    { img: img9, title: "Bracelets" },
    { img: img10, title: "Bangles" },
    { img: img11, title: "Neckwear" },
    { img: img12, title: "Necklace Set" },
    { img: img13, title: "Pendant Sets" },
]
function ShopByCategoryCard() {
    const IconComponent = img1
    return (
        <>
            <Box sx={{ textAlign: "center", padding: "70px 0px" }}>
                <Box>
                    <Typography className='Marcellus' sx={{ fontSize: { sm: "35px", xs: "23px" }, fontWeight: "700", margin: "0 0 5px 0" }}>Shop By Category</Typography>
                    <Typography className='Marcellus' sx={{ fontSize: { sm: "18px", xs: "15px" } }}>Browse through your favorite categories. We've got them all!</Typography>
                    <Box sx={{ color: "#000" }}>
                        <IconComponent style={{ fill: "currentColor", height: "auto", width: "100%" }} />
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: 'wrap', margin: {lg:" 0 30px"}, alignItems: "center", justifyContent: "center" }}>
                        {data.map((item, index) => {
                            return (
                                <Box sx={{ width: "176px", height: "100%", margin: {lg:"20px" ,xs:"3px"}, cursor: "pointer", "&:hover": { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" } }}>
                                    <Box sx={{ height: "176px", width: "176px", backgroundImage: `url(${item.img})`, backgroundSize: "cover", }}></Box>
                                    <Box sx={{ border: "1px solid #E5E1DA" }}>
                                        <Typography className='Marcellus' sx={{ fontSize: "17px", textAlign: "center", margin: "23px 10px 10px 10px", fontWeight: "600", color: "#832729" }}> {item.title}</Typography>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", "&:hover": { color: "#832729" } }}>
                                            <Typography sx={{ fontSize: "14px", margin: "0 1px 25px 5px", transition: "margin 0.2s ease", "&:hover": { margin: "0 20px 25px 0px" } }}>Explore </Typography>
                                            <KeyboardArrowRightIcon sx={{ fontSize: "15px", margin: "0 0px 25px 5px", }} />
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default ShopByCategoryCard