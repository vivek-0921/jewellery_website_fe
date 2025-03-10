import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'

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

function Recentcollectioncard() {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };
    return (
        <>
            <Box sx={{ backgroundColor: "#F5E7D6", padding: { md: '100px 50px 0px 50px', xs: "50px 0 0 0px" }, height: 'auto' }}>
                <Container>
                    <Typography className='Marcellus' sx={{ textAlign: 'center', color: 'black', letterSpacing: { sm: '2px', xs: '1.2px' }, fontSize: { sm: "23px", xs: '11px' } }} >ELEGANCE IN EVERY PIECE</Typography>
                    <Typography className='Marcellus' style={{ textAlign: 'center', marginTop: '20px', letterSpacing: '2px', fontSize: { sm: "35px", xs: '23px' }, fontWeight: '500' }}>Your Style, Our Collection</Typography>
                    <Swiper slidesPerView={3} spaceBetween={30} loop={true} pagination={{ clickable: true, }}
                        modules={[Pagination, Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }}
                        speed={2000} pagination={false} className="mySwiper" sx={{ height: '100vh' }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}>
                        {
                            products.map((item, index) => {

                                return (
                                    <SwiperSlide>
                                        <Link to={item.to}>
                                            <Box id='mainbox' sx={{ marginTop: '30px', height: { sm: "529px", xs: '450px' }, width: { sm: "293px", xs: '230px' }, margin: { sm: ' 50px 25px ', xs: '30px 60px' }, pb: 20 }}>
                                                <Box onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} sx={{ backgroundImage: `url(${hoveredImage === index ? item.imgg : item.img})`, height: "100% ", width: 'auto', backgroundSize: "contain", position: 'relative' }}>
                                                    <Box sx={{ height: '30px', width: "60px", backgroundColor: "#AC805D", color: 'white', textAlign: 'center', fontSize: "12px", display: 'flex', justifyContent: 'center', alignItems: "center", position: "absolute", right: '10px', top: "10px", opacity: '1', transform: 'translateY(0px)', visibility: 'visible', transition: 'opacity 0.2s ease, transform 0.2s ease', "#mainbox:hover &": { opacity: '1', transform: 'translateY(10px)', visibility: 'hidden' } }}>Sale</Box>
                                                    <Box sx={{ height: '40px', width: "40px", padding: '3px', backgroundColor: "black", color: 'white', textAlign: 'center', fontSize: "12px", display: 'flex', justifyContent: 'center', alignItems: "center", position: "absolute", right: '19px', top: "10px", opacity: '0', transform: 'translateY(-7px)', visibility: 'hidden', transition: 'opacity 0.2s ease, transform 0.2s ease', "&:hover ": { color: 'white', backgroundColor: "#AC805D" }, "#mainbox:hover &": { opacity: '1', transform: 'translateY(0px)', visibility: 'visible' } }}><FavoriteBorderIcon sx={{ backgroundColor: "black", color: 'white', "&:hover ": { color: 'white', backgroundColor: "#AC805D" } }} /> </Box>
                                                    <Box sx={{ height: '40px', width: "92%", backgroundColor: "black", color: 'white', textAlign: 'center', fontSize: "15px", display: 'flex', justifyContent: 'center', alignItems: "center", position: "absolute", left: '10px', bottom: "10px", opacity: '0', transform: 'translateY(-7px)', visibility: 'hidden', transition: 'opacity 0.2s ease, transform 0.2s ease', "#mainbox:hover &": { opacity: '1', transform: 'translateY(0px)', visibility: 'visible' }, "&:hover ": { color: 'white', backgroundColor: "#AC805D" } }}>Select Option</Box>
                                                </Box>
                                                <Typography className='Marcellus' sx={{ textAlign: 'center', fontSize: '16px', marginTop: '3px', color: '#B58D6C' }}>{item.title}</Typography>
                                                <Typography className='Marcellus' sx={{ textAlign: 'center', fontSize: '23px', marginTop: '3px' }}>{item.name}</Typography>
                                                <Typography className='Marcellus' sx={{ textAlign: 'center', fontSize: '16px', marginTop: '3px' }}>{item.price}</Typography>
                                            </Box>  
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }</Swiper>


                </Container>
            </Box>
        </>
    )
}
export default Recentcollectioncard
