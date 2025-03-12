import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img1_1 from '../../src/assets/images/shopimg/Marquee-jwell-img-1.jpg'
import img2_2 from '../../src/assets/images/shopimg/Marquee-jwell-img-2.jpg'
import img3_3 from '../../src/assets/images/shopimg/Marquee-jwell-img-3.jpg'
import img4_4 from '../../src/assets/images/shopimg/Marquee-jwell-img-4.jpg'
import img1 from '../assets/images/newcollection/product-7-1.jpg'
import img11 from '../assets/images/newcollection/product-7-2.jpg'
import img2 from '../assets/images/newcollection/product-8-1.jpg'
import img22 from '../assets/images/newcollection/product-8-2.jpg'
import img3 from '../assets/images/newcollection/product-9-1.jpg'
import img33 from '../assets/images/newcollection/product-9-2.jpg'
import img4 from '../assets/images/newcollection/product-10-1.jpg'
import img44 from '../assets/images/newcollection/product-10-2.jpg'
import img5 from '../assets/images/newcollection/product-11-2.jpg'
import img55 from '../assets/images/newcollection/product-11-2.jpg'
import img6 from '../assets/images/newcollection/product-12-1.jpg'
import img66 from '../assets/images/newcollection/product-12-2.jpg'
import img7 from '../assets/images/newcollection/product-13-1.jpg'
import img77 from '../assets/images/newcollection/product-13-2.jpg'
import img8 from '../assets/images/newcollection/product-14-1.jpg'
import img88 from '../assets/images/newcollection/product-14-2.jpg'
import img9 from '../assets/images/newcollection/product-15-1.jpg'
import img99 from '../assets/images/newcollection/product-15-2.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, } from 'swiper/modules';
import Slider from 'react-slick'




function valuetext(value) {
    return `${value}°C`;
}

const lineimg = [
    {
        img: img1_1,
        title: "Navratna Stones"
    },
    {
        img: img2_2,
        title: "Pearl Jewellery"
    },
    {
        img: img3_3,
        title: " Enamal Jewellery"
    },
    {
        img: img4_4,
        title: "Bridal Jewellery"
    }
]
const product_type = [
    {
        name: "Our Store",
        quantity: "(10)"

    },
    {
        name: "Ankle",
        quantity: "(3)"

    },
    {
        name: "Bracelet",
        quantity: "(14)"

    },
    {
        name: "Brooche",
        quantity: "(3)"

    },
    {
        name: "Earring",
        quantity: "(10)"

    },
    {
        name: "Ring",
        quantity: "(4)"

    },
    {
        name: "Necklace",
        quantity: "(12)"

    },
]
const Filter_by_Weight = [
    {
        name: "10gm",
        quantity: "(13)"

    },
    {
        name: "15gm",
        quantity: "(13)"

    },
    {
        name: "20gm",
        quantity: "(13)"

    },
    {
        name: "30gm",
        quantity: "(10)"

    },

]
const Tags = [
    {
        name: "Bracelet"
    },
    {
        name: "Earring"
    },
    {
        name: "Gold"
    },
    {
        name: "silver"
    },
    {
        name: "diamond"
    },
    {
        name: "platinum"
    },
    {
        name: "ring"
    },
]
const products = [
    {
        img: img1,
        to: "/singleproduct",
        imgg: img11,
        title: 'Ear Stud , Nose Stud',
        name: 'Pearl Hair Clip',
        price: '32.00$ - 37.00$'

    },
    {
        img: img2,
        to: "/singleproduct",
        imgg: img22,
        title: 'Ear Stud , Nose Stud',
        name: 'Pearl Hair Clip',
        price: '32.00$ - 37.00$'

    },
    {
        img: img3,
        to: "/singleproduct",
        imgg: img33,
        title: 'Ear Stud , Nose Stud',
        name: 'Pearl Hair Clip',
        price: '32.00$ - 37.00$'

    },
    {
        img: img4,
        to: "/singleproduct",
        imgg: img44,
        title: 'Ear Stud , Nose Stud',
        name: 'Pearl Hair Clip',
        price: '32.00$ - 37.00$'

    },
    {
        img: img5,
        to: "/singleproduct",
        imgg: img55,
        title: 'Ear Stud , Nose Stud',
        name: 'Pearl Hair Clip',
        price: '32.00$ - 37.00$'

    },
    {
        img: img6,
        to: "/singleproduct",
        imgg: img66,
        title: 'Ear Stud , Nose Stud',
        name: 'Pearl Hair Clip',
        price: '32.00$ - 37.00$'

    },
    {
        img: img7,
        to: "/singleproduct",
        imgg: img77,
        title: 'Ear Stud , Nose Stud',
        name: 'Pearl Hair Clip',
        price: '32.00$ - 37.00$'

    },
    {
        img: img8,
        to: "/singleproduct",
        imgg: img88,
        title: 'Ear Stud , Nose Stud',
        name: 'Pearl Hair Clip',
        price: '32.00$ - 37.00$'

    },
    {
        img: img9,
        to: "/singleproduct",
        imgg: img99,
        title: 'Ear Stud , Nose Stud',
        name: 'Pearl Hair Clip',
        price: '32.00$ - 37.00$'

    },
]
function Shopcard() {
    const [value, setValue] = useState([0, 100]);
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };
    const handleChange = (event) => {
        setValue();
    };
    return (
        <>
            <Box sx={{ backgroundColor: "#FFF9F4" }}>
                <Box sx={{ padding: "100px 0 100px 0", backgroundColor: "#F7EBDC" }}>
                    <h1 className='Marcellus' style={{ textAlign: 'center', fontSize: '36px', fontWeight: '500', marginBottom: '10px' }}>Shop</h1>
                    <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                        <Link to='/'><Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px', "&:hover": { color: "#B38A69" }, }}>Home</Typography></Link>
                        <Typography className='Marcellus' sx={{ marginRight: "3px", fontSize: '15px' }}>/</Typography>
                        <Typography className='Marcellus' sx={{ marginRight: "3px", "&:hover": { color: "#B38A69" }, fontSize: '15px' }}>Shop</Typography>
                    </Box>

                </Box>
                <Box sx={{ backgroundColor: '#AC805D', height: "auto", width: "100%", display: { sm: 'flex', xs: "none" }, justifyContent: 'center', alignItems: 'center' }}>

                    <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{ clickable: true }} loop={true} modules={[FreeMode, Autoplay]} className="mySwiper" autoplay={{ delay: 10, disableOnInteraction: false }} speed={8000} >
                        {lineimg.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={{ fontSize: '20px', fontWeight: '500', color: '#B38A69', display: 'flex' }}>
                                    <Box sx={{ height: '250px', width: '250px', borderRadius: "50%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={item.img} alt={item.title} style={{ borderRadius: "50%", marginLeft: '40px' }} />
                                        <Typography className='Marcellus' sx={{ color: 'white', fontSize: "34px", textAlign: "center", marginLeft: "40px" }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <Box sx={{ padding: "50px 0px 50px 20px" }}>
                    <Grid container>
                        <Grid item lg={3} sx={{ backgroundColor: '#F5E7D6' }}>


                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}>Filter By Categories</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px" }}>
                                    {
                                        product_type.map((item, index) => {
                                            return (
                                                <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: "1px solid black", marginBottom: '16px', paddingBottom: "7px" }} >
                                                    <li style={{ padding: '4px 0px' }}><Typography sx={{ color: 'black', fontSize: '14px', cursor: 'pointer', "&:hover ": { color: "#AC805D" } }}>{item.name}</Typography></li>
                                                    <li>{item.quantity}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>


                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}>Tags</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px" }}>
                                    {
                                        Tags.map((item, index) => {
                                            return (
                                                < >
                                                    <Button variant='contained' sx={{ fontSize: '12px', margin: '5px 5px', backgroundColor: 'black', color: 'white', border: '0px solid #E6E6E6', borderRadius: "0px", "&:hover": { backgroundColor: '#AC805D' } }}>{item.name}</Button>
                                                </>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>

                            {/* Filter_by_Weight */}

                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}>Filter by Weight</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px" }}>
                                    {
                                        Filter_by_Weight.map((item, index) => {
                                            return (
                                                <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: "1px solid black", marginBottom: '16px', paddingBottom: "7px" }} >
                                                    <li style={{ padding: '4px 0px' }}><Typography sx={{ color: 'black', fontSize: '14px', cursor: 'pointer', "&:hover ": { color: "#AC805D" } }}>{item.name}</Typography></li>
                                                    <li>{item.quantity}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>

                            {/* Filter by price */}
                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}>Filter by price</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px" }}>
                                    <Box sx={{ width: 300 }}>
                                        <Slider getAriaLabel={() => 'Temperature range'} value={value} onChange={handleChange} valueLabelDisplay="auto" getAriaValueText={valuetext} />
                                    </Box>
                                    <Typography className='Marcellus' sx={{ fontSize: "19px" }}>Price: 30.00$ — 40.00$</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* part2 */}

                        <Grid item lg={9} sx={{ backgroundColor: '#red', height: 'auto', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                            {
                                products.map((item, index) => {

                                    return (
                                        <Link to={item.to} >
                                            <Box id='mainbox' sx={{ marginTop: '30px', height: { sm: "529px", xs: '450px' }, width: { sm: "293px", xs: '230px' }, margin: { sm: ' 50px 25px ', xs: '30px 60px' }, pb: 20 }}>
                                                <Box onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} sx={{ backgroundImage: `url(${hoveredImage === index ? item.imgg : item.img})`, transition: '0.25s', height: "100% ", width: 'auto', backgroundSize: "contain", position: 'relative' }}>
                                                    <Box sx={{ height: '30px', width: "60px", backgroundColor: "#AC805D", color: 'white', textAlign: 'center', fontSize: "12px", display: 'flex', justifyContent: 'center', alignItems: "center", position: "absolute", right: '10px', top: "10px", opacity: '1', transform: 'translateY(0px)', visibility: 'visible', transition: 'opacity 0.2s ease, transform 0.2s ease', "#mainbox:hover &": { opacity: '1', transform: 'translateY(10px)', visibility: 'hidden' } }}>Sale</Box>
                                                    <Box sx={{ height: '40px', width: "40px", padding: '3px', backgroundColor: "black", color: 'white', textAlign: 'center', fontSize: "12px", display: 'flex', justifyContent: 'center', alignItems: "center", position: "absolute", right: '19px', top: "10px", opacity: '0', transform: 'translateY(-7px)', visibility: 'hidden', transition: 'opacity 0.2s ease, transform 0.2s ease', "&:hover ": { color: 'white', backgroundColor: "#AC805D" }, "#mainbox:hover &": { opacity: '1', transform: 'translateY(0px)', visibility: 'visible' } }}><FavoriteBorderIcon sx={{ backgroundColor: "black", color: 'white', "&:hover ": { color: 'white', backgroundColor: "#AC805D" } }} /> </Box>
                                                    <Box sx={{ height: '40px', width: "92%", backgroundColor: "black", color: 'white', textAlign: 'center', fontSize: "15px", display: 'flex', justifyContent: 'center', alignItems: "center", position: "absolute", left: '10px', bottom: "10px", opacity: '0', transform: 'translateY(-7px)', visibility: 'hidden', transition: 'opacity 0.2s ease, transform 0.2s ease', "#mainbox:hover &": { opacity: '1', transform: 'translateY(0px)', visibility: 'visible' }, "&:hover ": { color: 'white', backgroundColor: "#AC805D" } }}>Select Option</Box>
                                                </Box>
                                                <Typography className='Marcellus' sx={{ textAlign: 'center', fontSize: '16px', marginTop: '3px', color: '#B58D6C' }}>{item.title}</Typography>
                                                <Typography className='Marcellus' sx={{ textAlign: 'center', fontSize: '23px', marginTop: '3px' }}>{item.name}</Typography>
                                                <Typography className='Marcellus' sx={{ textAlign: 'center', fontSize: '16px', marginTop: '3px' }}>{item.price}</Typography>
                                            </Box>
                                        </Link>

                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}

export default Shopcard